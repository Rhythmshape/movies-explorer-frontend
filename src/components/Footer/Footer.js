import React from 'react';

import './Footer.css';

function Footer() {
  return(
    <footer className="footer">
      <div className="footer__container">
        <h3 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h3>
        <div className="footer__info">
          <p className="footer__copyright">
            © {(new Date().getFullYear())}
          </p>
          <nav className="footer__navigation">
            <ul className="footer__links">
              <li className="footer__link-wrapper">
                <a
                  href="https://practicum.yandex.ru/"
                  className="footer__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Яндекс.Практикум
                </a>
              </li>
              <li className="footer__link-wrapper">
                <a
                  href="https://github.com/Rhythmshape"
                  className="footer__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer;