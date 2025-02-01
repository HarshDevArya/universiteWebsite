import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./nav.css";
import { Registration, StudentSupport, RegionalCenter } from "./nav";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function MobileNav() {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (dropdownId) => {
    if (dropdownOpen === dropdownId) {
      setDropdownOpen(null); // If the same dropdown is clicked, close it
    } else {
      setDropdownOpen(dropdownId); // Open the clicked dropdown and close others
    }
  };
  return (
    <>
      <nav className="mean-nav ">
        <ul className="navbar-nav m-auto">
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
          <li className="nav-item">
            <a href="contact.html" className="nav-link">
              Contact
            </a>
          </li>
        </ul>

        <div className="others-options mt-2 ">
          <ul>
            <li className="d-flex justify-content-center">
              <Link to="/admissionDistance" className="default-btn">
                Application form
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
