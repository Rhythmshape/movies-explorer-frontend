import React from 'react';

import './Techs.css'

function Techs() {
  return (
    <section className="section techs">
      <h2 id="techs" className="section__title section__title_techs">Технологии</h2>
      <h2 className="techs__title">7 технологий</h2>
      <p className="techs__subtitle">
        На курсе веб-разработки мы освоили
        технологии, которые применили
        в дипломном проекте.
      </p>
      <nav className="techs__navigation">
        <ul className="techs__links">
          <li className="techs__link-wrapper">
            <a
            href="https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/HTML_basics"
            className="techs__link"
            target="_blank"
            rel="noreferrer"
            >
              HTML
            </a>
          </li>
          <li className="techs__link-wrapper">
            <a
            href="https://developer.mozilla.org/ru/docs/Web/CSS"
            className="techs__link"
            target="_blank"
            rel="noreferrer">
              CSS
            </a>
          </li>
          <li className="techs__link-wrapper">
            <a
            href="https://developer.mozilla.org/ru/docs/Web/JavaScript"
            className="techs__link"
            target="_blank"
            rel="noreferrer">
              JS
            </a>
          </li>
          <li className="techs__link-wrapper">
            <a
            href="https://reactjs.org/"
            className="techs__link"
            target="_blank"
            rel="noreferrer">
              React
            </a>
          </li>
          <li className="techs__link-wrapper">
            <a
            href="https://git-scm.com/"
            className="techs__link"
            target="_blank"
            rel="noreferrer">
              Git
            </a>
          </li>
          <li className="techs__link-wrapper">
            <a
            href="https://expressjs.com/ru/"
            className="techs__link"
            target="_blank"
            rel="noreferrer">
              Express.js
            </a>
          </li>
          <li className="techs__link-wrapper">
            <a
            href="https://www.mongodb.com/"
            className="techs__link"
            target="_blank"
            rel="noreferrer">
              mongoDB
            </a>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Techs;