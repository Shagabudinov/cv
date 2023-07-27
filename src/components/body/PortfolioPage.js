import React from "react";
import "./PortfolioPage.sass";
import { portfolioItems } from "../../scripts";

const PortfolioPage = (props) => {
  const activeLink = props.activeLink;

  return (
    <section
      className={
        activeLink === "portfolio" ? "portfolio show-animation" : "portfolio"
      }
      id="portfolio"
    >
      <h2 className="heading element-animation" style={{ "--i": 1 }}>
        Мое <span>Портфолио</span>
      </h2>
      <div className="portfolio-container">
        {portfolioItems.map((item) => (
          <div
            className="portfolio-content element-animation"
            key={item.id}
            style={{ "--i": 1 }}
          >
            <div className="portfolio-content__picture">
              <a href={item.websiteLink}>
                <img src={item.image} alt=""></img>
              </a>
            </div>
            <div className="portfolio-content__main-information">
              <div>
                <a href={item.websiteLink}>
                  <h2>{item.title}</h2>
                </a>
                <span>Ключевые технологии: </span>
                {item.technologies.map((tech, index) => (
                  <React.Fragment key={index}>
                    <p>
                      {tech}
                      {index !== item.technologies.length - 1 ? "," : "."}
                    </p>
                  </React.Fragment>
                ))}
              </div>
              <div className="btn-box">
                <a href={item.repositoryLink} className="btn">
                  Код сайта
                </a>
                <a href={item.websiteLink} className="btn">
                  Сайт
                </a>
              </div>
            </div>
            <div className="portfolio-content__technologies">
              {item.technologiesList.map((tech, index) => (
                <p key={index}>{tech}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioPage;
