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
        <img src={AboutImg} alt="" className="picture" />
        <span className="about__img__circle-span"></span>
      </div>
      <div className="about__content element-animation" style={{ "--i": 3 }}>
        <h3>Frontend Developer!</h3>
        <p>
          Закончил бакалавриат вуза НИТУ МИСиС по направлению 09.03.01 "Информатика и вычислительная техника", frontend разработчик.
          Имею опыт работы с <span>JavaScript, TypeScript, React, Redux, Redux Toolkit, HTML,
          CSS/Sass/Scss, Tailwind, Bootstrap, StyledComponents, ant-design, BEM, Figma, Git</span>, а также
          <span> node.js.</span> Знаком с принципами работы <span> Rest Api, WebSocket, GraphQL.</span> Каждый день развиваю свои
          навыки в качестве frontend разработчика. Это выражается в решении
          задач на алгоритмы и в создании учебных проектов, таких как
          веб-приложения и веб-страницы. Имею сильное желание развиваться и дальше, прежде всего,
          потому что мне нравится эта профессия.
          Вы можете ознакомиться с моими учебными проектами в разделе <a href="/#portfolio"><span>Портфолио</span></a>
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
