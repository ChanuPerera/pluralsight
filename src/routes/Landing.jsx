import React, {useEffect} from "react";
import DoubleNavbar from "../components/DoubleNav";
import Hero from "../assets/images/hero2.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Fb from "../assets/images/fb.png";
import Gc from "../assets/images/gc.png";
import Ms from "../assets/images/ms.png";
import Oc from "../assets/images/Oc.png";
import AWS from "../assets/images/aws.png";

function Landing() {


  const brandlogo = [
    {
      name: "Facebook",
      image:Fb
    },
    {
      name: "Google Cloud",
      image:Gc
    },
    {
      name: "Microsoft",
      image:Ms
    },

    {
      name: "Oracle",
      image:Oc
    },
    {
      name: "AWS",
      image:AWS
    },
  ]











  return (
    <div className="App">
      <DoubleNavbar />
      <header className="App-header text-white">
        <div className="container p-5 justify-content-center align-items-center">
          <h1>Pluralsight enables you <br/>to develop technical expertise.</h1>
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
            <div className="col-md-4 rounded-md">
              <div className="feature-card ">
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
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
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

  {brandlogo.map((logo,index) => (
    <div className="w-100" key={index}>
<div className="col-md-8 col-4 brand-logo">
          <img src={logo.image} alt={logo.name}/>
        </div>
</div>
        

  ))}
  

          
          

          
        </Carousel>





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
