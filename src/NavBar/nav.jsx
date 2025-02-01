/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./nav.css";
import MobileNav from "./mobilenav";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function NavBar({ handleSearchClick }) {
  const [display, setDisplay] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const navRef = useRef(null); // Ref to track the nav element

  const toggleDropdown = (dropdownId) => {
    if (dropdownOpen === dropdownId) {
      setDropdownOpen(null); // If the same dropdown is clicked, close it
    } else {
      setDropdownOpen(dropdownId); // Open the clicked dropdown and close others
    }
  };

  function handleclick() {
    setDisplay((display) => !display);
  }

  // Close the dropdown when clicking outside of the nav
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDropdownOpen(null);
      }
    }

    // Only add the event listener if a dropdown is open
    if (dropdownOpen !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <>
      <div className="navbar-area">
        {/* Mobile Responsive */}
        <div className="mobile-responsive-nav">
          <div className="container">
            <div className="mobile-responsive-menu mean-container">
              <div className="mean-bar">
                <a className="meanmenu-reveal" onClick={handleclick}>
                  {display ? (
                    <i className="ri-close-large-line"></i>
                  ) : (
                    <i className="ri-menu-line"></i>
                  )}
                </a>
                {display ? <MobileNav /> : <></>}
                {/* mean nav */}
              </div>
              <div className="logo">
                <Link to="/">
                  <img src="./public/photos/logo.png" alt="logo" />
                </Link>
              </div>
              <div className="others-options-for-mobile-devices">
                <ul>
                  <li>
                    <button
                      type="button"
                      className="search-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalsrc"
                      onClick={handleSearchClick}
                    >
                      <i className="ri-search-line"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Desktop Responsive */}
        <div className="desktop-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <a className="navbar-brand" href="index.html">
                <img src="./public/photos/logo.png" alt="logo" />
              </a>

              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto" ref={navRef}>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  {/* registration */}
                  <Registration
                    toggleDropdown={toggleDropdown}
                    dropdownOpen={dropdownOpen === "registration"}
                  />

                  {/* Student Support*/}
                  <StudentSupport
                    toggleDropdown={toggleDropdown}
                    dropdownOpen={dropdownOpen === "studentSupport"}
                  />
                  {/* Regional Center */}
                  <RegionalCenter
                    toggleDropdown={toggleDropdown}
                    dropdownOpen={dropdownOpen === "regionalCenter"}
                  />
                  {/* Contact us  */}
                  <li className="nav-item">
                    <a href="contact.html" className="nav-link">
                      Contact Us
                    </a>
                  </li>
                </ul>

                <div className="others-options">
                  <ul>
                    <li>
                      <Link to="/admissionDistance" className="default-btn">
                        Application form
                      </Link>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="search-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalsrc"
                        onClick={handleSearchClick}
                      >
                        <i className="ri-search-line"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export function Registration({ toggleDropdown, dropdownOpen }) {
  return (
    <li className="nav-item" onClick={() => toggleDropdown("registration")}>
      <a className="nav-link">
        Register Online
        <i className={`ri-arrow-${dropdownOpen ? "up" : "down"}-s-line`}></i>
      </a>
      {dropdownOpen && (
        <ul className="dropdown-menu">
          <li className="nav-item">
            <Link to="/admissionDistance" className="nav-link mobileDropDown">
              Fresh Admission for Distance
            </Link>
          </li>
          <li className="nav-item">
            <a href="tuition-fees.html" className="nav-link mobileDropDown">
              Fresh Admission for Online
            </a>
          </li>
          <li className="nav-item">
            <a href="courses-details.html" className="nav-link mobileDropDown">
              Re-Registration
            </a>
          </li>
          <li className="nav-item">
            <a href="courses-details.html" className="nav-link mobileDropDown">
              End-Term Exam
            </a>
          </li>
          <li className="nav-item">
            <a href="courses-details.html" className="nav-link mobileDropDown">
              Re-Evaluation
            </a>
          </li>
          <li className="nav-item">
            <a href="courses-details.html" className="nav-link mobileDropDown">
              Entrance Exam
            </a>
          </li>
          <li className="nav-item">
            <a href="courses-details.html" className="nav-link mobileDropDown">
              Convocation Degree
            </a>
          </li>
          <li className="nav-item">
            <a href="courses-details.html" className="nav-link mobileDropDown">
              Academic Counselor
            </a>
          </li>
        </ul>
      )}
    </li>
  );
}

export function StudentSupport({ toggleDropdown, dropdownOpen }) {
  return (
    <li className="nav-item" onClick={() => toggleDropdown("studentSupport")}>
      <a className="nav-link">
        Student Support
        <i className={`ri-arrow-${dropdownOpen ? "up" : "down"}-s-line`}></i>
      </a>
      {dropdownOpen && (
        <ul className="dropdown-menu">
          <li className="nav-item">
            <Link to="/StudentZone" className="nav-link mobileDropDown">
              Student Zone
            </Link>
          </li>
          <li className="nav-item">
            <a href="application.html" className="nav-link mobileDropDown">
              Student Grievance
            </a>
          </li>
          <li className="nav-item">
            <a href="our-professors.html" className="nav-link mobileDropDown">
              Downloads
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link mobileDropDown">
              Results
            </a>
          </li>
          <li className="nav-item">
            <a href="faq.html" className="nav-link mobileDropDown">
              FAQ
            </a>
          </li>
        </ul>
      )}
    </li>
  );
}

export function RegionalCenter({ toggleDropdown, dropdownOpen }) {
  return (
    <li className="nav-item" onClick={() => toggleDropdown("regionalCenter")}>
      <a className="nav-link">
        Regional Center
        <i className={`ri-arrow-${dropdownOpen ? "up" : "down"}-s-line`}></i>
      </a>
      {dropdownOpen && (
        <ul className="dropdown-menu">
          <li className="nav-item">
            <a href="events.html" className="nav-link mobileDropDown">
              Regional Center
            </a>
          </li>
          <li className="nav-item">
            <a href="event-details.html" className="nav-link mobileDropDown">
              Study Center
            </a>
          </li>
          <li className="nav-item">
            <a href="event-details.html" className="nav-link mobileDropDown">
              Operational Area
            </a>
          </li>
        </ul>
      )}
    </li>
  );
}
