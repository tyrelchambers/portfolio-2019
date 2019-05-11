import React from 'react'
import './IndexPage.scss';
import AboutPage from '../AboutPage/AboutPage';
import Header from '../../layouts/Header/Header';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import Socials from '../../layouts/Socials/Socials';


export const IndexPage = (props) => {

  return(
    <div className="site-wrapper">
      <h1 className="fancy-title ta-c">Tyrel Chambers</h1>
      <Socials/> 
      <div className="d-f mt+ mobile-wrapper">
        <div className="personal mr+">
          <Header />
        </div>        

        <AboutPage />
      </div>
    </div>
  );
};

