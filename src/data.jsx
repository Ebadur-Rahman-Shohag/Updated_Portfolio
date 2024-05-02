import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
  { id: nanoid(), href: "#contact", text: "contact" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://i.ibb.co/qNm9qc6/comfy.png",
    url: "https://comfy-ten.vercel.app/",
    github: "https://github.com/Ebadur-Rahman-Shohag/Comfy",
    title: "comfy store",
    text: "This is an E-Commerce web application where user can order furniture. This application requires user account and login and payments are made on delivery. User can also explore the web application by demo log in. Users can see their data in order page. Also this application has filtering method and dark mode.",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/bH9t37d/Worldwise.png",
    url: "https://world-wise-xped.vercel.app/",
    github: "https://github.com/Ebadur-Rahman-Shohag/WorldWise",
    title: "WorldWise",
    text: "It is a web application where travelers can track and keep notes of the places they have visited. The application supports Geolocation. User can add and delete cities as they wish.",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/1sXrnpn/pizza-order.png",
    url: "https://order-your-pizza.netlify.app/",
    github: "https://github.com/Ebadur-Rahman-Shohag/order-your-pizza",
    title: "Order Your Pizza",
    text: "It is a web application where users can order one or more pizzas from a menu. Requires no user account and no login. And payments are made on delivery. This application supports GPS location",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/QCtmCPG/guess-the-number.png",
    url: "https://guess-the-number-roan.vercel.app/",
    github: "https://github.com/Ebadur-Rahman-Shohag/Guess-the-number",
    title: "Guess the number",
    text: "It is a simple guessing game where players can guess a number between 1-20. There is a score option. The player who scores more will win",
  },

  {
    id: nanoid(),
    img: "https://i.ibb.co/ChbYBDK/image-search.png",
    url: "https://get-images-from-api.vercel.app/",
    github: "https://github.com/Ebadur-Rahman-Shohag/Get-Images-From-Api",
    title: "Image Search Engine",
    text: "This is simple React application users can search their favorite images. The images will show in gallery form.",
  },
];

export const blogPosts = [
  {
    id: nanoid(),
    title: "Article Title 1",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit...",
    imageUrl: "https://i.ibb.co/bH9t37d/Worldwise.png",
    authorImg:"https://i.ibb.co/bH9t37d/Worldwise.png",
    readTime: "7",
  },
  {
    id: nanoid(),
    title: "Article Title 2",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit...",
    imageUrl: "./images/project-2.jpeg",
    authorImg: "https://i.ibb.co/bH9t37d/Worldwise.png",
    readTime: "7",
  },
  {
    id: nanoid(),
    title: "Article Title 3",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit...",
    imageUrl: "./images/project-3.jpeg",
    authorImg: "./images/hero-img-small.jpeg",
    readTime: "7",
  },
  {
    id: nanoid(),
    title: "Article Title 4",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit...",
    imageUrl: "./images/project-4.jpeg",
    authorImg: "./images/hero-img-small.jpeg",
    readTime: "7",
  },
];
