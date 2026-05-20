export const projects = [
  // ========== DEPI DATA SCIENCE INTERNSHIP ==========
  {
    id: 1,
    title: 'SuperStore Sales & Profit Analysis',
    shortDesc: 'End-to-end retail data analysis with outlier detection and feature engineering',
    fullDesc: `Comprehensive analysis of SuperStore order data including data cleaning, type conversion, feature engineering (profit margin, unit price, shipping days), outlier detection using IQR method, and categorical encoding. Generated insights on sales by category and profit distributions.`,
    tech: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib'],
    thumbnail: '/Portfolio/images/superstore-thumb.jpg',
    codeFiles: [
      { name: 'SuperStore_Analysis.ipynb', url: '/Portfolio/notebooks/superstore/SuperStore_Analysis.ipynb' }
    ],
    resources: [
      { name: 'Dataset', url: '/Portfolio/datasets/superstore/SuperStoreOrders.csv', type: 'dataset' },
      { name: 'Project Report', url: '/Portfolio/reports/superstore/report.pdf', type: 'document' },
      { name: 'Presentation', url: '/Portfolio/reports/superstore/presentation.pptx', type: 'presentation' }
    ],
    hasGithub: false,
    liveUrl: null,
    category: 'DEPI Data Science Internship',
    date: '2025',
    status: 'completed'
  },
  {
    id: 2,
    title: 'Student Mental Health & Burnout Analysis',
    shortDesc: 'Merged dataset analysis correlating sleep, stress, and study habits with burnout',
    fullDesc: `Merged and cleaned two batches of student mental health data. Standardized text fields, handled missing values with median/mode imputation. Created visualizations exploring relationships between daily sleep hours, stress levels, study hours, and burnout levels using boxplots, count plots, and KDE distributions.`,
    tech: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib'],
    thumbnail: '/Portfolio/images/burnout-thumb.jpg',
    codeFiles: [
      { name: 'Burnout_Analysis.ipynb', url: '/Portfolio/notebooks/burnout/Burnout_Analysis.ipynb' }
    ],
    resources: [
      { name: 'Dataset 1', url: '/Portfolio/datasets/burnout/student_mental_health_burnout.csv', type: 'dataset' },
      { name: 'Dataset 2', url: '/Portfolio/datasets/burnout/student_mental_health_burnout_2.csv', type: 'dataset' },
      { name: 'Project Report', url: '/Portfolio/reports/burnout/report.pdf', type: 'document' }
    ],
    hasGithub: false,
    liveUrl: null,
    category: 'DEPI Data Science Internship',
    date: '2025',
    status: 'completed'
  },
  {
    id: 3,
    title: 'BMW Cars Market Dataset Analysis',
    shortDesc: 'Synthetic car market data with feature engineering and outlier treatment',
    fullDesc: `Cleaned and standardized BMW car dataset with 20+ features. Handled missing values, standardized categorical mappings, clipped outliers using IQR method. Engineered features: car age, price per horsepower, mileage per year, engine efficiency, accident/service history encoding, fuel efficiency categorization, and luxury model classification.`,
    tech: ['Python', 'Pandas', 'NumPy'],
    thumbnail: '/Portfolio/images/bmw-thumb.jpg',
    codeFiles: [
      { name: 'BMW_Analysis.ipynb', url: '/Portfolio/notebooks/bmw/BMW_Analysis.ipynb' }
    ],
    resources: [
      { name: 'Dataset', url: '/Portfolio/datasets/bmw/bmw_cars_market_dataset_synthetic.csv', type: 'dataset' },
      { name: 'Project Report', url: '/Portfolio/reports/bmw/report.pdf', type: 'document' }
    ],
    hasGithub: false,
    liveUrl: null,
    category: 'DEPI Data Science Internship',
    date: '2025',
    status: 'completed'
  },
  {
    id: 4,
    title: 'Adult Income Census Analysis',
    shortDesc: 'Demographic income prediction with EDA and correlation analysis',
    fullDesc: `Cleaned Adult dataset from UCI repository. Handled missing values encoded as '?', removed duplicates, imputed numerical and categorical columns. Performed exploratory data analysis with distribution plots, boxplots, count plots, correlation heatmaps, and income stratification by education, workclass, and sex.`,
    tech: ['Python', 'Pandas', 'Seaborn', 'Matplotlib'],
    thumbnail: '/Portfolio/images/adult-thumb.jpg',
    codeFiles: [
      { name: 'Adult_Income_Analysis.ipynb', url: '/Portfolio/notebooks/adult/Adult_Income_Analysis.ipynb' }
    ],
    resources: [
      { name: 'Dataset', url: '/Portfolio/datasets/adult/adult.csv', type: 'dataset' },
      { name: 'Project Report', url: '/Portfolio/reports/adult/report.pdf', type: 'document' }
    ],
    hasGithub: false,
    liveUrl: null,
    category: 'DEPI Data Science Internship',
    date: '2025',
    status: 'completed'
  },

  // ========== FULL-STACK SOFTWARE DEVELOPMENT INTERNSHIP ==========
  {
    id: 5,
    title: 'Minly - Movie Database Platform',
    shortDesc: 'Full-stack movie database with REST APIs and real-time data aggregation',
    fullDesc: `Designed end-to-end ERD schemas and built scalable REST APIs with TypeORM/PostgreSQL, ensuring clean data structures for complex relational datasets. Integrated third-party APIs to aggregate real-time movie and actor data, enabling dynamic analytics and search functionality. Translated Figma wireframes into responsive UI components while maintaining data integrity across frontend and backend systems.`,
    tech: ['React', 'Nest.js', 'TypeORM', 'PostgreSQL', 'Figma', 'Git/GitHub'],
    thumbnail: '/Portfolio/images/minly-thumb.png',
    githubUrl: 'https://github.com/S2800-0/MMDB-Frontend',
    hasGithub: true,
    liveUrl: null,
    category: 'Full-Stack Software Development Internship',
    date: 'Jul 2025',
    status: 'completed'
  },

  // ========== TECHNICAL PROJECTS (Thndr-Inspired + Current) ==========
  {
    id: 6,
    title: '[WIP] Market Data Pipeline',
    shortDesc: 'Real-time market data ingestion pipeline mirroring Thndr tech stack — SQL + Python hardening',
    fullDesc: `Building a production-grade market data pipeline that ingests real-time financial data, processes it through Kafka/Redis streams, stores in TimescaleDB, and exposes via REST API. This project directly mirrors Thndr's infrastructure stack and demonstrates data engineering at scale.`,
    tech: ['Python', 'SQL', 'Kafka', 'Redis', 'TimescaleDB', 'FastAPI'],
    thumbnail: '/Portfolio/images/market-pipeline-thumb.jpg',
    githubUrl: 'https://github.com/S2800-0/market-data-pipeline',
    hasGithub: true,
    liveUrl: null,
    category: 'Technical Projects',
    date: 'In Progress',
    status: 'in-progress'
  },
  {
    id: 7,
    title: '[WIP] Time-Series ML Predictor',
    shortDesc: 'ML model for financial time-series forecasting — research side for quant/data science roles',
    fullDesc: `Developing a time-series machine learning model for stock price prediction using LSTM/Transformer architectures. Includes feature engineering from OHLCV data, backtesting framework, and risk-adjusted performance metrics. Shows understanding of the research side, not just data plumbing.`,
    tech: ['Python', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'Backtrader'],
    thumbnail: '/Portfolio/images/timeseries-ml-thumb.jpg',
    githubUrl: 'https://github.com/S2800-0/timeseries-ml-predictor',
    hasGithub: true,
    liveUrl: null,
    category: 'Technical Projects',
    date: 'In Progress',
    status: 'in-progress'
  },
  {
    id: 8,
    title: '[WIP] Finance Dashboard',
    shortDesc: 'End-to-end finance dashboard proving full-stack credibility for data engineering roles',
    fullDesc: `Building a real-time finance dashboard with React frontend, Node.js backend, and PostgreSQL database. Features portfolio tracking, P&L visualization, risk metrics, and alert system. Proves ability to ship end-to-end products, which is rare in data engineering applicants.`,
    tech: ['React', 'Node.js', 'PostgreSQL', 'D3.js', 'WebSockets', 'Docker'],
    thumbnail: '/Portfolio/images/finance-dashboard-thumb.jpg',
    githubUrl: 'https://github.com/S2800-0/finance-dashboard',
    hasGithub: true,
    liveUrl: null,
    category: 'Technical Projects',
    date: 'In Progress',
    status: 'in-progress'
  },
  {
    id: 9,
    title: 'Real-Time Sign Language Recognition',
    shortDesc: 'AI-powered sign language translator using computer vision',
    fullDesc: `Developed an end-to-end classification system using MobileNetV2 and TensorFlow/Keras with custom Dense layers and Softmax activation for multi-class sign categorization and real-time recognition. Built a robust computer vision pipeline utilizing OpenCV and ImageDataGenerator for real-time frame capture, preprocessing, and model inference.`,
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'MobileNetV2'],
    thumbnail: '/Portfolio/images/sign-language-thumb.jpg',
    githubUrl: 'https://github.com/S2800-0/sign-language',
    hasGithub: true,
    liveUrl: null,
    category: 'Technical Projects',
    date: 'Sept 2025',
    status: 'completed'
  },
  {
    id: 10,
    title: 'Spell Checker Desktop Application',
    shortDesc: 'Real-time spell checker with Qt GUI and intelligent suggestions',
    fullDesc: `Designed and implemented a spell checker desktop application in C++ with Qt Creator, integrating a GUI with real-time spelling validation and dynamic suggestion lists for user-friendly interaction. Added support for real-time spelling validation and automated suggestion generation, improving text accuracy and user experience.`,
    tech: ['C++', 'Qt Creator', 'Qt Widgets', 'Algorithms'],
    thumbnail: '/Portfolio/images/spell-checker-thumb.jpg',
    githubUrl: 'https://github.com/S2800-0/spell-checker',
    hasGithub: true,
    liveUrl: null,
    category: 'Technical Projects',
    date: 'Dec 2024',
    status: 'completed'
  },
];