import React from 'react';
import './PortfolioPage.sass';
import { portfolioItems } from '../../scripts';

const PortfolioPage = (props) => {
  const activeLink = props.activeLink;

  return (
    <section
      className={
        activeLink === 'portfolio' ? 'portfolio show-animation' : 'portfolio'
      }
      id='portfolio'
    >
      <h2 className='heading element-animation' style={{ '--i': 1 }}>
        Мое <span>Портфолио</span>
      </h2>
      <div className='portfolio-container'>
        {portfolioItems.map((item) => (
          <div
            className='portfolio-content element-animation'
            key={item.id}
            style={{ '--i': 1 }}
          >
            <div className='portfolio-content__picture'>
              <a href={item.websiteLink} target='_blank' rel='noreferrer'>
                <img src={item.image} alt=''></img>
              </a>
            </div>
            <div className='portfolio-content__main-information'>
              <div className='portfolio-content__title-description'>
                <a href={item.websiteLink} target='_blank' rel='noreferrer'>
                  <h2>{item.title}</h2>
                </a>
                <span>Описание: </span>
                <p>{item.description}</p>
              </div>
              <div className='btn-box'>
                <a
                  href={item.repositoryLink}
                  target='_blank'
                  rel='noreferrer'
                  className='btn'
                >
                  Код сайта
                </a>
                <a
                  href={item.websiteLink}
                  target='_blank'
                  rel='noreferrer'
                  className='btn'
                >
                  Сайт
                </a>
              </div>
            </div>
            <div className='portfolio-content__technologies'>
              {item.technologiesList.map((tech, index) => (
                <p key={index}>{tech}</p>
              ))}
            </div>
            <div className='portfolio-content__date'>
              <p>{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioPage;
