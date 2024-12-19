import React from 'react';
import '../styles/js/port.js';
import '../styles/CSS/port.css';
import logo from '../assets/about.jpg/';
import '../assets/home.jpg'

const Port = () => {
  return (
    <div>
      <header className="header">
        <a href="#" className="logo">ASHOK</a>
        <div className='bx bx-menu' id="icons"></div>
        <nav className="navbar">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="home" id="home">  
        <div className="home-content">  
          <h1>I'm <span>Ashok Kumar</span></h1>
          <div className="text-animate">
            <h3>Full Stack Developer</h3>
          </div> 
          <p>
            Welcome to my web developer portfolio! I'm Ashok, a skilled  <br />and 
            creative web developer with a passion for creating beautiful,<br />
            responsive, and user-friendly websites. I've worked on a variety of web projects,
          </p>
          <div className="btn-box">
            <a href="#" className="btn">Hire Me</a>
            <a href="#" className="btn">Let's Talk</a>
          </div>
          <div className="home-img"></div>
          
        </div>
      </section>

      <section className="about" id="about">
        <h2 className="heading">About <span>Me</span></h2>
        <div className="about-img">
          <img src={logo} alt="About Me" />
          <span className="circle-spin"></span>
        </div>
        <div className="about-con">
          <h3>Full Stack Developer!</h3>
          <p>Welcome to my web developer portfolio! I'm Ashok, <br />a skilled and 
          creative web developer with a passion for creating beautiful,<br />
          responsive, and user-friendly websites. I've worked on a variety of web projects,</p>
          <div className="toto">
            <div className="btn-box btns">
              <a href="#" className="btn">Read More</a>
            </div>
          </div>
        </div>
      </section>

      <section className="education" id="education">
        <h2 className="heading">My <span>Journey</span></h2>
        <div className="education-row">
          <div className="education-column">
            <h3 className="title">Education</h3>
            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year"><h3><i className='bx bx-calendar'></i>2021 - 2024</h3></div>  
                  <h3>
                    <p className="con">MANONMANIAM SUNDARANAR UNIVERSITY <br />
                      BSc Computer Science and Information Technology <br />
                      Percentage: 86%
                    </p>
                  </h3>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year"><h3><i className='bx bx-calendar'></i>2020 - 2021</h3></div>  
                  <h3>
                    <p className="con">NADAR HIGHER SECONDARY SCHOOL, KOVILPATTI <br />
                      12th Standard <br />
                      Percentage: 79%
                    </p>
                  </h3>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year"><h3><i className='bx bx-calendar'></i>2018 - 2019</h3></div>  
                  <h3>
                    <p className="con">NADAR HIGHER SECONDARY SCHOOL, KOVILPATTI <br />
                      10th Standard <br />
                      Percentage: 73%
                    </p>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills" id="skills">
        <h2 className="heading">My <span>Skills</span></h2>
        <div className="skills-row">
          <div className="skills-column">
            <h3 className="title">Coding Skills</h3>
            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>HTML <span>90%</span></h3>
                  <div className="bar"><span></span></div>
                </div>
                <div className="progress">
                  <h3>CSS <span>80%</span></h3>
                  <div className="bar"><span></span></div>
                </div>
                <div className="progress">
                  <h3>JavaScript <span>50%</span></h3>
                  <div className="bar"><span></span></div>
                </div>
                <div className="progress">
                  <h3>Python <span>70%</span></h3>
                  <div className="bar"><span></span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="skills-column">
            <h3 className="title">Professional Skills</h3>
            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>Web Design <span>95%</span></h3>
                  <div className="bar"><span></span></div>
                </div>
                <div className="progress">
                  <h3>Web Development <span>67%</span></h3>
                  <div className="bar"><span></span></div>
                </div>
                <div className="progress">
                  <h3>Video Editing <span>90%</span></h3>
                  <div className="bar"><span></span></div>
                </div>
                <div className="progress">
                  <h3>Photo Editing <span>50%</span></h3>
                  <div className="bar"><span></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me!</span></h2>
        <form action="#">
          <div className="input-box">
            <div className="input-field">
              <input type="text" placeholder="Full Name" required />
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input type="email" placeholder="Email" required />
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input type="number" placeholder="Mobile Number" required />
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input type="text" placeholder="Email Subject" required />
              <span className="focus"></span>
            </div>
          </div>
          <div className="textarea-field">
            <textarea name="" id="" cols="30" rows="10" placeholder="Your message" required></textarea>
            <span className="focus"></span>
          </div>
          <div className="btn-box btns">
            <button type="submit" className="btn">Submit</button>
          </div>
        </form>
      </section>

      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2024 by developer | All Rights Reserved</p>
        </div>
        <div className="footer-iconTop">
          <a href="#"><i className='bx bx-up-arrow-alt'></i></a>
        </div>
      </footer>
    </div>
  );
}

export default Port;
