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

const DoubleNavbar = () => {
 

  const links = [
    {
      name: "Skills",
      link: "Skills",
    },
    {
      name: "Blog",
      link: "Blog",
    },
    {
      name: "Study",
      link: "Study",
    },
  ];

  const bottomLinks = [
    {
      title: "Solutions",
      sublinks: [
        {
          name: "Skill",
          description: "dwad awdad ada",
        },
        {
          name: "Courses",
          description: "dwad awdad ada",
        },
        {
          name: "Technologies",
          description: "dwad awdad ada",
        },
      ],
    },
    {
      title: "Products",
      sublinks: [
        {
          name: "Products Skill",
          description: "dwad awdad ada",
        },
        {
          name: "Products Courses",
          description: "dwad awdad ada",
        },
        {
          name: "Products Technologies",
          description: "dwad awdad ada",
        },
      ],
    },
    {
      title: "Technologies",
      sublinks: [
        {
          name: "Technical Skill",
          description: "dwad awdad ada",
        },
        {
          name: "Technical Courses",
          description: "dwad awdad ada",
        },
        {
          name: "Technical Technologies",
          description: "dwad awdad adaddddd",
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDropdownOpen]);



  const renderDropdownContent = () => {
    if (!selectedLink) {
      return null;
    }

    const selectedLinkData = bottomLinks.find((link) => link.title === selectedLink);

    if (!selectedLinkData) {
      return null;
    }



    

    return (
      <>
        <h5>{selectedLinkData.title} Solutions</h5>
        <hr />
        <div className="dropdown-body justify-content-start">
          {selectedLinkData.sublinks.map((sublink, subindex) => (
            <div key={subindex} className="d-flex flex-col">
              <div className="nav-link d-flex flex-row p-1 justify-content-start bg-white mb-1 align-items-center col-md-4 col-12 rounded">
                <div className="icon-wrapper rounded-circle mr-2"></div>
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
      </>
    );
  };
  
  return (
    <>
      <Navbar expand="lg" fluid className="top-nav">
        <Navbar.Toggle aria-controls="first-row" >
        <FontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>
        <Navbar.Collapse id="first-row" className="justify-content-center ">
          <Nav className="nav-body mx-auto justify-content-end">
            {links.map((linkitem, index) => (
              <div key={index}>
                <Nav.Link href="#" className="nav-link">
                  {linkitem.name}
                </Nav.Link>
              </div>
            ))}
            <Button variant="outline-light" className="login-btn">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Navbar expand="lg" fluid className="bottom-nav p-md-0" >
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
                      className="nav-link"
                      onClick={() => toggleDropdown(linkitem.title)}
                    >
                      {linkitem.title}
                    </li>
                  </div>
                ))}
                 <button type="button" className="btn enroll-btn d-md-none block rounded-pill ">Enroll now</button>
              </Nav>
            </div>
            
            <div className="d-md-block d-none">
              <button type="button" className="btn enroll-btn rounded-pill py-2 px-4">Enroll now</button>
            </div>
          </div>
        </div>
      </Navbar>


<div className="container drop-container ">
{/* {isDropdownOpen && (
<Container className={`mx-auto  p-5 justify-content-start rounded-bottom dropdown-body-wrapper ${isDropdownOpen ? '' : 'slide-up'}`}>
       {bottomLinks.map((link,index) => (
 <div className="" key={index}>
<h5>{link.title} Solutions</h5>
          <hr></hr>
          <div className="dropdown-body justify-content-start">
            {link.sublinks.map((sublink, subindex) => (
                <div key={subindex} className="d-flex flex-col">
                  <div className="nav-link d-flex flex-row p-1 justify-content-start bg-white mb-1 align-items-center col-md-4 col-12 rounded">
                    <div className="icon-wrapper rounded-circle mr-2"></div>
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

       ))}
      
          
        </Container>
)} */}











{isDropdownOpen && (
          <Container className={`mx-auto p-5 justify-content-start rounded-bottom dropdown-body-wrapper ${isDropdownOpen ? '' : 'slide-up'}`}>
            {renderDropdownContent()}
          </Container>
        )}

</div>
      
      
    </>
  );
};

export default DoubleNavbar;
