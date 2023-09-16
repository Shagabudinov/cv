import React from "react";
import "./MainPage.sass";
import { CVru } from "../../scripts";
import { CVen } from "../../scripts";

const MainPage = (props) => {
  const activeLink = props.activeLink;
  return (
    <section
      className={activeLink === "home" ? "home show-animation" : "home"}
      id="home"
    >
      <div className="home-content">
        <h1>
          Hello, my name is <span style={{ color: "#00abf0" }}>Vladislav</span>
          <span className="animate-span" style={{ "--i": 2 }} />
        </h1>
        <div className="home-content__text-animate">
          <h3>Frontend developer</h3>
          <span className="animate-span" style={{ "--i": 3 }} />
        </div>
        <p>
          Я продуктивный и предприимчивый человек, который всегда готов работать
          в команде, потому что это дает мне возможность добиваться результатов
          в кратчайшие сроки и помогает мне развиваться как специалисту.
          <span className="animate-span" style={{ "--i": 4 }} />
        </p>
        <p style={{ marginBottom: "1.6rem" }}>
          А здесь вы можете загрузить мое резюме!
          <span className="animate-span" style={{ "--i": 4 }} />
        </p>
        <div className="btn-box">
          <a href={CVru} className="btn">
            CV [preview]
          </a>
          <a href={CVen} className="btn">
            CV [download]
          </a>
          <span className="animate-span" style={{ "--i": 5 }} />
        </div>
        <div className="home-content__media">
          <a href="https://vk.com/st3lfy">
            <i className="bx bxl-vk"></i>
          </a>
          <a href="https://t.me/St3lfy">
            <i className="bx bxl-telegram"></i>
          </a>
          <a href="https://github.com/Shagabudinov">
            <i className="bx bxl-github"></i>
          </a>
          <span className="animate-span" style={{ "--i": 6 }} />
        </div>
      </div>
      
    </section>
  );
};

export default MainPage;
