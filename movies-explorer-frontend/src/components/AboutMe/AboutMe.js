import React from 'react';

import './AboutMe.css';
import MyPhoto from '../../images/My_photo.jpg';

function AboutMe() {
  return (
    <section className="section about-me">
      <h2 id="about-me" className="section__title section__title_me">Студент</h2>

      <div className="about-me__container">
        <div className="about-me__info">
          <div className="about-me__description">
            <h2 className="about-me__title">Алёна</h2>
            <p className="about-me__subtitle">Фронтенд-разработчик, 32 года</p>
            <p className="about-me__text">
              Родилась и училась в Тюмени. Закончила с отличием ТюмГНГУ в 2013 году.
              По специальности я горный - инженер, а попросту инженер-геолог.
              С 2013 года и по сей день тружусь в периметре нефтяной компании
              ПАО "НК "Роснефть"" в управлении геологоразведочных работ.
              
              С недавнего времени, мне стала итересна IT сфера и програмирование, с 
              чем связано, в том числе, обучение на курсе WEB-разработчик от Яндекс-Практикума
              
            </p>
          </div>
          <a
            href="https://github.com/Rhythmshape"
            className="about-me__gh-link"
            target="_blank"
            rel="noreferrer"
          >Github</a>
        </div>
        <img src={MyPhoto} alt="Фото студента" className="about-me__photo" />
      </div>
    </section>
  );
}

export default AboutMe;