// App.js
import React, { useEffect, useRef, useState } from "react";
import "./App.sass";
import Header from "./components/header/Header";
import MainPage from "./components/body/MainPage";
import AboutPage from "./components/body/AboutPage";
import SkillsPage from "./components/body/SkillsPage";
import Footer from "./components/footer/Footer";
import PortfolioPage from "./components/body/PortfolioPage";

function App() {
  const headerRef = useRef(null);
  const [activeLink, setActiveLink] = useState("home");

  // new code
  

  useEffect(() => {
    const handleScroll = () => {
      // Получаем текущую прокрутку страницы
      const top = window.scrollY;

      // Получаем ссылку на текущий элемент заголовка
      const header = headerRef.current;

      // Применяем класс "sticky" к заголовку в зависимости от прокрутки
      header.classList.toggle("sticky", top > 100);

      // Обрабатываем активный элемент меню
      const sections = document.querySelectorAll("section");
      let activeSectionId = null;

      sections.forEach((sec) => {
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          activeSectionId = id;
        }
      });

      setActiveLink(activeSectionId);


    };

    window.addEventListener("scroll", handleScroll);

    // Вызываем обработчик прокрутки для инициализации состояния
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add("element-show");
      }
    });
  }

  let options = {
    threshold: [0.4],
  };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll(".element-animation");

  for (let elm of elements) {
    observer.observe(elm);
  }

  // Остальной код остается без изменений
  return (
    <div>
      <Header headerRef={headerRef} activeLink={activeLink} />

      <MainPage activeLink={activeLink} />

      <AboutPage activeLink={activeLink} />

      <SkillsPage activeLink={activeLink} />

      <PortfolioPage activeLink={activeLink} />

      <Footer />
    </div>
  );
}

export default App;
