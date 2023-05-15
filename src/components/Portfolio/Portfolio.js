import React from 'react';

import './Portfolio.css';
import arrow from '../../images/my_portfolio_arrow_.svg';

const statikWebsite = "https://github.com/Rhythmshape/how-to-learn";
const adaptiveWebsite = "https://github.com/Rhythmshape/russian-travel";
const singlePageAplication = "https://github.com/Rhythmshape/react-mesto-api-full";

function Portfolio() {
  return (
    <section className="section portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <nav className="portfolio__navigation">
        <ul className="portfolio__links">
          <li className="portfolio__link-wrapper">
            <a
              href={statikWebsite}
              className="portfolio__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Статичный сайт
              <img src={arrow} alt="arrow" className="portfolio__link-arrow" />
            </a>
          </li>
          <li className="portfolio__link-wrapper">
            <a
              href={adaptiveWebsite}
              className="portfolio__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Адаптивный сайт
              <img src={arrow} alt="arrow" className="portfolio__link-arrow" />
            </a>
          </li>
          <li className="portfolio__link-wrapper">
            <a
              href={singlePageAplication}
              className="portfolio__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Одностраничное приложение
              <img src={arrow} alt="arrow" className="portfolio__link-arrow" />
            </a>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Portfolio;