import type { SkillName } from "./skills";

export interface Project {
  title: string;
  description: string;
  skills: SkillName[];
  siteUrl: string;
  github: string;
  thumbnail: string;
}

export const PROJECTS: Project[] = [
  {
    title: "My Portfolio Site",
    description:
      "New portfolio site built with some newer tech that wasn't as robust when I was starting out. Features a Vue/Nuxt site, leveraging a number of Nuxt modules for content and UI.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "Vue.js",
      "Nuxt.js",
      "Vercel",
    ],
    siteUrl: "https://zen-wiles-0cc089.netlify.app/",
    github: "https://github.com/austinkylescott/react-rest-api",
    thumbnail: "/images/projectImages/project7/project7_thumb.png",
  },
  {
    title: "Full Stack Course Manager",
    description:
      "Full stack application created with a React client hosted on Netlify for the front end and a REST API and SQLite database hosted on Heroku complete with entry validation and user authentication on the backend. Please allow a few seconds for the Heroku dyno to wake up.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Node.js",
      "Netlify",
      "Heroku",
    ],
    siteUrl: "https://zen-wiles-0cc089.netlify.app/",
    github: "https://github.com/austinkylescott/react-rest-api",
    thumbnail: "/images/projectImages/project7/project7_thumb.png",
  },
  {
    title: "SQL Library Manager",
    description:
      "A library manager that allows the user to view the library catalogue and add & remove books. The app is built with Express and uses Sequelize ORM to manage a SQLite database. The database is hosted on Heroku. Please allow a few seconds for the Heroku dyno to wake up.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express",
      "Heroku",
    ],
    siteUrl: "https://fierce-crag-37811.herokuapp.com/books",
    github: "https://github.com/austinkylescott/sql_library_manager-v1",
    thumbnail: "/images/projectImages/project6/project6_thumb.png",
  },
  {
    title: "React Flickr Gallery",
    description:
      "A lightweight gallery app built using React. Enjoy photos from preset search keywords or search for your own. The project was bootstrapped with Create-React-App and hosted with manual deploys to Netlify.",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Netlify"],
    siteUrl: "https://ascott-react-gallery.netlify.app",
    github: "https://github.com/austinkylescott/react-gallery-app_v1",
    thumbnail: "/images/projectImages/project5/project5_thumb.png",
  },
  {
    title: "Public API Requests",
    description:
      "Uses JSONPlaceholder API to generate a directory of users which can be filtered. Clicking on the user displays a modal with additional employee information.",
    skills: ["HTML5", "CSS3", "JavaScript"],
    siteUrl:
      "https://austinkylescott.github.io/techdegree-project-5/public_api_request-v1",
    github: "https://github.com/austinkylescott/techdegree-project-5",
    thumbnail: "/images/projectImages/project4/project4_thumb.png",
  },
  {
    title: "Phrase Hunter",
    description:
      "A Hangman clone. A random mystery phrase is selected and the player must guess the phrase before running out of lives.",
    skills: ["HTML5", "CSS3", "JavaScript"],
    siteUrl:
      "https://austinkylescott.github.io/techdegree-project-4/oop_game-v2",
    github: "https://github.com/austinkylescott/techdegree-project-4",
    thumbnail: "/images/projectImages/project3/project3_thumb.png",
  },
  {
    title: "Interactive Registration Form",
    description: "A sample interactive conference registration form.",
    skills: ["HTML5", "CSS3", "JavaScript"],
    siteUrl:
      "https://austinkylescott.github.io/techdegree-project-3/interactive-form-v1",
    github: "https://github.com/austinkylescott/techdegree-project-3",
    thumbnail: "/images/projectImages/project2/project2_thumb.png",
  },
  {
    title: "List Pagination",
    description: "Uses JavaScript to paginate a large list of students.",
    skills: ["HTML5", "CSS3", "JavaScript"],
    siteUrl:
      "https://austinkylescott.github.io/techdegree-project-2/list_pagination_and_filtering-v1",
    github: "https://github.com/austinkylescott/techdegree-project-2",
    thumbnail: "/images/projectImages/project1/project1_thumb.png",
  },
  {
    title: "Random Quote Generator",
    description:
      "Given an array of quotes, displays a random quote with random background color.",
    skills: ["HTML5", "CSS3", "JavaScript"],
    siteUrl:
      "https://austinkylescott.github.io/techdegree-project-1/a_random_quote_generator-v1",
    github: "https://github.com/austinkylescott/techdegree-project-1",
    thumbnail: "/images/projectImages/project0/project0_thumb.png",
  },
];
