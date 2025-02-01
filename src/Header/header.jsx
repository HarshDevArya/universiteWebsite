import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./header.css";
// In main.jsx or App.jsx
import "remixicon/fonts/remixicon.css";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Topheader({ headleclick }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Create an interval that updates the current time every second
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timerId);
  }, []);
  //   Time String
  const timeString = time
    .toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    })
    .toUpperCase(); // Convert the whole string to uppercase
  // Create a new Date object
  const todayDate = new Date();

  // Format the date as a string (e.g., "April 5, 2024")
  const dateString = todayDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <>
      <div className="top-header" onClick={headleclick}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6 text-center-sm-only">
              <ul className="header-left-content">
                <li>
                  <i className="ri-calendar-schedule-fill"></i>
                  <p className="date"> {dateString}</p>
                  <i className="ri-time-line"></i>
                  <p className="time">{timeString}</p>
                </li>
              </ul>
            </div>

            <div className="col-lg-6 col-sm-6 ">
              <div className="header-right-content text-center-sm-only">
                <div className="languages-switcher">
                  <i className="ri-global-line"></i>
                  <select>
                    <option value="1">English</option>
                    <option value="2">Hindi</option>
                    <option value="3">Tamil</option>
                  </select>
                </div>

                <div className="my-account">
                  <a href="my-account.html">
                    <i className="ri-facebook-circle-line"></i>
                  </a>
                </div>

                <div className="twitter-icon">
                  <a href="cart.html">
                    <i className="ri-twitter-x-line"></i>
                    {/* <i className="ri-shopping-cart-line"></i>
                    <span>03</span> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
