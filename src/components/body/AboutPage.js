import React from "react";
import "./AboutPage.sass";
import AboutImg from "../../img/about.jpg";

const AboutPage = (props) => {
  const activeLink = props.activeLink;

  return (
    <section
      className={activeLink === "about" ? "about show-animation" : "about"}
      id="about"
    >
      <h2 className="heading element-animation" style={{ "--i": 1 }}>
        Обо <span>Мне</span>
      </h2>
      <div className="about__img element-animation" style={{ "--i": 2 }}>
        <img src={AboutImg} alt="" className="picture"/>
        <span className="about__img__circle-span"></span>
      </div>
      <div className="about__content element-animation" style={{ "--i": 3 }}>
        <h3>Frontend Developer!</h3>
        <p>
          Я — опытный веб-разработчик с уверенным владением современными
          технологиями и инструментами для создания уникальных и качественных
          веб-приложений. Мой стек технологий включает в себя{" "}
          <span>
            HTML5 , CSS3 (Sass/Scss), JavaScript, TypeScript, React и Redux.
          </span>{" "}
          Я применяю методологию <span>BEM</span> для эффективного и
          структурированного создания масштабируемых проектов. Знаком с основами{" "}
          <span>Git</span>, что позволяет мне участвовать в коллаборативной
          разработке и эффективно управлять версиями проектов.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
