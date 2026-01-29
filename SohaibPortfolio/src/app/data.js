/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

// */

export const projectsData = [
  {
    id: 1,
    name: "Blog-Website",
    description: "A dynamic blog platform with content management using Next.js and Sanity CMS, allowing posts to be created, edited, and displayed seamlessly.",
    date: "2024-06-10",
    demoLink: "https://blog-website-sanity-six.vercel.app/",
    imageUrl: "/assest/blog-website-preview.png"
  },
  {
    id: 2,
    name: "Governor-initiatives",
    description: "An official website clone showcasing the initiatives and updates of the Governor of Sindh, built with Next.js and Tailwind CSS.",
    date: "2024-08-14",
    demoLink: "https://govenor-sindh-website.vercel.app/",
    imageUrl: "/assest/governor-website-preview.png"
  },
  {
    id: 3,
    name: "E-commerce-Furniture",
    description: "A responsive e-commerce platform designed from Figma, built with Next.js, TypeScript, and Tailwind CSS, allowing users to browse and purchase furniture products.",
    date: "2024-07-20",
    demoLink: "https://e-commerce-furniture-website-two.vercel.app/",
    imageUrl: "/assest/ecommerce-preview.png", // Replace with actual image path
  },
  {
    id: 4,
    name: "Countdown-Timer",
    description: "An interactive countdown timer built using Next.js, TypeScript, and Tailwind CSS, useful for events, deadlines, or productivity tracking.",
    date: "2024-09-01",
    demoLink: "https://30days-30-projects-next-js.vercel.app/",
    imageUrl: "/assest/countdown-timer-preview.png", // Replace with actual image path
  },
  {
    id: 5,
    name: "Calculator",
    description: "A functional calculator developed with HTML, CSS, and JavaScript, performing basic arithmetic operations with a clean user interface.",
    date: "2024-06-30",
    demoLink: "https://multiple-projects-dynamic.vercel.app/",
    imageUrl: "/assest/calculator-preview.png", // Replace with actual image path
  },
  {
    id: 6,
    name: "Digital-Clock",
    description: "A real-time digital clock application built using Next.js, TypeScript, and Tailwind CSS, displaying the current time with an elegant UI.",
    date: "2024-08-05",
    demoLink: "https://digital-clock-dynamic.vercel.app/",
    imageUrl: "/assest/digital-clock-preview.png", // Replace with actual image path
  },
  {
    id: 7,
    name: "Resume-Builder",
    description: "A shareable resume builder created with HTML, CSS, JavaScript, and TypeScript, allowing users to design, generate, and share resumes online.",
    date: "2024-09-10",
    demoLink: "https://milestone5-eosin.vercel.app/",
    imageUrl: "/assest/resume-builder-preview.png", // Replace with actual image path
  },
  {
  id: 8,
  name: "Full-Stack-Todo-App",
  description: "A full-stack Todo application with an integrated AI chatbot. Frontend built with Next.js, TypeScript, and Three.js for interactive UI. Backend uses Python FastAPI, and AI Agent integration is done using OpenAI Agent SDK with ChatKit widget for chat interface.",
  date: "2024-09-20",
  demoLink: "https://todochatbot-cxxoyo2aq-sohaib-touseefs-projects.vercel.app/",
  imageUrl: "/assest/todo-app-preview.png", // Replace with actual image path
},
];


export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/SohaibTouseef125",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/sohaib-touseef-12a7b628a/",
    icon: "linkedin",
    newTab: true,
  },

  {
    label: "Resume",
    link: "/full-stack-ai-developer.pdf",
    icon: "resume",
    newTab: true,
  },
];
