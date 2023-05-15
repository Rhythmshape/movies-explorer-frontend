import React from 'react';

import './NavTab.css';

function NavTab() {
  return (
    <section className="section nav-tab">
      <nav className="nav-tab__bar">
        <ul className="nav-tab__links">
          <li className="nav-tab__link-wrapper">
            <a href="#about-project" className="nav-tab__link">О проекте</a>
          </li>
          <li className="nav-tab__link-wrapper">
            <a href="#techs" className="nav-tab__link">Технологии</a>
          </li>
          <li className="nav-tab__link-wrapper">
            <a href="#about-me" className="nav-tab__link">Студент</a>
          </li>
        </ul>
      </nav>      
    </section>
  );
}

export default NavTab;