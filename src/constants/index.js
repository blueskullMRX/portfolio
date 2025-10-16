
import project1 from "../assets/projects/FutureVision.jpg";
import project2 from "../assets/projects/FuzzyCBR.jpg";
import project3 from "../assets/projects/EFSA.jpg";
import project4 from "../assets/projects/cardgame.jpg";
import project5 from "../assets/projects/ecomapi.png";
import project6 from "../assets/projects/FSTlink.jpg";
import project7 from "../assets/projects/portfolio.jpg";
import project8 from "../assets/projects/Calender.jpg";
import project9 from "../assets/projects/amazon.jpg";
import project10 from "../assets/projects/project-2.jpg";
import { title } from "framer-motion/client";

export const HERO_CONTENT = `I am a versatile professional combining expertise in Data Science and Full-Stack Development. With a strong foundation in machine learning, statistical analysis, and data visualization, I create impactful solutions that bridge the gap between data insights and web applications. My skills span from building predictive models and implementing ML algorithms to developing scalable web applications. I excel at transforming complex data challenges into user-friendly solutions, leveraging both traditional statistical methods and cutting-edge AI technologies. Let's turn data into actionable insights and powerful applications together!`;

export const ABOUT_TEXT = `I am a passionate Software Engineer and Data Scientist dedicated to creating impactful solutions at the intersection of technology and data. With expertise in machine learning, full-stack development, and data-driven decision-making, I combine innovative problem-solving with a deep understanding of cutting-edge tools and methodologies. From building intuitive web applications to developing advanced machine learning models, I thrive on transforming complex challenges into seamless, efficient systems that drive value and innovation. With a proven track record of delivering high-quality software products and leveraging data to inform strategic decisions, I am committed to pushing the boundaries of what's possible and creating a brighter, smarter future for all.`;	

export const EXPERIENCES = [
  
  { 
    period: "July 2025 - August 2025",
    duration: "2 months",
    role: "AI Developer – Intelligent Healthcare Platform",
    company: "DIGIUP",
    companyLogo: "../assets/digiup.png",
    description: ` 
  Developed SEHATOKA, an AI-driven healthcare platform integrating intelligent diagnosis and workflow automation.
  Designed and deployed machine learning models for symptom-based patient routing, disease risk prediction, and an NLP-powered doctorchatbot.
  Integrated Large Language Models (LLMs) for clinical decision support and automated patient management.`,
    technologies: ["Python", "NLP", "BERT (Language Model)", "Artificial Intelligence (AI)","Postgres","FastAPI","React","Docker","Celery","Redis"],
  },
  {
    period: "April 2024 - June 2024",
    duration: "3 months",
    role: "Web Developer",
    company: "Smart Automation Technologies",
    companyLogo: "../assets/sa.jpg",
    description: ` 
  Developed a comprehensive solution for auditing and managing hardware and logistics inventory using the MEAN stack.  
  Designed and implemented the resource management section of the platform, enhancing user experience.  
  Conducted thorough testing and debugging to ensure system reliability and performance.  
  Collaborated with cross-functional teams at Smart Automation Technologies Pvt. Ltd. to drive project success.`,
    technologies: ["AngularJS", "MongoDB", "MindManager", "PowerDesigner", "Express.js", "Node.js","HTML","CSS","JavaScript"],
  },
  
];

