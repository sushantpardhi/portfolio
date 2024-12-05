export const portfolioData = {
  hero: {
    name: "Sushant Pardhi",
    title: "Full Stack Developer & Software Engineer",
    skills: ["JavaScript", "React", "Node.js", "C++", "Typescript"],
    social: {
      github: "https://github.com/sushantpardhi",
      linkedin: "https://www.linkedin.com/in/sushant-pardhi-91a8771b9/",
    },
  },

  about: {
    description:
      "As a Full Stack Developer and software Engineer, I specialize in building scalable and efficient web applications. With a strong foundation in both frontend and backend technologies, I create seamless user experiences while ensuring robust architecture and performance.",
    stats: [
      { number: "1+", label: "Years Experience" },
      { number: "10+", label: "Projects Completed" },
    ],
    resumeLink:
      "https://drive.google.com/file/d/1KKcd4QBSwXJFyb3E1CdhEhfh3YS1EXpi/view?usp=drive_link",
    skills: {
      Frontend: ["React", "TypeScript", "JavaScript", "HTML/CSS"],
      Backend: ["Node.js", "ExpressJs", "MongoDB"],
      Programming: ["C", "C++", "Python", "C#"],
    },
  },

  experiences: [
    {
      date: "2024 - Present",
      role: "Software Engineer",
      company: "Bosch Global Software Technologies",
      description:
        "Worked on developing and testing software for migrating onPrem sharepoint sites to SharePoint online. Developed and maintained multiple client projects",
      skills: ["F#", ".NET", "SharePoint", "Azure", "REST APIs"],
    },
    {
      date: "June 2022 - July 2022",
      role: "Software Developer Intern",
      company: "VIEH Foundation",
      description:
        "Created a Machine Learning model using various algorithms and compared their accuracy. Learned various types of Regression Algorithms. Got an average accuracy of around 89.745589%. Highest accuracy was 96.359889% in Random Forest. Least accuracy was 82.356974% in Linear Regression",
      skills: [
        "Python",
        "Machine Learning",
        "Deep Learning",
        "Data Analysis",
        "Data Visualization",
      ],
    },
  ],

  projects: [
    {
      title: "Blog Application",
      description:
        "A full-stack React-based blog management platform that enables content creators to manage their blogs, track analytics, and engage with their audience. The platform features a modern, responsive design with real-time analytics and comprehensive admin controls.",
      technologies: ["React", "Node.JS", "MongoDB", "Express"],
      githubLink: "https://github.com/sushantpardhi/blog-react2",
      liveLink: "",
      category: "fe",
      screenshots: [
        "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?w=1200", // Code editor
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200", // Dashboard
        "https://images.unsplash.com/photo-1549082984-1323b94df9a6?w=1200", // Clean desktop
      ],
    },
  ],

  contact: {
    email: "sushantgpardhi@gmail.com",
    form: {
      submitEndpoint: "https://formspree.io/f/movqbvdz", // Verify this is your correct Formspree endpoint
      fields: [
        { name: "name", type: "text", required: true },
        { name: "email", type: "email", required: true },
        { name: "message", type: "textarea", required: true },
      ],
    },
  },

  categories: [
    { id: "all", label: "All Projects" },
    { id: "fe", label: "Front End" },
    { id: "be", label: "Back End" },
  ],

  animations: {
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
  },
};

// Keep the individual exports for backward compatibility
export const {
  hero,
  about,
  experiences,
  projects,
  categories,
  animations,
  contact,
} = portfolioData;
