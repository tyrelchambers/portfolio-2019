import React from 'react'
import './AboutPage.scss';

const AboutPage = (params) => {
  return(
    <div className="container">
      <h1 className="sub-title"> 01. I love being a programmer</h1>
      <p>Hey, I'm Tyrel.</p>
      <p>I believe in following your passions wherever that may lead. That's why I became a web developer. I began dabbling in the art in 2013 and I've been chasing that dream ever since. I've been able to teach myself all about web development, from the front-end to the back-end, to managing servers on a VPS. In pursuit of my passions, I also taught myself a little design.</p>
      <p>I love creating applications that better everyday life. You'll have a look at my portfolio here and think, "Not a whole lot to show here." I know. Ever since I began my journey, I believed in creating websites that matter. You won't find dummy websites here, and other mock sites that are supposed to showcase one's "skill". Instead, you'll find completed and imcomplete projects that I believe will become a big part of my life and other's once they're finished. These projects are quite large in their scope which is why there are no small projects here to showcase; my ideas are ambitious.</p>
      <p>Other than programming, I narrate stories on my <a href="https://youtube.com/storiesaftermidnight" rel="noopener noreferrer" target="_blank" className="styled-link">youtube channel</a> and I <a href="https://growyourcode.webflow.io" rel="noopener noreferrer" target="_blank" className="styled-link">blog</a>.</p>
      <p>I love bringing ideas to life, this is why I love being a programmer.</p>


      <h1 className="sub-title mt-large">02. What I'm good at</h1>
      <p>The bars represent my confidence level in the listed languages and programs. It goes from "Not Confident" to "Confident".</p>
      <ul className="skills front-end">
        <li className="skill">
          <h4>HTML/SCSS</h4> 
          <div className="skill-level">
            <div className="skill-level-inner" id="htmlScss"></div>
          </div>
        </li>

        <li className="skill">
          <h4>JAVASCRIPT</h4>
          <div className="skill-level">
            <div className="skill-level-inner" id="javascript"></div>
          </div>
        </li>

        <li className="skill">
          <h4>NODE/EXPRESS</h4>
          <div className="skill-level">
            <div className="skill-level-inner" id="nodeExpress"></div>
          </div>
        </li>

        <li className="skill">
          <h4>GIT</h4>
          <div className="skill-level">
            <div className="skill-level-inner" id="git"></div>
          </div>
        </li>

        <li className="skill">
          <h4>REACT</h4>
          <div className="skill-level">
            <div className="skill-level-inner" id="react"></div>
          </div>
        </li>
      </ul>

      <ul className="skills design">
        <li className="skill">
          <h4>Affinity Design</h4> 
          <div className="skill-level">
            <div className="skill-level-inner" id="affinity"></div>
          </div>
        </li>

        <li className="skill">
          <h4>FIGMA</h4>
          <div className="skill-level">
            <div className="skill-level-inner" id="figma"></div>
          </div>
        </li>
      </ul>

      <ul className="skills personalSkills">
        <li className="skill">
          <h4>SELF-STARTER</h4> 
          <div className="skill-level">
            <div className="skill-level-inner" id="selfStarter"></div>
          </div>
        </li>

        <li className="skill">
          <h4>PASSION</h4>
          <div className="skill-level">
            <div className="skill-level-inner" id="passion"></div>
          </div>
        </li>

        <li className="skill">
          <h4>AMBITION</h4>
          <div className="skill-level">
            <div className="skill-level-inner" id="ambition"></div>
          </div>
        </li>
      </ul>

      <h4 className="sub-title mt-large">03. Where I've worked</h4>
      <ul>
        <li className="d-f fxd-c jc-c">
          <p className="date">2019 - Present</p>
          <div className="d-f ai-c">
            <h4 className="mr+">MicroAge</h4>
            <p>Information Technology Support Representative</p>
          </div>
        </li>

        <li className="d-f fxd-c jc-c">
          <p className="date">2016 - Present</p>
          <div className="d-f ai-c">
            <h4 className="mr+">KeySpark</h4>
            <p>Founder</p>
          </div>
        </li>

        <li className="d-f fxd-c jc-c">
          <p className="date">2014 - 2018</p>
          <div className="d-f ai-c">
            <h4 className="mr+">SportChek</h4>
            <p>Cashier</p>
          </div>
        </li>

        <li className="d-f fxd-c jc-c">
          <p className="date">2015 - 2016</p>

          <div className="d-f ai-c">
            <h4 className="mr+">Conflict2Profit</h4>
            <p>Webmaster &amp; Web-developer</p>
          </div>
        </li>

        <li className="d-f fxd-c jc-c">
          <p className="date">2013 - 2014</p>
          <div className="d-f ai-c">
            <h4 className="mr+">Independent Contractor</h4>
            <p>Web Developer</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default AboutPage;