export const PROJECTS = [
  {title:"Real-Time Amazon Review Sentiment Analysis",
    image: project9,
    description:"Real-Time Review Analysis Platform A comprehensive microservices-based solution for real-time sentiment analysis and review processing, featuring both static reporting and live streaming dashboards. 🏗️ Architecture Overview This platform implements a distributed microservices architecture designed for high-throughput review processing and real-time analytics.",
    technologies: ["Python", "FastAPI", "Apache-kafka", "Apache-Spark", "MongoDB", "React"],
    link:"https://github.com/blueskullMRX/Amazon_realTime_Reviews_Analysis"
  },
  {title:"Facial expression detection",
    image: project10,
    description:"Developed a CNN model using TensorFlow/Keras for emotion recognition from facial images with preprocessing and classification metrics evaluation.Deployed a Streamlit app for real-time emotion detection via webcam and analysis of uploaded images or videos.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Streamlit"],
    link:"https://github.com/blueskullMRX/Facial-expression-detection"
  },
  {
    title:"FutureVision",
    image: project1,
    description:"Data Management and Processing Application : Design and development of a web application for importing, managing, and processing data (CSV, Excel, JSON…) and applying Machine Learning models using the Streamlit framework (Python).",
    technologies: ["Python", "Streamlit", "Pandas", "Numpy", "Scikit-learn", "Plotly-Express"],
    link:"https://github.com/blueskullMRX/FutureVision.git",
  },
  {
    title:"Performance evaluation of fuzzy clustered CBR",
    image: project2,
    description:"Fuzzy Clustered Case-Based Reasoning System: Development of a machine learning framework that enhances traditional Case-Based Reasoning (CBR) using fuzzy clustering. The system partitions a case base into overlapping fuzzy clusters to improve knowledge retrieval, reduce computational costs, and enhance decision-making accuracy.",
    technologies: ["Python", "Scikit-learn", "Numpy","pandas", "scipy","skfuzzy","matplotlib"],
    link:"#",
  },
  {
    title:"Parkinson’s Disease Prediction with Machine Learning",
    image: project3,
    description:"This project uses vocal features and an Ensemble Feature Selection Algorithm (EFSA) to enhance Parkinson’s disease classification. Optimized models (Logistic Regression, Random Forest, LightGBM) are combined in a majority-vote ensemble, improving accuracy and robustness for early diagnosis, particularly in telemedicine.",
    technologies: ["Python", "Scikit-learn", "Numpy","pandas", "scipy","matplotlib","seaborn","lightgb"],
    link:"#",
  },
  {
    title: "Moroccan Card Game",
    image: project4,
    description:"Cpp_Projet_jeux_de_carte is a C++ and Qt-based card game built from scratch, recreating the Moroccan game 'Ronda' with custom game logic and an interactive GUI. It showcases my skills in C++ development, UI design, and game mechanics implementation without external engines.",
    technologies: ["C++", "Qt"],
    link:"#",
  },
  {
    title: "E-Commerce Api",
    image: project5,
    description:
      "Developed a comprehensive RESTful E-commerce API with complete order management, product catalog, and secure payment processing capabilities. Implemented JWT authentication for secure endpoints, integrated Cloudinary for scalable image management, and designed a robust database schema for efficient data handling.",
    technologies: ["C#", ".Net-Core", "SQL-server"],
    link:"#",
  },
  {
    title: "FST-LINK",
    image: project6,
    description:
      "FST-LINK is an advanced web application developed using Django, designed to enhance connectivity and streamline interactions within an academic ecosystem. The platform features robust user authentication, efficient media management, and dynamic content rendering, all powered by Django's powerful ORM for seamless database integration. With a focus on scalability and maintainability, this project demonstrates my expertise in full-stack web development, optimizing user experiences, and building sophisticated, data-driven web applications.",
    technologies: ["HTML", "CSS", "JavaScript", "Django","Sqlite"],
    link:"#",
  },
  {
    title: "Portfolio Website",
    image: project7,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "TailWindCss","Motion"],
    link:"#",
  },
  {
    title:"Personal Calendar",
    image: project8,
    description:"Personal Agenda Management App : Design and development of a mobile application for managing academic tasks using the Flutter framework (Dart) and the SQLite database management system.",
    technologies: ["Dart", "Flutter", "SQLite"],
    link:"#",
  }
  
];

export const CONTACT = {
  address: "Tanger ,Morocco",
  phoneNo: "+212 602 3377 51 ",
  email: "Amgrout.Zakaria@gmail.com",
};
