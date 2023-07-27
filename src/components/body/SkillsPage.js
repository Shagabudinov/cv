import React from "react";
import "./SkillsPage.sass";

const SkillsPage = (props) => {
  const activeLink = props.activeLink;

  const skills = [
    {
      title: "Hard Skills",
      skillsData: [
        { name: "HTML", percent: 95 },
        { name: "Css / Sass / Scss", percent: 88 },
        { name: "JavaScript", percent: 81 },
        { name: "TypeScript", percent: 34 },
        { name: "React", percent: 71 },
        { name: "Redux", percent: 49 },
      ],
    },
  ];

  return (
    <section
      className={activeLink === "skills" ? "skills show-animation" : "skills"}
      id="skills"
    >
      <h2 className="heading element-animation" style={{ "--i": 1 }}>
        Мои <span>Навыки</span>
      </h2>
      <div className="skills__row element-animation" style={{ "--i": 3 }}>
        {skills.map((category, index) => (
          <div className="skills__column" key={index}>
            <h3 className="title">{category.title}</h3>
            <div className="skills__box">
              <div className="skills__content">
                {category.skillsData.map((skill, idx) => (
                  <div className="progress" key={idx}>
                    <h3>
                      {skill.name} <span>{skill.percent}%</span>
                    </h3>
                    <div className="bar">
                      <span style={{ width: `${skill.percent}%` }}></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;
