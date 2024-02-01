import {
  mobile,
  backend,
  creator,
  pixel,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  mazesaze,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: " Full Stack Developer",
    icon: web,
  },
  {
    title: "Data Analytics",
    icon: backend,
  },
  {
    title: "Blockchain",
    icon: mobile,
  },

  {
    title: "DSA",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Sales DashBoard PowerBI",
    description:
      "A thorough and eye-catching tool for giving a thorough picture of sales success inside a company is the Sales Dashboard project in Power BI. This dashboard uses Power BI's capabilities to provide  insights into important sales indicators,enabling data-driven decision-making for corporate growth and optimization.",
    tags: [
      {
        name: "Power BI",
        color: "blue-text-gradient",
      },
      {
        name: "Excel",
        color: "green-text-gradient",
      },
      {
        name: "Dashboard",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/SakshamAngirash/Power-BI/tree/main/Store%20DashBoard%20Project",
  },
  {
    name: "Housing Data Cleaning",
    description:
      "Reliability and accuracy are crucial in the field of data analytics. My data cleaning project demonstrates my ability to improve data quality by using Microsoft Excel and SQL. This research explores the complex process of sanitizing and converting unrefined datasets into accurate, dependable data.",

    tags: [
      {
        name: "Data Cleaning",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "MS-Excel",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/SakshamAngirash/Housing-Data-Cleaning-SQL",
  },
  {
    name: "Covid Data Exploration",
    description:
      "In the context of the global pandemic, my project on COVID data exploration highlights my proficiency in extracting valuable insights from complex datasets using SQL and Microsoft Excel. This project aims exploring and cleaning COVID-related data to derive meaningful trends and patterns.",
    tags: [
      {
        name: "Data Exploration",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "MS-Excel",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/SakshamAngirash/Covid-Data-Exploration-SQL",
  },
  {
    name: "Pixel Vault",
    description:
      "Pixel Vault utilizes the power of blockchain technology, ensuring data integrity and reliability through a decentralized network. Our platform is user-friendly and accessible to all, making it the perfect solution for individuals and businesses alike.",
    tags: [
      {
        name: "Blockchain Full Stack",
        color: "blue-text-gradient",
      },
      {
        name: "IPFS ",
        color: "green-text-gradient",
      },
      {
        name: "Solidity",
        color: "pink-text-gradient",
      },
    ],
    image: pixel,
    source_code_link:
      "https://github.com/SakshamAngirash/Pixel-Vault-Blockchain-",
  },
  {
    name: "Maze Saze Path Finding ",
    description:
      "Maze Saze is a pathfinding visualizer project provides an interactive platform that allows you to create custom mazes, define starting and target points, and watch as algorithms effortlessly navigate the maze to find the shortest or most efficient path.",
    tags: [
      {
        name: "Full Stack",
        color: "blue-text-gradient",
      },
      {
        name: "DSA",
        color: "green-text-gradient",
      },
      {
        name: "Path Finding",
        color: "pink-text-gradient",
      },
    ],
    image: mazesaze,
    source_code_link:
      "https://github.com/SuvrtSharma/Maze-Router-path-finding-algorithm-visulization",
  },
];

export { services, technologies, experiences, testimonials, projects };
