import logo from "./logo.svg";
import "../src/css/App.scss";
import { render } from "@testing-library/react";
import user from "../src/user.json";
import React, { useState } from "react";

import icon_html from "../src/images/html.svg";
import icon_css from "../src/images/css.svg";
import icon_javaScript from "../src/images/css.svg";
import icon_sassy from "../src/images/css.svg";
import icon_react from "../src/images/css.svg";
import icon_expo from "../src/images/css.svg";

//Version control
import icon_github from "../src/images/css.svg";
import icon_gitlab from "../src/images/css.svg";

//IDE
import icon_vscode from "../src/images/css.svg";

//Design tools
import icon_figma from "../src/images/css.svg";
import icon_sketch from "../src/images/css.svg";

//Collabration tool
import icon_zeplin from "../src/images/css.svg";
import icon_invision from "../src/images/css.svg";

function App() {
  return (
    <div className="vr">
      <Header_nav />
      <main>
        <About />
        <Skills />
      </main>
    </div>
  );
}

function Header_nav() {
  return (
    <header className="vr-header">
      <div className="vr-header__icon">VR</div>
      <nav className="vr-header-nav">
        <a className="vr-header-nav__item" href="#">
          About
        </a>
        <a className="vr-header-nav__item" href="#">
          Skills
        </a>
        <a className="vr-header-nav__item" href="#">
          Experience
        </a>
      </nav>
      <div className="vr-header-public-profile">
        <button className="vr-icon-button">
          <i className="vri-github"></i>
        </button>
        <button className="vr-icon-button">
          <i className="vri-linkedin"></i>
        </button>
        <button className="vr-icon-button">
          <i className="vri-insta"></i>
        </button>
        <button className="vr-icon-button">
          <i className="vri-mail"></i>
        </button>
      </div>
    </header>
  );
}
function About() {
  const about = {
    title: "Hello",
    userName: "Vinu",
    jobTitle: "UI Engineer",
    aboutUser:
      "I'm a UI Engineer with 4+ years of experience who loves design, code, and coffee. I have a passion for crafting human-computer interaction and believe in building easy-to-maintain websites/apps by breaking them down into its smallest components. ",
  };
  return (
    <div className="vr-about">
      <p className="vr-title vr-title--md vr-about__hello">{about.title}</p>
      <p className="vr-title vr-title--lg vr-about__name">
        {about.userName} - {about.jobTitle}
      </p>
      <p className="vr-desc vr-about__desc">{about.aboutUser}</p>
      <button className="vr-primary-button vr-about__button">Get resume</button>
    </div>
  );
}

function Skills() {
  const skills_set_1 = {
    skill_1: "HTML/HTML5",
    skill_2: "CSS/CSS3",
    skill_3: "JavaScript",
    skill_4: "Sassy CSS",
    skill_5: "React.js",
    skill_6: "Expo",
  };
  const skills_set_2 = {
    skill_1: "Github",
    skill_2: "Gitlab",
  };
  const skills_set_3 = {
    skill_1: "VS Code ",
  };
  const skills_set_4 = {
    skill_1: "Figma ",
    skill_2: "Sketch",
  };
  const skills_set_5 = {
    skill_1: "Zeplin ",
    skill_2: "Invision ",
  };
  return (
    <div className="vr-skills">
      <p className="vr-title vr-title--sm">Skills</p>
      <div className="vr-skills-cat-list">
        <div className="vr-skills-cat-item">
          <p className="vr-title vr-title--xs">Development skills</p>
          <div className="vr-skills-list">
            <div className="vr-skills-item">
              <div className="vr-skills-item__icon">
                <img src={icon_html} />
              </div>
              <p className="vr-skills-item__desc">{skills_set_1.skill_1}</p>
            </div>
            <div className="vr-skills-item">
              <div className="vr-skills-item__icon">
                <img src={skills_set_1.skill_1_icon} />
              </div>
              <p className="vr-skills-item__desc">{skills_set_1.skill_2}</p>
            </div>
            <div className="vr-skills-item">
              <div className="vr-skills-item__icon"></div>
              <p className="vr-skills-item__desc">JavaScript</p>
            </div>
            <div className="vr-skills-item">
              <div className="vr-skills-item__icon">
                <img src="../src/images/image.svg" />
              </div>
              <p className="vr-skills-item__desc">Sassy CSS</p>
            </div>
            <div className="vr-skills-item">
              <div className="vr-skills-item__icon"></div>
              <p className="vr-skills-item__desc">React.js</p>
            </div>
            <div className="vr-skills-item">
              <div className="vr-skills-item__icon"></div>
              <p className="vr-skills-item__desc">Expo</p>
            </div>
          </div>
        </div>
        <div className="vr-skills-cat-item">
          <p className="vr-title vr-title--xs">Development skills</p>
          <div className="vr-skills-list">
            <div className="vr-skills-item">
              <div className="vr-skills-item__icon">
                <img src="../images/html.svg" />
              </div>
              <p className="vr-skills-item__desc">HTML/HTML5</p>
            </div>
            <div className="vr-skills-item">
              <div className="vr-skills-item__icon"></div>
              <p className="vr-skills-item__desc">HTML/HTML5</p>
            </div>
          </div>
        </div>
        <div className="vr-skills-cat-item">
          <p className="vr-title vr-title--xs">Development skills</p>
          <div className="vr-skills-list">
            <div className="vr-skills-item">
              <div className="vr-skills-item__icon">
                <img src="../images/html.svg" />
              </div>
              <p className="vr-skills-item__desc">HTML/HTML5</p>
            </div>
            <div className="vr-skills-item">
              <div className="vr-skills-item__icon"></div>
              <p className="vr-skills-item__desc">HTML/HTML5</p>
            </div>
          </div>
        </div>{" "}
        <div className="vr-skills-cat-item">
          <p className="vr-title vr-title--xs">Development skills</p>
          <div className="vr-skills-list">
            <div className="vr-skills-item">
              <div className="vr-skills-item__icon">
                <img src="../../images/html.svg" />
              </div>
              <p className="vr-skills-item__desc">HTML/HTML5</p>
            </div>
            <div className="vr-skills-item">
              <div className="vr-skills-item__icon"></div>
              <p className="vr-skills-item__desc">HTML/HTML5</p>
            </div>
          </div>
        </div>
        <div className="vr-skills-cat-item">
          <p className="vr-title vr-title--xs">Development skills</p>
          <div className="vr-skills-list">
            <div className="vr-skills-item">
              <div className="vr-skills-item__icon">
                <img src="../images/html.svg" />
              </div>
              <p className="vr-skills-item__desc">HTML/HTML5</p>
            </div>
            <div className="vr-skills-item">
              <div className="vr-skills-item__icon"></div>
              <p className="vr-skills-item__desc">HTML/HTML5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
