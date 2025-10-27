export interface Skill {
  name: string;
  icon: string;
}

export const SKILLS = [
  {
    name: "HTML5",
    icon: "devicon:html5",
  },
  {
    name: "CSS3",
    icon: "devicon:css3",
  },
  {
    name: "JavaScript",
    icon: "devicon:javascript",
  },
  {
    name: "TypeScript",
    icon: "devicon:typescript",
  },
  {
    name: "SCSS",
    icon: "devicon:sass",
  },
  {
    name: "Tailwindcss",
    icon: "devicon:tailwindcss",
  },
  {
    name: "Vite",
    icon: "devicon:vitejs",
  },
  {
    name: "Node.js",
    icon: "devicon:nodejs-wordmark",
  },
  {
    name: "React.js",
    icon: "devicon:react",
  },
  {
    name: "Next.js",
    icon: "devicon:nextjs",
  },
  {
    name: "Vue.js",
    icon: "devicon:vuejs",
  },
  {
    name: "Nuxt.js",
    icon: "devicon:nuxt",
  },
  {
    name: "Gatsby",
    icon: "devicon:gatsby",
  },
  {
    name: "Vercel",
    icon: "devicon:vercel",
  },
  {
    name: "Netlify",
    icon: "devicon:netlify",
  },
  {
    name: "Heroku",
    icon: "devicon:heroku",
  },
  {
    name: "Render",
    icon: "simple-icons:render",
  },
  {
    name: "AWS",
    icon: "devicon:amazonwebservices",
  },

  {
    name: "Express",
    icon: "devicon:express",
  },
  {
    name: "Hono",
    icon: "logos:hono",
  },
  {
    name: "SQLite",
    icon: "devicon:sqlite",
  },
  {
    name: "Supabase",
    icon: "devicon:supabase",
  },
  {
    name: "Auth0",
    icon: "logos:auth0-icon",
  },
  {
    name: "Godot",
    icon: "devicon:godot",
  },
] as const satisfies ReadonlyArray<Skill>;

export type SkillName = (typeof SKILLS)[number]["name"];
