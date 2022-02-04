import React, { useState } from "react";
import responsive from "../assets/responsive.jpg";
import { FaLink, FaPlusCircle, FaMinusCircle, FaGithub } from "react-icons/fa";

import projectFive from "../assets/omnifood.jpg";
import projectFour from "../assets/project4.jpg";
import projectThree from "../assets/project-3.jpg";
import projectTwo from "../assets/culuflix.jpg";
import projectOne from "../assets/pacman.jpg";
import projectSix from "../assets/huddle.jpg";

function Projects() {
  const [isText, setIsText] = useState(false);

  return (
    <div id="projects" className="project-wrapper">
      <div
        className="project-header-container"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <h2 className="custom-underline">projects.</h2>
        <div className="image-container">
          <img src={responsive} alt="Mac and Ipad Design" />
          <h3>Responsive Web Design</h3>
        </div>
      </div>
      <div className="button-container">
        <p className="click">Click Me</p>
        <button onClick={() => setIsText(!isText)}>
          {isText ? <FaMinusCircle /> : <FaPlusCircle />}
        </button>
      </div>
      <section
        className="project-card"
        style={{ marginBottom: isText ? "200px" : "0px" }}
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="3000"
      >
        <div className="project">
          <div className="project-image-container">
            <img src={projectFour} alt="Website Project Example" />
          </div>
          <div>
            {isText ? (
              <div className="project-text-container">
                <p>
                  This was my final solo project with General Assembly.
                  Hand-Me-Over is an ecommerce site, which allows users to
                  purchase and sell their own designer handbag.
                  <br />
                  Brief:
                  <br />
                  Create a full stack app using PostgreSQL, Python & Django on
                  the back-end and a React Front-End.
                </p>
                <div className="links-container">
                  <a href="https://handmeover.herokuapp.com/">
                    <FaLink /> Live Link
                  </a>
                  <a href="https://github.com/Ala161092/Sei-project-4-HandMeOver">
                    <FaGithub /> GitHub Link
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="project">
          <div className="project-image-container">
            <img src={projectThree} alt="Website Project Example" />
          </div>
          <div>
            {isText ? (
              <div className="project-text-container">
                <p>
                  This was my first group project with General Assmebly.
                  Techanic is a developer based collab app, where users are able
                  to post projects that they are working on and would like other
                  developers to collaborate with them on.
                  <br />
                  Brief:
                  <br />8 days to build a full stack MERN app with crud
                  functionality built on Express & MongoDb and must have
                  multiple front-end pages using React.
                </p>
                <div className="links-container">
                  <a href="https://techanic.herokuapp.com/">
                    <FaLink /> Live Link
                  </a>
                  <a href="https://github.com/Ala161092/job-app">
                    <FaGithub /> GitHub Link
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="project">
          <div className="project-image-container">
            <img src={projectTwo} alt="Website Project Example" />
          </div>
          <div>
            {isText ? (
              <div className="project-text-container">
                <p>
                  My second solo project at General Assembly. This site utilises
                  the Moviedb API, users of the site are able to view the latest
                  trending movies and tv shows, read the reviews of those who
                  have posted and find something else to watch based on the
                  recommendations
                  <br />
                  Brief:
                  <br />
                  This was a 48 hour hackathon project. This application was
                  created using React, JavaScript, HTML and styles with SAS
                </p>
                <div className="links-container">
                  <a href="https://culuflix.netlify.app/">
                    <FaLink /> Live Link
                  </a>
                  <a href="https://github.com/Ala161092/Sei-Project-2-CuluFlix">
                    <FaGithub /> GitHub Link
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="project">
          <div className="project-image-container">
            <img src={projectOne} alt="Website Project Example" />
          </div>
          <div>
            {isText ? (
              <div className="project-text-container">
                <p>
                  This was my first project from the General Assembly course. My
                  project was built on a modern twist of the original arcade
                  game Pacman.
                  <br />
                  Brief:
                  <br />
                  We were given 8 days to build a classic JavaScript-grid based
                  arcade game, using HTML & CSS
                </p>
                <div className="links-container">
                  <a href="https://ala161092.github.io/PacMan/">
                    <FaLink /> Live Link
                  </a>
                  <a href="https://github.com/Ala161092/PacMan">
                    <FaGithub /> GitHub Link
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="project">
          <div className="project-image-container">
            <img src={projectFive} alt="Website Project Example" />
          </div>
          <div>
            {isText ? (
              <div className="project-text-container">
                <p>
                  My first ever solo project. After watching several online
                  course and tutuorials, I took my first step and replicated a
                  design I found online through Udemy. The project is fully
                  responsive.
                  <br />
                  Brief:
                  <br />
                  This project was built using HTML5 & CSS, with some JavaScript
                  applied.
                </p>
                <div className="links-container">
                  <a href="https://omni-food-three.vercel.app/">
                    <FaLink /> Live Link
                  </a>
                  <a href="https://github.com/Ala161092/OmniFood">
                    <FaGithub /> GitHub Link
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="project">
          <div className="project-image-container">
            <img src={projectSix} alt="Website Project Example" />
          </div>
          <div>
            {isText ? (
              <div className="project-text-container">
                <p>
                  A small project from the frontendmentor.io platflorm. I was
                  able to practice CSS flexbox and really cement my HTML
                  learning. This site is fully responsive.
                  <br />
                  This project was built using HTML & CSS
                </p>
                <div className="links-container">
                  <a href="https://huddle-2-git-main-ala161092.vercel.app/">
                    <FaLink /> Live Link
                  </a>
                  <a href="https://github.com/Ala161092/Huddle-2">
                    <FaGithub /> GitHub Link
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
