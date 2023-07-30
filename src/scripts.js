import web1 from "./img/website_1.jpg";
import web2 from "./img/website_2.jpg";
import web3 from "./img/website_3.jpg";
import web4 from "./img/website_4.jpg";
import web5 from "./img/website_5.jpg";

export function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

export const NAV_LINKS = [
  { id: "home", text: "Главная" },
  { id: "about", text: "Обо мне" },
  { id: "skills", text: "Навыки" },
  { id: "portfolio", text: "Портфолио" },
];

export const CVru =
  "https://drive.google.com/uc?export=download&confirm=no_antivirus&id=182jeK80wjq2VcxbWaoW6EBiN3onEnR1d";

export const CVen =
  "https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1vhgczdua4Gt-igq7durVkuVncku8Y5ln";

export const portfolioItems = [
  {
    id: 1,
    title: "Портфолио Frontend разработчика",
    technologies: [
      "Adaptive responsive",
      "Css animations",
      "Flex",
      "Grid",
      "BEM",
      "JSX",
      "Hook useState",
      "Hook useEffect",
      "Hook useRef",
      "Props",
    ],
    image: web4,
    repositoryLink: "https://github.com/Shagabudinov/cv",
    websiteLink: "#",
    technologiesList: ["HTML", "Sass", "JavaScript", "React"],
  },
  {
    id: 2,
    title: "Онлайн магазин Eco Shop",
    technologies: [
      "Flex",
      "Grid",
      "BEM",
      "JSX",
      "Hook useState",
      "Hook useEffect",
      "Hook useNavigate",
      "Hook useLocate",
    ],
    image: web3,
    repositoryLink: "https://github.com/Shagabudinov/eco-market",
    websiteLink: "https://superb-sable-a0cae0.netlify.app",
    technologiesList: [
      "HTML",
      "Sass",
      "JavaScript",
      "React",
      "React-router-dom",
      "Slick-slider",
    ],
  },
  {
    id: 3,
    title: "Веб-приложение для учета расходов",
    technologies: ["Flex", "BEM", "Hook useState", "Hook useEffect", "Props"],
    image: web1,
    repositoryLink:
      "https://github.com/Shagabudinov/App-for-keeping-track-of-purchases",
    websiteLink: "https://ashente-keeping-purchases.netlify.app",
    technologiesList: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    id: 4,
    title: "Верстка главной страницы WELBEX",
    technologies: ["Adaptive responsive", "BEM"],
    image: web5,
    repositoryLink: "https://github.com/Shagabudinov/welbex",
    websiteLink: "https://ashente-welbex.netlify.app/",
    technologiesList: ["HTML", "CSS"],
  },
  {
    id: 5,
    title: "Главная страница веб-сайта пекарни",
    technologies: ["BEM"],
    image: web2,
    repositoryLink: "https://github.com/Shagabudinov/Bakery-website",
    websiteLink: "https://ashente-backery-website.netlify.app",
    technologiesList: ["HTML", "CSS"],
  },
];
