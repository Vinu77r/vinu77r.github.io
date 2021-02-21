import logo from "./logo.svg";
import "../src/css/App.scss";
import { render } from "@testing-library/react";
import user from "../src/user.json";
import React, { useState } from "react";

import html from "../src/images/html.svg";

import image from "../src/images/css.svg";

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
  return (
    <div className="vr-skills">
      <p className="vr-title vr-title--sm">Skills</p>
      <div className="vr-skills-cat-list">
        <div className="vr-skills-cat-item">
          <p className="vr-title vr-title--xs">Development skills</p>
          <div className="vr-skills-list">
            <div className="vr-skills-item">
              <div className="vr-skills-item__icon">
                <img src={html} />
              </div>
              <p className="vr-skills-item__desc">HTML/HTML5</p>
            </div>
            <div className="vr-skills-item">
              <div className="vr-skills-item__icon">
                <img src={image} />
              </div>
              <p className="vr-skills-item__desc">CSS/CSS3</p>
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
