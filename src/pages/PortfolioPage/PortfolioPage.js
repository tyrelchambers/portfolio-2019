import React from 'react'
import './PortfolioPage.scss';
import projects from './projects';
import { Link } from 'react-router-dom';
import Socials from '../../layouts/Socials/Socials';
import Header from '../../layouts/Header/Header';

const PortfolioPage = (props) => {
  return(
    <div className="site-wrapper">
    <h1 className="fancy-title ta-c">Tyrel Chambers</h1>
          <Socials />
          <div className="d-f mt+ mobile-wrapper">
            <div className="personal mr+">
              <Header />
            </div>        
        
        <div className="container">
          <h1 className="sub-title">Portfolio</h1>
          <p>Here are some projects I'm working on, that I believe matter.</p>

          <ul className="projects d-f">
            {projects.map((x, id) => {
              return(
                <li key={id} className="project-link mr+">
                  <Link className="td-n" to={`/portfolio/${x.title.toLowerCase()}`}>
                    <h2 className="fancy-title">{x.title}</h2>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        </div>

    </div>
  );
}

export default PortfolioPage;