import {
  food,
  chat,
  cs_web,
  fiverr,
  cs,
  mobile,
  backend,
  creator,
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
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "React JS",
    icon: reactjs,
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
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "CS-Enterprises",
    icon: cs,
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
    title: "Full stack developer",
    company_name: "Fiverr",
    icon: fiverr,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js , Node.js ,Mongodb, Express js.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Hope to work with the buyers around the whole world .",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our products, but Tharusha proved me wrong.",
    name: "Dimuth SJJ",
    designation: "CEO",
    company: "CS ENTERPRISES",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Tharusha does.",
    name: "Priyantha Lokuge",
    designation: "Managing - Director",
    company: "Salon Liberty",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    testimonial:
      "After Tharusha build our website, We were able to get more orders !,It is easy to delivery the customer's food on time",
    name: "Sonali Hettiarachchi",
    designation: "IT-Manager",
    company: "Chami restaurant",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Food Delivery",
    description:
      "Web-based platform that allows users to order the food using the displayed food items that are provided by a certain restaurant. Admin Pannel was also created to track the user's order details and update the status..etc",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://github.com/Tharusha-bit/FOOD_ORDERING",
  },
  {
    name: "Chat App",
    description:
      "A real time chat application, Users can iteract with other logged in users. Not only texting sharing images is also possible !. To implement this mainly I have used the socket.io and cloudinary",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: chat,
    source_code_link: "https://github.com/Tharusha-bit/ChatApp",
  },
  {
    name: "CS - Enterprises",
    description:
      "A website for a business that import photocopy and printer machines, Designed and developed their entire website including e-commerce platform. Users can order machines,spare parts that are needed.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cs_web,
    source_code_link: "https://github.com/Tharusha-bit/CS_ENTERPRISES",
  },
];

export { services, technologies, experiences, testimonials, projects };
