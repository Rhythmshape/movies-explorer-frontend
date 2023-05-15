import React from 'react';

import './AboutProject.css'

function AboutProject() {
  return (
    <section className="section about-project">
      <h2 id="about-project" className="section__title section__title_project">О проекте</h2>
      <ul className="about-project__description">
        <li className="about-project__container">
          <h3 className="about-project__title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом,
            вёрстку, добавление функциональности и
            финальные доработки.
          </p>
        </li>
        <li className="about-project__container">
          <h3 className="about-project__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать,
            чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="leadtime">
        <div className="leadtime__backend">
          <h3 className="leadtime__title leadtime__title_theme_backend">1 неделя</h3>
          <p className="leadtime__subtitle">Back-end</p>
        </div>
        <div className="leadtime__frontend">
          <h3 className="leadtime__title leadtime__title_theme_frontend">4 недели</h3>
          <p className="leadtime__subtitle">Front-end</p>
        </div>
      </div>

    </section>
  );
}

export default AboutProject;
