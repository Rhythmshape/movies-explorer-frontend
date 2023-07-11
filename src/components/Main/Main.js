import React from 'react';

import Header from '../Header/Header';

import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import NavTab from '../NavTab/NavTab';
import MainHeader from '../Header/MainHeader/MainHeader';
import MoviesHeader from '../Header/MoviesHeader/MoviesHeader';

import './Main.css';

function Main(props) {
    return (
        <>
          { props.isLoggedIn ? (            
            <Header 
              location={'header__container_landing'}
              colorscheme={'header_color_navy'}
            >  
              <MoviesHeader/>
            </Header>
          ) : (    
            <Header 
              location={'header__container_landing'}
              colorscheme={'header_color_navy'}
            >  
              <MainHeader /> 
            </Header>
          )}
          <main className='main'>
            <Promo />
            <NavTab />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
          </main>  
        </>
    );
}
export default Main;