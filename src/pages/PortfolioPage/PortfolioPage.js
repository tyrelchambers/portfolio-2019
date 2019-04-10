import React from 'react'
import './PortfolioPage.scss';
import projects from './projects';
import { Link } from 'react-router-dom';

const PortfolioPage = (props) => {
  return(
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
  );
}

export default PortfolioPage;