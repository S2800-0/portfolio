import { motion, AnimatePresence } from 'motion/react';
import { X, FileCode, Copy, Check, Download, FileText, Database, Presentation } from 'lucide-react';
import { useState, useEffect } from 'react';

const NotebookViewer = ({ fileUrl, fileName, resources, onClose }) => {
  const [notebook, setNotebook] = useState(null);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('notebook');

  useEffect(() => {
    if (fileUrl) {
      setLoading(true);
      setError(null);
      fetch(fileUrl)
        .then(res => {
          if (!res.ok) throw new Error('Failed to load notebook');
          return res.json();
        })
        .then(data => {
          setNotebook(data);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [fileUrl]);

  const handleCopy = () => {
    if (notebook) {
      navigator.clipboard.writeText(JSON.stringify(notebook, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Resource icon mapping
  const resourceIcons = {
    dataset: Database,
    document: FileText,
    presentation: Presentation
  };

  // Render a notebook cell with outputs
  const renderCell = (cell, index) => {
    const cellType = cell.cell_type;
    
    return (
      <div key={index} className="mb-4 rounded-lg overflow-hidden border border-gray-800">
        {/* Cell toolbar */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-[#2d2d2d] text-xs text-gray-500">
          <span className="font-mono">In [{index + 1}]:</span>
          <span className="capitalize">{cellType}</span>
        </div>

        {/* Cell content */}
        <div className="p-4">
          {cellType === 'code' && (
            <>
              {/* Code input */}
              <pre className="font-mono text-sm text-gray-300 mb-3 overflow-x-auto">
                <code>{Array.isArray(cell.source) ? cell.source.join('') : cell.source}</code>
              </pre>

              {/* Code outputs - THIS IS THE KEY PART */}
              {cell.outputs && cell.outputs.length > 0 && (
                <div className="mt-3 space-y-2">
                  {cell.outputs.map((output, i) => (
                    <div key={i} className="rounded bg-[#1a1a1a] border border-gray-800 overflow-hidden">
                      {/* Output type badge */}
                      <div className="px-3 py-1 bg-[#252526] text-xs text-gray-500 border-b border-gray-800">
                        Output: {output.output_type}
                      </div>
                      
                      <div className="p-3">
                        {output.output_type === 'stream' && (
                          <pre className="font-mono text-sm text-gray-400 whitespace-pre-wrap">
                            {Array.isArray(output.text) ? output.text.join('') : output.text}
                          </pre>
                        )}
                        
                        {output.output_type === 'execute_result' && output.data && (
                          <div>
                            {output.data['text/plain'] && (
                              <pre className="font-mono text-sm text-gray-300 whitespace-pre-wrap">
                                {Array.isArray(output.data['text/plain']) 
                                  ? output.data['text/plain'].join('') 
                                  : output.data['text/plain']}
                              </pre>
                            )}
                            {output.data['text/html'] && (
                              <div 
                                className="text-sm text-gray-300"
                                dangerouslySetInnerHTML={{ 
                                  __html: Array.isArray(output.data['text/html']) 
                                    ? output.data['text/html'].join('') 
                                    : output.data['text/html'] 
                                }}
                              />
                            )}
                            {output.data['image/png'] && (
                              <img 
                                src={`data:image/png;base64,${output.data['image/png']}`} 
                                alt="Output visualization"
                                className="max-w-full rounded"
                              />
                            )}
                          </div>
                        )}
                        
                        {output.output_type === 'display_data' && output.data && (
                          <div>
                            {output.data['image/png'] && (
                              <img 
                                src={`data:image/png;base64,${output.data['image/png']}`} 
                                alt="Display output"
                                className="max-w-full rounded"
                              />
                            )}
                            {output.data['text/html'] && (
                              <div 
                                dangerouslySetInnerHTML={{ 
                                  __html: Array.isArray(output.data['text/html']) 
                                    ? output.data['text/html'].join('') 
                                    : output.data['text/html'] 
                                }}
                              />
                            )}
                          </div>
                        )}
                        
                        {output.output_type === 'error' && (
                          <div className="text-red-400">
                            <div className="font-mono text-sm mb-1">{output.ename}: {output.evalue}</div>
                            {output.traceback && (
                              <pre className="font-mono text-xs text-red-300 whitespace-pre-wrap overflow-x-auto">
                                {output.traceback.join('\n')}
                              </pre>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {cellType === 'markdown' && (
            <div className="prose prose-invert prose-sm max-w-none">
              <pre className="font-mono text-sm text-gray-300 whitespace-pre-wrap">
                {Array.isArray(cell.source) ? cell.source.join('') : cell.source}
              </pre>
            </div>
          )}

          {cellType === 'raw' && (
            <pre className="font-mono text-sm text-gray-500 whitespace-pre-wrap">
              {Array.isArray(cell.source) ? cell.source.join('') : cell.source}
            </pre>
          )}
        </div>
      </div>
    );
  };

  if (!fileUrl) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative w-full max-w-6xl max-h-[90vh] rounded-2xl bg-[#1e1e1e] border border-gray-700 overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#252526] border-b border-gray-700">
            <div className="flex items-center gap-3">
              <FileCode size={18} className="text-yellow-400" />
              <div>
                <span className="text-white font-mono text-sm">{fileName}</span>
                {notebook?.metadata?.kernelspec?.display_name && (
                  <span className="ml-3 text-xs text-gray-500">
                    {notebook.metadata.kernelspec.display_name}
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gray-700 text-gray-300 text-xs hover:bg-gray-600 transition-colors"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-md hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1 px-6 py-2 bg-[#1e1e1e] border-b border-gray-800">
            <button
              onClick={() => setActiveTab('notebook')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'notebook' 
                  ? 'bg-accent/20 text-accent' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Notebook
            </button>
            {resources && resources.length > 0 && (
              <button
                onClick={() => setActiveTab('resources')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'resources' 
                    ? 'bg-accent/20 text-accent' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Resources ({resources.length})
              </button>
            )}
          </div>

          {/* Content */}
          <div className="overflow-auto flex-1 p-6">
            {activeTab === 'notebook' && (
              <>
                {loading ? (
                  <div className="flex items-center justify-center h-40 text-gray-500">
                    <span className="animate-pulse">Loading notebook...</span>
                  </div>
                ) : error ? (
                  <div className="flex items-center justify-center h-40 text-red-400">
                    <span>Error: {error}</span>
                  </div>
                ) : notebook ? (
                  <div>
                    {/* Notebook metadata */}
                    {notebook.metadata && (
                      <div className="mb-6 p-4 rounded-lg bg-[#252526] border border-gray-700">
                        <h3 className="text-sm font-semibold text-gray-300 mb-2">Notebook Info</h3>
                        <div className="text-xs text-gray-500 space-y-1">
                          <p>Format: {notebook.nbformat}.{notebook.nbformat_minor}</p>
                          {notebook.metadata.kernelspec && (
                            <p>Kernel: {notebook.metadata.kernelspec.display_name} ({notebook.metadata.kernelspec.language})</p>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Cells */}
                    <div className="space-y-4">
                      {notebook.cells && notebook.cells.map((cell, index) => renderCell(cell, index))}
                    </div>
                  </div>
                ) : null}
              </>
            )}

            {activeTab === 'resources' && resources && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white mb-4">Project Resources</h3>
                {resources.map((resource, i) => {
                  const IconComponent = resourceIcons[resource.type] || FileText;
                  return (
                    <a
                      key={i}
                      href={resource.url}
                      download
                      className="flex items-center gap-4 p-4 rounded-xl bg-[#252526] border border-gray-700 hover:border-accent/50 transition-colors group"
                    >
                      <div className="p-3 rounded-lg bg-gray-800 group-hover:bg-accent/20 transition-colors">
                        <IconComponent size={20} className="text-gray-400 group-hover:text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium">{resource.name}</h4>
                        <p className="text-gray-500 text-sm capitalize">{resource.type}</p>
                      </div>
                      <Download size={16} className="text-gray-500 group-hover:text-accent" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NotebookViewer;