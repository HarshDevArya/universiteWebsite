import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef } from "react";
import Parallax from "parallax-js"; // Assuming you're using parallax-js
import styles from "./404.module.scss";
import { Link } from "react-router-dom";
const Error404Page = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneRef.current, {
      relativeInput: true,
      hoverOnly: false,
    });

    return () => {
      parallaxInstance.destroy();
    };
  }, []);

  return (
    <div className={styles.body}>
      <nav>
        <div className={styles.menu}>
          <p className={styles.website_name}>IGNOU</p>
        </div>
      </nav>

      <section className={styles.wrapper}>
        <div className={styles.container}>
          <div id="scene" className={styles.scene} ref={sceneRef}>
            <div className={styles.circle} data-depth="1.2"></div>
            <div className={styles.one} data-depth="0.9">
              <div className={styles.content}>
                <span className={styles.piece}></span>
                <span className={styles.piece}></span>
                <span className={styles.piece}></span>
              </div>
            </div>
            <div className={styles.two} data-depth="0.60">
              <div className={styles.content}>
                <span className={styles.piece}></span>
                <span className={styles.piece}></span>
                <span className={styles.piece}></span>
              </div>
            </div>
            <div className={styles.three} data-depth="0.40">
              <div className={styles.content}>
                <span className={styles.piece}></span>
                <span className={styles.piece}></span>
                <span className={styles.piece}></span>
              </div>
            </div>
            <p className={styles.p404} data-depth="0.50">
              404
            </p>
            <p className={styles.p404} data-depth="0.10">
              404
            </p>
          </div>
          <div className={styles.text}>
            <article>
              <p>
                Uh oh! Looks like you got lost. <br />
                Go back to the homepage if you dare!
              </p>
              <Link to="/">
                <button> i dare!</button>
              </Link>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error404Page;
