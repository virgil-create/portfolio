import { About, Blog, Gallery, Home, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Virgil",
  lastName: "Mesquita",
  name: `Virgil Mesquita`,
  role: "Étudiant",
  avatar: "/images/avatar1.jpg",
  email: "virgil.mesquita@btsinfo-aurillac.fr",
  location: "Europe/Paris", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Français", "Anglais", "Portugais"], // optional: Leave the array empty if you don't want to display languages
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/virgil-create",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://fr.linkedin.com/in/virgil-mesquita-b8b2ab360",
    essential: true,
  },
  {
    name: "virgil.mesquita@btsinfo-aurillac.fr",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: ``,
  headline: <>Portfolio</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Cliquez</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Mes Projets
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
    Je suis Virgil, étudiant à <Text as="span" size="xl" weight="strong">Aurillac</Text>. Voici mes propres projets.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "À Propos",
  title: `À Propos – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  
  
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Étudiant en BTS SIO, passionné par les technologies, le développement informatique et le graphisme.
        Compétences en design graphique et en création visuelle, alliant art et technologie pour concevoir des solutions fonctionnelles et esthétiques.
        Rigoureux, autonome, polyvalent et ouvert d’esprit, avec la volonté de mettre créativité et compétences techniques au service d’une entreprise dynamique et innovante.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Expériences professionnelles",
    experiences: [
      {
        company: "CGI",
        timeframe: "2025",
        role: "Stagiaire",
        achievements: [
          <>
            Création d’une application administrative (BDD, front, back)
          </>,
        ],
        images: [],
      },
      {
        company: "L’AFFREUX BONHOMME",
        timeframe: "2022 et 2024",
        role: "Stagiaire",
        achievements: [
          <>
            Création/montage de vidéos, Effets spéciaux, Conception
            3D, Animation traditionnelle, Motion Design.
          </>,
          <>
            Client : EDF, Bouygues Immobilier, TACTEAM.
          </>,
        ],
        images: [],
      },
      {
        company: "LA MISSION LOCALE",
        timeframe: "2023",
        role: "Stagiaire",
        achievements: [
          <>
            Refonte graphique d’un livret et de documents, Travail du
            print (imprimerie).
          </>,
        ],
        images: [],
      },
      {
        company: "FREELANCE",
        timeframe: "",
        role: "",
        achievements: [
          <>
            Création de logos, de chartes graphiques et de site web.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Études",
    institutions: [
      {
        name: "BTS Services informatiques aux organisations",
        description: <>Lycée Jean Monnet Mermoz, Aurillac</>,
      },
      {
        name: "Bac pro artisanat et métiers d'art option communication visuelle plurimédia",
        description: <>Godefroy de bouillon, Clermont-Ferrand</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Compétences",
    skills: [
      {
        title: "Langages",
        description: (
          <>Languages appris au cours de ma formation</>
        ),
        tags: [
          {
            name: "HTML",
            icon: "html",
          },
          {
            name: "CSS",
            icon: "css",
          },
          {
            name: "C",
            icon: "c",
          },
          {
            name: "C#",
            icon: "c#",
          },
          {
            name: "Java",
            icon: "java",
          },
          {
            name: "PHP",
            icon: "php",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "JavaScript",
            icon: "",
          },
          {
            name: "SQL",
            icon: "sql",
          },
          {
            name: "Python",
            icon: "python",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Front/Back end API",
        description: (
          <>Création de site</>
        ),
        tags: [
          {
            name: "Angular",
            icon: "angular",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "Symfony",
            icon: "symfony",
          },
          {
            name: "RESTful",
            icon: "restful",
          },
        ],
        images: [],
      },
      {
        title: "Design",
        description: (
          <>Outils de création</>
        ),
        tags: [
          {
            name: "Photoshop",
            icon: "photoshop",
          },
          {
            name: "InDesign",
            icon: "indesign",
          },
          {
            name: "Illustrator",
            icon: "illustrator",
          },
          {
            name: "Xd",
            icon: "Xd",
          },
          {
            name: "Premiere Pro",
            icon: "premierepro",
          },
          {
            name: "After Effects",
            icon: "aftereffects",
          },
          {
            name: "Blender",
            icon: "blender",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Certifications",
  title: "Mes Certifications",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projets",
  title: `Projets – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galerie",
  title: `Galerie – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, home, about, blog, work, gallery };
