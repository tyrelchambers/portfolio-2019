import React from 'react'
import './IndexPage.scss';
import AboutPage from '../AboutPage/AboutPage';
import Header from '../../layouts/Header/Header';
import PortfolioPage from '../PortfolioPage/PortfolioPage';


export const IndexPage = (props) => {
  const slug = props.match.params.page;

  return(
    <div className="site-wrapper">
      <h1 className="fancy-title ta-c">Tyrel Chambers</h1>

      <div className="d-f mt+ mobile-wrapper">
        <div className="personal mr+">
          <Header />
        </div>        

        <PageHandler slug={slug} />
      </div>
    </div>
  );
};

const PageHandler = (props) => {
  const pages = {
    "home": <AboutPage/>,
    'portfolio': <PortfolioPage />
  }
  
  return pages[props.slug];
}
