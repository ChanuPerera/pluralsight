import React from "react";
import DoubleNavbar from "../components/DoubleNav";
import Hero from "../assets/images/hero.png";

function Landing() {
  return (
    <div className="App">
      <DoubleNavbar />
      <header className="App-header">
        <div className="container p-5 justify-content-center align-items-center">
          <h1>Pluralsight enables you to develop technical expertise.</h1>
          <p>
            Cultivate essential tech competencies, reduce project timelines,
            foster more content tech teams, and turn your objectives into
            achievements
          </p>

          <button
            type="button"
            className="btn enroll-btn rounded-pill py-2 px-4"
          >
            Get Start
          </button>

          <div className="col-md-4 col-12 mx-auto position-relative">
            <img src={Hero} alt="hero" className="hero-img" />
          </div>
        </div>
      </header>

      <section id="features" className="section">
        <div className="container">
          <h2>Key Features</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="feature-card">
                <h3>Feature 1</h3>
                <p>Description of feature 1.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card">
                <h3>Feature 2</h3>
                <p>Description of feature 2.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card">
                <h3>Feature 3</h3>
                <p>Description of feature 3.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="section bg-primary text-white">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Contact us now and boost your business.</p>
          <a href="#contact" className="btn btn-light">
            Contact Us
          </a>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2>Contact Us</h2>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
