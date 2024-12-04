export const projects = [
  {
    title: "AI-Powered Portfolio Generator",
    description:
      "A web application that automatically generates portfolio websites using AI to analyze users' professional data.",
    technologies: ["React", "OpenAI API", "Node.js", "MongoDB"],
    githubLink: "https://github.com/username/portfolio-gen",
    liveLink: "https://portfolio-gen.demo.com",
    category: "ai",
  },
  {
    title: "Smart Home Dashboard",
    description:
      "IoT dashboard for monitoring and controlling smart home devices with real-time updates and automation features.",
    technologies: ["React", "Socket.io", "Express", "MQTT"],
    githubLink: "https://github.com/username/smart-home",
    liveLink: "https://smart-home.demo.com",
    category: "iot",
  },
  {
    title: "Blockchain Exchange Platform",
    description:
      "Decentralized exchange platform for trading cryptocurrencies with wallet integration and real-time charts.",
    technologies: ["Web3.js", "Solidity", "React", "GraphQL"],
    githubLink: "https://github.com/username/crypto-exchange",
    liveLink: "https://crypto-exchange.demo.com",
    category: "blockchain",
  },
  {
    title: "AI Chat Application",
    description:
      "Real-time chat application with AI-powered language translation and content moderation.",
    technologies: ["React", "TensorFlow.js", "WebSocket", "Node.js"],
    githubLink: "https://github.com/username/ai-chat",
    liveLink: "https://ai-chat.demo.com",
    category: "ai",
  },
];

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI & ML" },
  { id: "blockchain", label: "Blockchain" },
  { id: "iot", label: "IoT" },
];

export const experiences = [
  {
    date: "2024 - Present",
    role: "Software Engineer",
    company: "Bosch Global Software Technologies",
    description:
      "Led development of scalable web applications using React and Node.js. Implemented CI/CD pipelines and microservices architecture.",
    skills: ["React", "Node.js", "AWS", "Docker", "GraphQL"],
  },
  {
    date: "2019 - 2021",
    role: "Software Engineer",
    company: "Digital Innovations Ltd",
    description:
      "Developed and maintained multiple client projects. Improved application performance by 40% through optimization techniques.",
    skills: ["Python", "Django", "PostgreSQL", "Redis", "REST APIs"],
  },
  {
    date: "2018 - 2019",
    role: "Junior Developer",
    company: "StartUp Hub",
    description:
      "Built responsive web applications and contributed to the development of core features.",
    skills: ["JavaScript", "React", "CSS", "Git"],
  },
];

export const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  Backend: ["Node.js", "Python", "GraphQL", "PostgreSQL"],
  DevOps: ["AWS", "Docker", "Kubernetes", "CI/CD"],
};

export const animations = {
  containerVariants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  },
  itemVariants: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  },
};
