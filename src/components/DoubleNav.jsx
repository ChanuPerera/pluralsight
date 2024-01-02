import React, { useState, useEffect, useRef } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Row,
  Col,
  Container,
} from "react-bootstrap";

import Logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import * as Icons from "@mui/icons-material";
import classnames from "classnames";

const DoubleNavbar = () => {
  const links = [
    {
      name: "Skills",
      link: "Skills",
      icon: "AllInclusive",
    },
    {
      name: "Blog",
      link: "Blog",
      icon: "Book",
    },
    {
      name: "Study",
      link: "Study",
      icon: "School",
    },
  ];

  const bottomLinks = [
    {
      title: "Solutions",
      icon: "EmojiObjects",
      sublinks: [
        {
          name: "Skill",
          description: "dwad awdad ada",
          icon: "Bolt",
        },
        {
          name: "Courses",
          description: "dwad awdad ada",
          icon: "BorderColor",
        },
        {
          name: "Technologies",
          description: "dwad awdad ada",
          icon: "Hub",
        },
      ],
    },
    {
      title: "Products",
      icon: "Dns",
      sublinks: [
        {
          name: "Product Skill",
          description: "dwad awdad ada",
          icon: "Bolt",
        },
        {
          name: "Product Courses",
          description: "dwad awdad ada",
          icon: "BorderColor",
        },
        {
          name: "Product Technologies",
          description: "dwad awdad ada",
          icon: "Hub",
        },
      ],
    },
    {
      title: "Technologies",
      icon: "OnlinePrediction",
      sublinks: [
        {
          name: "Technical Skill",
          description: "dwad awdad ada",
          icon: "Bolt",
        },
        {
          name: "Tech Courses",
          description: "dwad awdad ada",
          icon: "BorderColor",
        },
        {
          name: "Tech Stack",
          description: "dwad awdad ada",
          icon: "Hub",
        },
      ],
    },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [selectedLink, setSelectedLink] = useState(null);

  const toggleDropdown = (title) => {
    if (selectedLink === title) {
      setIsDropdownOpen(!isDropdownOpen);
    } else {
      setIsDropdownOpen(true);
      setSelectedLink(title);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDropdownOpen]);

  const renderDropdownContent = () => {
    if (!selectedLink) {
      return null;
    }

    const selectedLinkData = bottomLinks.find(
      (link) => link.title === selectedLink
    );

    if (!selectedLinkData) {
      return null;
    }

    return (
      <div className="container">
        <h5>{selectedLinkData.title} Solutions</h5>
        <hr />
        <div className="dropdown-body justify-content-start mx-auto">
          {selectedLinkData.sublinks.map((sublink, subindex) => (
            <div key={subindex} className="d-flex flex-col">
              <div className="nav-link d-flex flex-row p-1 justify-content-start bg-white mb-1 align-items-center col-md-4 col-12 rounded">
                <div className="icon-wrapper rounded-circle mr-2 d-flex justify-content-center align-items-center">
                  <span className="Icon-Wrapper text-white">
                    {Icons[sublink.icon] &&
                      React.createElement(Icons[sublink.icon])}
                  </span>
                </div>

                <div className="info d-flex flex-column ">
                  <h6>
                    <strong>{sublink.name}</strong>
                  </h6>
                  <p>{sublink.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar expand="lg" fluid className="top-nav">
        <Navbar.Toggle aria-controls="first-row">
          <FontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>
        <Navbar.Collapse id="first-row" className="justify-content-center ">
          <Nav className="nav-body mx-auto justify-content-end">
            {links.map((linkitem, index) => (
              <div key={index}>
                <li href="#" className="nav-link">
                  <span className="Icon-Wrapper mr-2">
                    {Icons[linkitem.icon] &&
                      React.createElement(Icons[linkitem.icon])}
                  </span>
                  {linkitem.name}
                </li>
              </div>
            ))}
            <Button variant="outline-light" className="login-btn">
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Navbar expand="lg" fluid className="bottom-nav p-md-0">
        <div className="nav-body mx-auto justify-content-start">
          <div
            id="second-row"
            className="d-flex flex-row justify-content-between align-items-center"
          >
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <div className="logo-holder d-md-block d-none">
                <Navbar.Brand href="#">
                  <img src={Logo} alt="Logo" className="logo" />
                </Navbar.Brand>
              </div>

              <Nav className="mr-md-auto d-flex flex-row mx-auto ">
                {bottomLinks.map((linkitem, index) => (
                  <div key={index} className="d-flex flex-row">
                    <li
                      className={classnames("nav-link", {
                        "selected-link": selectedLink === linkitem.title,
                      })}
                      onClick={() => toggleDropdown(linkitem.title)}
                    >
                      <span className="Icon-Wrapper mr-2">
                        {Icons[linkitem.icon] &&
                          React.createElement(Icons[linkitem.icon])}
                      </span>
                      {linkitem.title}
                    </li>
                  </div>
                ))}
                <button
                  type="button"
                  className="btn enroll-btn d-md-none block rounded-pill "
                >
                  Enroll
                </button>
              </Nav>
            </div>

            <div className="d-md-block d-none">
              <button
                type="button"
                className="btn enroll-btn rounded-pill py-2 px-4"
              >
                Enroll now
              </button>
            </div>
          </div>
        </div>
      </Navbar>

      <div className="container drop-container mx-auto">
        {isDropdownOpen && (
          <Container
            className={`mx-auto p-5 justify-content-start rounded-bottom dropdown-body-wrapper ${
              isDropdownOpen ? "" : "slide-up"
            }`}
          >
            {renderDropdownContent()}
          </Container>
        )}
      </div>
    </>
  );
};

export default DoubleNavbar;
