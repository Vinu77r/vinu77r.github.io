import logo from "./logo.svg";
import "../src/css/App.scss";

function App() {
  return (
    <div className="vr">
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
      <main>
        <div className="vr-about">
          <p className="vr-title vr-title--md vr-about__hello">Hello,</p>
          <p className="vr-title vr-title--lg vr-about__name">
            I’m Vinu - UI Engineer
          </p>
          <p className="vr-desc vr-about__desc">
            I'm a UI Engineer with 4+ years of experience who loves design,
            code, and coffee. I have a passion for crafting human-computer
            interaction and believe in building easy-to-maintain websites/apps
            by breaking them down into its smallest components.
          </p>
          <button className="vr-primary-button vr-about__button">
            Get resume
          </button>
        </div>
        <div className="vr-skills">
          <p className="vr-title vr-title--sm">Skills</p>
          <div className="vr-skills-cat-list">
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
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
