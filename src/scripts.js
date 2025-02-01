import web1 from "./img/website_1.jpg";
import web2 from "./img/website_2.jpg";
import web3 from "./img/website_3.jpg";
import web4 from "./img/website_4.jpg";
import web5 from "./img/website_5.jpg";
import web6 from "./img/website_6.jpg";
import web7 from "./img/website_7.jpg";
import web8 from './img/website_8.jpg';
import web9 from './img/website_9.jpg';

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
  'https://drive.google.com/file/d/1aDZT0b6-iRF_bjHgGtLUG_Y0SpCcufco/view?usp=sharing';

export const CVen =
  'https://drive.usercontent.google.com/download?id=1aDZT0b6-iRF_bjHgGtLUG_Y0SpCcufco&export=download&authuser=0&confirm=t&uuid=ad85f8b2-ffa4-42ce-ac69-f773e9a6a54b&at=AIrpjvOupEHpNQ4qxD6NHRgactSZ:1738100658043';

export const portfolioItems = [
  {
    id: 1,
    title: 'Сервис Password Check',
    description:
      'Сервис для проверки устойчивости пароля к взлому, а также для проверки, был ли замечен пароль в открытых слитых базах. Резко стала интересна тема паролей и их безопасности, решил в этом более тщательно разобраться и заодно реализовать пет-проект с анимациями в неоновых тонах',
    image: web9,
    repositoryLink: 'https://github.com/Shagabudinov/Password-check',
    websiteLink: 'https://password-check-tau.vercel.app/',
    technologiesList: [
      'Vanila JavaScript', 'CSS-animations', 'REST API'
    ],
    date: '01.02.2025',
  },
  {
    id: 2,
    title: 'Страница логина/регистрации',
    description:
      'В проекте реализованы: авторизация по jwt, выбор темы, обработка ошибок/валидация формы, анимации при смене режима, скелетон',
    image: web8,
    repositoryLink: 'https://github.com/Shagabudinov/crypton-frontend',
    websiteLink: 'https://crypton-frontend.vercel.app/',
    technologiesList: [
      'React',
      'Typescript',
      'Vite',
      'Tailwind',
      'Axios',
      'Shadcn/ui',
      'Framer-motion',
    ],
    date: '20.01.2025',
  },
  {
    id: 3,
    title: 'Портфолио Frontend разработчика',
    description:
      'Решил, что пора создать свой сайт-портфолио, применил все ходовые по моему мнению технологии, а на момент 2025 года взгрустнул, потому что вместо tailwind, здесь использовал SASS) Теперь это будет мой личный legacy проект.',
    image: web4,
    repositoryLink: 'https://github.com/Shagabudinov/cv',
    websiteLink: '#',
    technologiesList: ['HTML', 'Sass', 'БЭМ', 'JavaScript', 'React'],
    date: '21.09.2023',
  },
  {
    id: 4,
    title: 'Сайт с постами',
    description:
      'Просто работа с API (jsonplaceholder), вёрстка + рандомизация лайков и цветов, AsyncThunk для получения и хранения постов. Только frontend',
    image: web7,
    repositoryLink: 'https://github.com/Shagabudinov/posts-website',
    websiteLink:
      'https://650ac64a60bc9138ea81faaf--friendly-piroshki-389ba1.netlify.app/',
    technologiesList: [
      'HTML',
      'CSS',
      'API fetch',
      'JavaScript',
      'TypeScript',
      'React',
      'React router v6',
      'Redux',
    ],
    date: '20.09.2023',
  },
  {
    id: 5,
    title: 'Генератор рандомных шуток',
    description:
      'Проект создан с целью практики над redux toolkit и кастомизации в ant-design. По апи получаю случайные шутки, добавляю в store и отображаю историю шуток в таблице ant-design',
    image: web6,
    repositoryLink:
      'https://github.com/Shagabudinov/random-joke-app/tree/master',
    websiteLink: 'https://shagabudinov.github.io/random-joke-app/',
    technologiesList: [
      'HTML',
      'CSS',
      'API fetch',
      'JavaScript',
      'TypeScript',
      'React',
      'Redux',
      'ant-design',
    ],
    date: '15.09.2023',
  },
  {
    id: 6,
    title: 'Онлайн магазин Eco Shop',
    description:
      'Создал будучи в вузе с целью прохождения летней практики. В проекте практиковался в уже изученных технологиях. В проекте только frontend',
    image: web3,
    repositoryLink: 'https://github.com/Shagabudinov/eco-market',
    websiteLink: 'https://superb-sable-a0cae0.netlify.app',
    technologiesList: [
      'HTML',
      'Sass',
      'JavaScript',
      'React',
      'React-router-dom',
      'Slick-slider',
    ],
    date: '21.07.2023',
  },
  {
    id: 7,
    title: 'Веб-приложение для учета расходов',
    description:
      'Результат прохождения видеокурса по React. Идея не моя, реализация под копирку из видеокурса для освоения React',
    image: web1,
    repositoryLink:
      'https://github.com/Shagabudinov/App-for-keeping-track-of-purchases',
    websiteLink: 'https://ashente-keeping-purchases.netlify.app',
    technologiesList: ['HTML', 'CSS', 'JavaScript', 'React'],
    date: '11.07.2023',
  },
  {
    id: 8,
    title: 'Главная страница веб-сайта пекарни',
    description:
      'Начал изучать вёрстку, в результате чего, благодаря видеокурсу, повторил 1 в 1 дизайн, идея не моя, шаблон не мой',
    image: web2,
    repositoryLink: 'https://github.com/Shagabudinov/Bakery-website',
    websiteLink: 'https://ashente-backery-website.netlify.app',
    technologiesList: ['HTML', 'CSS'],
    date: '26.01.2023',
  },
  {
    id: 9,
    title: 'Верстка главной страницы WELBEX',
    description:
      'Изучал HTML, CSS, pixel perfect вёрстку, в результате чего взял тестовое задания из какой-то вакансии и реализовал для себя',
    image: web5,
    repositoryLink: 'https://github.com/Shagabudinov/welbex',
    websiteLink: 'https://ashente-welbex.netlify.app/',
    technologiesList: ['HTML', 'CSS'],
    date: '22.01.2023',
  },
];
