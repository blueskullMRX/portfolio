
import project1 from "../assets/projects/FutureVision.jpg";
import project2 from "../assets/projects/FuzzyCBR.jpg";
import project3 from "../assets/projects/EFSA.jpg";
import project4 from "../assets/projects/cardgame.jpg";
import project5 from "../assets/projects/project-2.jpg";
import project6 from "../assets/projects/FSTlink.jpg";
import project7 from "../assets/projects/portfolio.jpg";
import project8 from "../assets/projects/Calender.jpg";
import { link } from "framer-motion/client";

export const HERO_CONTENT = `I am a passionate full-stack developer with a talent for building robust, scalable, and user-centric web applications. With extensive hands-on experience, I’ve mastered crafting seamless front-end experiences and architecting efficient back-end systems. My expertise spans a wide range of technologies, allowing me to create innovative solutions that drive meaningful impact, enhance business growth, and elevate user satisfaction. I thrive on solving challenges and transforming ideas into powerful, real-world applications. Let’s build the future together!`;

export const ABOUT_TEXT = `Blueskull is a passionate Software Engineer and Data Scientist dedicated to creating impactful solutions at the intersection of technology and data. With expertise in machine learning, full-stack development, and data-driven decision-making, Blueskull combines innovative problem-solving with a deep understanding of cutting-edge tools and methodologies. From building intuitive web applications to developing advanced machine learning models, Blueskull thrives on transforming complex challenges into seamless, efficient systems that drive value and innovation. With a proven track record of delivering high-quality software products and leveraging data to inform strategic decisions, Blueskull is committed to pushing the boundaries of what’s possible and creating a brighter, smarter future for all.`;	

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title:"FutureVision",
    image: project1,
    description:"Data Management and Processing Application : Design and development of a web application for importing, managing, and processing data (CSV, Excel, JSON…) and applying Machine Learning models using the Streamlit framework (Python).",
    technologies: ["Python", "Streamlit", "Pandas", "Numpy", "Scikit-learn", "Plotly-Express"],
    link:"#",
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
      "A fully functional e-commerce Api ,including the whole ecosystem from browsing to payment ,with the usage of cloudinary as a cloud-platform to store the images and the JWT to secure the Api .",
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
