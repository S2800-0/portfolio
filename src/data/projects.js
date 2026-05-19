export const projects = [
  // ========== DEPI DATA SCIENCE INTERNSHIP ==========
  {
    id: 1,
    title: 'SuperStore Sales & Profit Analysis',
    shortDesc: 'End-to-end data analysis of retail sales with outlier detection and feature engineering',
    fullDesc: `Comprehensive analysis of SuperStore order data including data cleaning, type conversion, feature engineering (profit margin, unit price, shipping days), outlier detection using IQR method, and categorical encoding. Generated insights on sales by category and profit distributions.`,
    tech: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib'],
    videoUrl: '/Portfolio/videos/superstore-demo.mp4',
    thumbnail: '/Portfolio/images/superstore-thumb.jpg',
    githubUrl: 'https://github.com/S2800-0/superstore-analysis',
    codeFiles: [
      { name: 'app.py', url: '/Portfolio/code/superstore/app.py' }
    ],
    liveUrl: null,
    category: 'DEPI Data Science Internship',
    date: '2025',
  },
  {
    id: 2,
    title: 'Student Mental Health & Burnout Analysis',
    shortDesc: 'Merged dataset analysis correlating sleep, stress, and study habits with burnout levels',
    fullDesc: `Merged and cleaned two batches of student mental health data. Standardized text fields, handled missing values with median/mode imputation. Created visualizations exploring relationships between daily sleep hours, stress levels, study hours, and burnout levels using boxplots, count plots, and KDE distributions.`,
    tech: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib'],
    videoUrl: '/Portfolio/videos/burnout-demo.mp4',
    thumbnail: '/Portfolio/images/burnout-thumb.jpg',
    githubUrl: 'https://github.com/S2800-0/student-burnout-analysis',
    codeFiles: [
      { name: 'burnout_level.py', url: '/Portfolio/code/burnout/burnout_level.py' }
    ],
    liveUrl: null,
    category: 'DEPI Data Science Internship',
    date: '2025',
  },
  {
    id: 3,
    title: 'BMW Cars Market Dataset Analysis',
    shortDesc: 'Synthetic car market data with feature engineering and outlier treatment',
    fullDesc: `Cleaned and standardized BMW car dataset with 20+ features. Handled missing values, standardized categorical mappings, clipped outliers using IQR method. Engineered features: car age, price per horsepower, mileage per year, engine efficiency, accident/service history encoding, fuel efficiency categorization, and luxury model classification.`,
    tech: ['Python', 'Pandas', 'NumPy'],
    videoUrl: '/Portfolio/videos/bmw-demo.mp4',
    thumbnail: '/Portfolio/images/bmw-thumb.jpg',
    githubUrl: 'https://github.com/S2800-0/bmw-cars-analysis',
    codeFiles: [
      { name: 'car_.py', url: '/Portfolio/code/bmw/car_.py' }
    ],
    liveUrl: null,
    category: 'DEPI Data Science Internship',
    date: '2025',
  },
  {
    id: 4,
    title: 'Adult Income Census Analysis',
    shortDesc: 'Demographic income prediction dataset with EDA and correlation analysis',
    fullDesc: `Cleaned Adult dataset from UCI repository. Handled missing values encoded as '?', removed duplicates, imputed numerical and categorical columns. Performed exploratory data analysis with distribution plots, boxplots, count plots, correlation heatmaps, and income stratification by education, workclass, and sex.`,
    tech: ['Python', 'Pandas', 'Seaborn', 'Matplotlib'],
    videoUrl: '/Portfolio/videos/adult-demo.mp4',
    thumbnail: '/Portfolio/images/adult-thumb.jpg',
    githubUrl: 'https://github.com/S2800-0/adult-income-analysis',
    codeFiles: [
      { name: 'code.py', url: '/Portfolio/code/adult/code.py' }
    ],
    liveUrl: null,
    category: 'DEPI Data Science Internship',
    date: '2025',
  },

  // ========== FULL-STACK SOFTWARE DEVELOPMENT INTERNSHIP ==========
  {
    id: 5,
    title: 'Minly - Movie Database Platform',
    shortDesc: 'Full-stack movie database with REST APIs and real-time data aggregation',
    fullDesc: `Designed end-to-end ERD schemas and built scalable REST APIs with TypeORM/PostgreSQL, ensuring clean data structures for complex relational datasets. Integrated third-party APIs to aggregate real-time movie and actor data, enabling dynamic analytics and search functionality. Translated Figma wireframes into responsive UI components while maintaining data integrity across frontend and backend systems.`,
    tech: ['React', 'Nest.js', 'TypeORM', 'PostgreSQL', 'Figma', 'Git/GitHub'],
    videoUrl: '/Portfolio/videos/minly-demo.mp4',
    thumbnail: '/Portfolio/images/minly-thumb.png',
    githubUrl: 'https://github.com/S2800-0/MMDB-Frontend',
    codeFiles: [],
    liveUrl: null,
    category: 'Full-Stack Software Development Internship',
    date: 'Jul 2025',
  },

  // ========== TECHNICAL PROJECTS ==========
  {
    id: 6,
    title: 'Real-Time Sign Language Recognition',
    shortDesc: 'AI-powered sign language translator using computer vision',
    fullDesc: `Developed an end-to-end classification system using MobileNetV2 and TensorFlow/Keras with custom Dense layers and Softmax activation for multi-class sign categorization and real-time recognition. Built a robust computer vision pipeline utilizing OpenCV and ImageDataGenerator for real-time frame capture, preprocessing, and model inference.`,
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'MobileNetV2'],
    videoUrl: '/Portfolio/videos/sign-language-demo.mp4',
    thumbnail: '/Portfolio/images/sign-language-thumb.jpg',
    githubUrl: 'https://github.com/S2800-0/sign-language',
    codeFiles: [],
    liveUrl: null,
    category: 'Technical Projects',
    date: 'Sept 2025',
  },
  {
    id: 7,
    title: 'Spell Checker Desktop Application',
    shortDesc: 'Real-time spell checker with Qt GUI and intelligent suggestions',
    fullDesc: `Designed and implemented a spell checker desktop application in C++ with Qt Creator, integrating a GUI with real-time spelling validation and dynamic suggestion lists for user-friendly interaction. Added support for real-time spelling validation and automated suggestion generation, improving text accuracy and user experience.`,
    tech: ['C++', 'Qt Creator', 'Qt Widgets', 'Algorithms'],
    videoUrl: '/Portfolio/videos/spell-checker-demo.mp4',
    thumbnail: '/Portfolio/images/spell-checker-thumb.jpg',
    githubUrl: 'https://github.com/S2800-0/spell-checker',
    codeFiles: [],
    liveUrl: null,
    category: 'Technical Projects',
    date: 'Dec 2024',
  },
];