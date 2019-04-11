import React from 'react'
import './ProjectPage.scss';
import Header from '../../layouts/Header/Header';
import projects from '../PortfolioPage/projects';

const ProjectPage = (props) => {
  const slug = props.match.params.project;
  const currentProject = projects.filter(x => x.title.toLowerCase() === slug)[0];
  return(
    <div className="site-wrapper">
      <h1 className="fancy-title ta-c">Tyrel Chambers</h1>

      <div className="d-f mt+ mobile-wrapper">
        <div className="personal mr+">
          <Header />
        </div>        

        <section className="project container">
          <h1 className="sub-title">{currentProject.title}</h1>
          <h4>Status: {currentProject.status}</h4>
          <p>{currentProject.purpose}</p>

          <ul className="project-images">
            {currentProject.screenshots.length === 0 && 
              <p>No screenshots yet.</p>
            }

            {currentProject.screenshots.map((x, id) => {
              return(
                <li key={id}>
                  <img src={require(`../../assets/${x}`)} alt="Screenshot of project" className="project-screenshot"/>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}


export default ProjectPage;