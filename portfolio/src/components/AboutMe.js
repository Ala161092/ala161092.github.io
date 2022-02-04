import React from "react";
import worldMap from "../assets/world-map.jpg";
import foodImage from "../assets/cooking.jpg";
import catsImage from "../assets/cat.jpg";
import "aos/dist/aos.css";

function AboutMe() {
  return (
    <div id="about">
      <div className="about-container">
        <div
          className="about-section"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <h2 className="custom-underline">about me.</h2>
          <p className="about-me-para">
            I have spent the last few years working in the finance industry, I
            have been able to learn and develop indispensable organisational and
            communications skills. During the pandemic, I discovered the web
            development world of Youtube. I found myself spending hours watching
            video tutorials on how to create e-commerce sites and online games.
            I went on to study Software Engineering at General Assembly,
            creating projects that allowed me to work independently and
            collaboratively with other students. With my skill set and
            experience in React, CSS and JavaScript, aligned with my aptitude
            for learning, I aim to be a champion in creating aesthetic and
            trending web pages.
            <br />
            When I'm not coding, you can find me being an amazing cat mum and
            binge-watching the latest Netflix drop.
          </p>
        </div>
        <div
          className="skills-container"
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <i className="devicon-html5-plain-wordmark"></i>
          <i className="devicon-css3-plain-wordmark"></i>
          <i className="devicon-sass-original"></i>
          <i className="devicon-javascript-plain"></i>
          <i className="devicon-python-plain-wordmark"></i>
          <i className="devicon-nodejs-plain-wordmark"></i>
          <i className="devicon-npm-original-wordmark"></i>
          <i className="devicon-react-original-wordmark"></i>
          <i className="devicon-postgresql-plain-wordmark"></i>
          <i className="devicon-django-plain"></i>
          <i className="devicon-mongodb-plain-wordmark"></i>
          <i className="devicon-github-original-wordmark"></i>
          <i className="devicon-slack-plain-wordmark"></i>
          <i className="devicon-yarn-plain-wordmark"></i>
          <i className="devicon-vuejs-plain-wordmark"></i>
          <i className="devicon-express-original-wordmark"></i>
          <i className="devicon-vscode-plain-wordmark"></i>
          <i className="devicon-figma-plain"></i>
          <i className="devicon-photoshop-plain"></i>
          <i className="devicon-trello-plain-wordmark"></i>
        </div>
      </div>
      <div>
        <h2 className="custom-underline">interests.</h2>
        <div className="interests-container">
          <section
            className="interest-card"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h4>Travelling</h4>
            <div className="image-interest-container">
              <img src={worldMap} alt="World Map" />
            </div>
            <p>
              Travelling keeps me inspired. The exposure to a new place, new
              foods and new cultures has ignited a passion for travel.
              Travelling to new destinations always has the element of surprise
              which connects me to the world.
            </p>
          </section>
          <section
            className="interest-card"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h4>Cooking</h4>
            <div className="image-interest-container">
              <img src={foodImage} alt="Cartoon Food"/>
            </div>
            <p>
              I love all things food! Eating at new restaurants and trying to
              replicate the same meals back in my kitchen, is my new favourite
              hobby. Trying new dishes and learning my familys favourite meals,
              is a very loved satisfaction of mine.
            </p>
          </section>
          <section
            className="interest-card"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h4>All Things Cats</h4>
            <div className="image-interest-container">
              <img src={catsImage} alt="Cat"/>
            </div>
            <p>
              I am obsessed with cats. My recent rescue kitten - not so much a
              kitten anymore is lollipop. Strange name I know, but she is just
              the sweetest little creature! When I'm not coding i'm probably
              chasing her around the house.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
