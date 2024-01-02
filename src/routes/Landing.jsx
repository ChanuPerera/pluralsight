import React, { useEffect } from "react";
import DoubleNavbar from "../components/DoubleNav";
import Hero from "../assets/images/hero2.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Fb from "../assets/images/fb.png";
import Gc from "../assets/images/gc.png";
import Ms from "../assets/images/ms.png";
import Oc from "../assets/images/Oc.png";
import AWS from "../assets/images/aws.png";

import * as Icons from "@mui/icons-material";

function Landing() {
  const brandlogo = [
    {
      name: "Facebook",
      image: Fb,
    },
    {
      name: "Google Cloud",
      image: Gc,
    },
    {
      name: "Microsoft",
      image: Ms,
    },

    {
      name: "Oracle",
      image: Oc,
    },
    {
      name: "AWS",
      image: AWS,
    },
  ];

  const services = [
    {
      title: "Software Product Development",
      icon: "DeveloperMode",
      des: "We are a software development company delivering software architecture services to assist clients in designing and building software products or integrating new tools into the existing software systems.",
    },
    {
      title: "Internet of Things",
      icon: "Hub",
      des: "We build software for IoT, Smart Home and Robotics devices: from the architecture through embedded & middleware to interfaces & apps.",
    },
    {
      title: "Cloud & DevOps Solutions",
      icon: "CloudDone",
      des: "Helping businesses leverage cloud technology, including setting up a cloud infrastructure, migrating applications to the cloud, developing cloud-based applications, and supporting cloud platforms.",
    },
  ];

  return (
    <div className="App">
      <DoubleNavbar />
      <header className="App-header text-white">
        <div className="container p-5 justify-content-center align-items-center">
          <h1>
            Pluralsight enables you <br />
            to develop technical expertise.
          </h1>
          <p>
            Cultivate essential tech competencies, reduce project timelines,
            foster more content tech teams, and turn your objectives into
            achievements
          </p>

          <button
            type="button"
            className="btn get-btn rounded-pill px-4 shadow"
          >
            Get Start
          </button>

          <div className="col-md-10 col-lg-8 col-12 mx-auto position-relative">
            <img src={Hero} alt="hero" className="hero-img" />
          </div>
        </div>
      </header>

      <section id="features" className="section text-white">
        <div className="container">
          <h2>Our Services</h2>

          <div className="row">
            {services.map((service, index) => (
              <div className="col-md-4 d-flex" key={index}>
                <div className="feature-card bg-dark rounded justify-center">
                  <div className="service-icon-wrapper rounded-circle mx-auto mb-2 d-flex justify-content-center align-items-center">
                    <span className="Icon-Wrapper text-white">
                      {Icons[service.icon] &&
                        React.createElement(Icons[service.icon])}
                    </span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="section text-white">
        <div className="container">
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 3,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {brandlogo.map((logo, index) => (
              <div className="w-100" key={index}>
                <div className="col-md-8 col-12 brand-logo">
                  <img src={logo.image} alt={logo.name} />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      <footer className="footer">
        <div className="container text-white">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
