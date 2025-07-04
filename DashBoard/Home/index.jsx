// src/components/Sidebar.jsx
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaBars,
  FaHome,
  FaUser,
  FaDumbbell,
  FaStar,
  FaInfoCircle,

  FaTimes
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { MdCardMembership, MdContactMail } from "react-icons/md";
import { GiWeightLiftingUp } from "react-icons/gi";

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="sidebar-container">
      {isMobile && !isOpen && (
        <button className="mobile-toggle-btn" onClick={toggleSidebar}>
          <FaBars size={24} />
        </button>
      )}

      <div className={`sidebar ${isOpen ? "open" : "closed"} ${isMobile ? "mobile" : ""}`}>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        <NavLink to="/dashboard" className="menu-item" onClick={() => isMobile && setIsOpen(false)}>
          <FaHome size={20} />
          {isOpen && <span>Home</span>}
        </NavLink>
        <NavLink to="/dashboard/trainers" className="menu-item" onClick={() => isMobile && setIsOpen(false)}>
          <FaUser size={20} />
          {isOpen && <span>Trainers</span>}
        </NavLink>

        <NavLink to="/dashboard/program" className="menu-item" onClick={() => isMobile && setIsOpen(false)}>
          <FaDumbbell size={20} />
          {isOpen && <span>Services</span>}
        </NavLink>
        <NavLink to="/dashboard/membership" className="menu-item" onClick={() => isMobile && setIsOpen(false)}>
          <MdCardMembership size={20} />
          {isOpen && <span>Membership</span>}
        </NavLink>

        <NavLink to="/dashboard/review" className="menu-item" onClick={() => isMobile && setIsOpen(false)}>
          <FaStar size={20} />
          {isOpen && <span>Review</span>}
        </NavLink>
        <NavLink to="/dashboard/bmi" className="menu-item" onClick={() => isMobile && setIsOpen(false)}>
          <GiWeightLiftingUp size={20} />
          {isOpen && <span>BMI</span>}
        </NavLink>
        <NavLink to="/dashboard/about" className="menu-item" onClick={() => isMobile && setIsOpen(false)}>
          <FaInfoCircle size={20} />
          {isOpen && <span>About-us</span>}
        </NavLink>
        <NavLink to="/dashboard/contact" className="menu-item" onClick={() => isMobile && setIsOpen(false)}>
          <MdContactMail size={20} />
          {isOpen && <span>Contact-us</span>}
        </NavLink>
        
      </div>

      <div className={`main-content ${isMobile && isOpen ? "blur" : ""}`}>

       <Link to="/">
            <button className="logout-btn">
              <FaDumbbell />Logout
            </button>
      </Link>

        <Container className="mt-5">
          {/* Trainers Section */}
          <Row className="justify-content-center mb-4">
            <Col md={12} lg={10} xl={8}>
              <div className="feature-card trainer-card">
                <h1 className="feature-title">
                  <FaUser className="feature-icon" /> Trainers
                </h1>
                <p className="feature-description">
                  Our certified trainers are here to support, motivate, and guide you to achieve your fitness goals faster and smarter.
                </p>
                <div className="trainer-images">
                  <img src="https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Trainer 1"
                    className="trainer-img"
                  />
                  <img src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                    alt="Trainer 2"
                    className="trainer-img"
                  />
                </div>
              </div>
            </Col>
          </Row>

          {/* Services Section */}
          <Row className="justify-content-center mb-4">
            <Col md={12} lg={10} xl={8}>
              <div className="feature-card services-card">
                <h1 className="feature-title">
                  <FaDumbbell className="feature-icon" /> Services
                </h1>
                <p className="feature-description">
                  Tailored Fitness Solutions for Every Goal
                </p>
                <div className="service-list">
                  <div className="service-item">
                    <h4>Personal Training</h4>
                    <p>One-on-one customized workout plans</p>
                  </div>
                  <div className="service-item">
                    <h4>Group Classes</h4>
                    <p>Fun and motivating group sessions</p>
                  </div>
                  <div className="service-item">
                    <h4>Nutrition Plans</h4>
                    <p>Customized diet for your fitness goals</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          {/* Membership Section */}
          <Row className="justify-content-center mb-4">
            <Col md={12} lg={10} xl={8}>
              <div className="feature-card membership-card">
                <h1 className="feature-title">
                  <MdCardMembership className="feature-icon" /> Membership
                </h1>
                <p className="feature-description">
                  Choose the plan that fits your lifestyle
                </p>
                <div className="membership-options">
                  <div className="membership-tier">
                    <h4>Basic</h4>
                    <p>Gym access</p>
                    <p>$29/month</p>
                  </div>
                  <div className="membership-tier">
                    <h4>Premium</h4>
                    <p>Gym + Classes</p>
                    <p>$49/month</p>
                  </div>
                  <div className="membership-tier">
                    <h4>VIP</h4>
                    <p>All access + Trainer</p>
                    <p>$99/month</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          {/* Other Sections */}
          <Row className="justify-content-center">
            <Col md={6} className="mb-4">
              <div className="feature-card">
                <h1 className="feature-title">
                  <FaStar className="feature-icon" /> Reviews
                </h1>
                <p className="feature-description">
                  What our members say about us
                </p>
              </div>
            </Col>
            
            <Col md={6} className="mb-4">
              <div className="feature-card">
                <h1 className="feature-title">
                  <GiWeightLiftingUp className="feature-icon" /> BMI Calculator
                </h1>
                <p className="feature-description">
                  Track your body mass index
                </p>
              </div>
            </Col>
            
            <Col md={6} className="mb-4">
              <div className="feature-card">
                <h1 className="feature-title">
                  <FaInfoCircle className="feature-icon" /> About Us
                </h1>
                <p className="feature-description">
                  Our story and mission
                </p>
              </div>
            </Col>
            
            <Col md={6} className="mb-4">
              <div className="feature-card">
                <h1 className="feature-title">
                  <MdContactMail className="feature-icon" /> Contact Us
                </h1>
                <p className="feature-description">
                  Get in touch with our team
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;