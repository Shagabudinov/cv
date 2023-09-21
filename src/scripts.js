import web1 from "./img/website_1.jpg";
import web2 from "./img/website_2.jpg";
import web3 from "./img/website_3.jpg";
import web4 from "./img/website_4.jpg";
import web5 from "./img/website_5.jpg";
import web6 from "./img/website_6.jpg";
import web7 from "./img/website_7.jpg";

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
    "https://drive.google.com/file/d/182jeK80wjq2VcxbWaoW6EBiN3onEnR1d/view?usp=sharing";

export const CVen =
    "https://drive.usercontent.google.com/download?id=182jeK80wjq2VcxbWaoW6EBiN3onEnR1d&export=download&authuser=0&confirm=t&uuid=eb13734b-e8ad-4fde-8d66-77106d150a9e&at=APZUnTXRDDp8ZQDBjo02ChCjsBzZ:1694850460274";

export const portfolioItems = [
    {
        id: 1,
        title: "Сайт с постами",
        technologies: [
            "Flex",
            "BEM",
            "JSX",
            "Redux toolkit",
            "Custom Hooks: useAppDispatch, useAppSelector",
            "Hook useState",
            "Custom components",
            "Caching"
        ],
        image: web7,
        repositoryLink:
            "https://github.com/Shagabudinov/posts-website",
        websiteLink: "https://650ac64a60bc9138ea81faaf--friendly-piroshki-389ba1.netlify.app/",
        technologiesList: [
            "HTML",
            "CSS",
            "API fetch",
            "JavaScript",
            "TypeScript",
            "React",
            "React router v6",
            "Redux",

        ],
    },
    {
        id: 2,
        title: "Генератор рандомных шуток",
        technologies: [
            "Flex",
            "BEM",
            "JSX",
            "Redux toolkit",
            "Custom Hooks: useAppDispatch, useAppSelector",
            "Hook useState",
        ],
        image: web6,
        repositoryLink:
            "https://github.com/Shagabudinov/random-joke-app/tree/master",
        websiteLink: "https://shagabudinov.github.io/random-joke-app/",
        technologiesList: [
            "HTML",
            "CSS",
            "API fetch",
            "JavaScript",
            "TypeScript",
            "React",
            "Redux",
            "ant-design",
        ],
    },
    {
        id: 3,
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
        id: 4,
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
        id: 5,
        title: "Веб-приложение для учета расходов",
        technologies: [
            "Flex",
            "BEM",
            "Hook useState",
            "Hook useEffect",
            "Props",
        ],
        image: web1,
        repositoryLink:
            "https://github.com/Shagabudinov/App-for-keeping-track-of-purchases",
        websiteLink: "https://ashente-keeping-purchases.netlify.app",
        technologiesList: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
        id: 6,
        title: "Верстка главной страницы WELBEX",
        technologies: ["Adaptive responsive", "BEM"],
        image: web5,
        repositoryLink: "https://github.com/Shagabudinov/welbex",
        websiteLink: "https://ashente-welbex.netlify.app/",
        technologiesList: ["HTML", "CSS"],
    },
    {
        id: 7,
        title: "Главная страница веб-сайта пекарни",
        technologies: ["BEM"],
        image: web2,
        repositoryLink: "https://github.com/Shagabudinov/Bakery-website",
        websiteLink: "https://ashente-backery-website.netlify.app",
        technologiesList: ["HTML", "CSS"],
    },
];
