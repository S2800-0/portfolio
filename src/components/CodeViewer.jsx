import { motion, AnimatePresence } from 'motion/react';
import { X, FileCode, Copy, Check } from 'lucide-react';
import { useState, useEffect } from 'react';

const CodeViewer = ({ fileUrl, fileName, onClose }) => {
  const [code, setCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (fileUrl) {
      setLoading(true);
      fetch(fileUrl)
        .then(res => res.text())
        .then(text => {
          setCode(text);
          setLoading(false);
        })
        .catch(() => {
          setCode('// Error loading file');
          setLoading(false);
        });
    }
  }, [fileUrl]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
          className="relative w-full max-w-5xl max-h-[90vh] rounded-2xl bg-[#1e1e1e] border border-gray-700 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#252526] border-b border-gray-700">
            <div className="flex items-center gap-3">
              <FileCode size={18} className="text-yellow-400" />
              <span className="text-white font-mono text-sm">{fileName}</span>
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

          {/* Code Content */}
          <div className="overflow-auto max-h-[calc(90vh-4rem)] p-6">
            {loading ? (
              <div className="flex items-center justify-center h-40 text-gray-500">
                <span className="animate-pulse">Loading code...</span>
              </div>
            ) : (
              <pre className="font-mono text-sm leading-relaxed">
                <code className="text-gray-300 whitespace-pre-wrap">{code}</code>
              </pre>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CodeViewer;