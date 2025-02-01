import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
import "./BannerSection.css";
import { Link } from "react-router-dom";
export default function BannerSectiion() {
  return (
    <section
      className="banner-area bg-1 jarallax"
      data-jarallax='{"speed": 0.3}'
    >
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="banner-content">
                  <span>Welcome to IGNOU</span>
                  <h1>Building Brighter Futures Through Distance Learning</h1>

                  <div className="banner-btn">
                    <Link to="events.html" className="default-btn">
                      Check event
                      <i className="ri-arrow-right-line"></i>
                    </Link>
                  </div>

                  <div className="courses-link">
                    <Link to="campus-experience.html">
                      Explore our courses
                      <i className="ri-arrow-right-line"></i>
                    </Link>
                    <Link to="/admissionDistance" className="study-online">
                      Study online
                      <i className="ri-arrow-right-line"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="banner-img bannerImageDiv">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                  >
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      ></button>
                      {/* <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="3"
                        aria-label="Slide 4"
                      ></button> */}
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src="/photos/convo-1.jpeg"
                          className="d-block w-100"
                          alt="convo-1"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="/photos/convo-2.jpeg"
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="/photos/convo-3.jpeg"
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                      {/* <div className="carousel-item">
                        <img
                          src="https://templates.envytheme.com/unco/default/assets/images/banner/banner-img-1.jpg"
                          className="d-block w-100"
                          alt="..."
                        />
                      </div> */}
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                  {/* <img
                    src="https://templates.envytheme.com/unco/default/assets/images/banner/banner-img-1.jpg"
                    alt="Image"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul className="social-link">
        <li>
          <a href="#" target="_blank">
            Facebook
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Instagram
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Twitter
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Linkedin
          </a>
        </li>
      </ul>
      <div id="jarallax-container-0" className="jarallax-container">
        <div className="backgroundIMG"></div>
      </div>
    </section>
  );
}
