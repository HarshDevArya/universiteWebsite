import PageHeaderNTitle from "./pageHeaderTitle";
import "bootstrap/dist/css/bootstrap.min.css";
import "./StudentZone.css";
import swal from "sweetalert";
import axios from "axios";
import { useEffect, useState } from "react";
export default function StudentZone() {
  const [displayName, setDisplayName] = useState("Log In");
  useEffect(() => {
    setDisplayName("Log in");
    return () => {
      setDisplayName("");
    };
  }, []);

  function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission behavior

    const formData = new FormData(e.target);
    const data = {
      email: formData.get("email"), // Again, assuming 'name' is meant to be the email field
      password: formData.get("password"),
    };

    axios
      .post("http://localhost:3000/login", data)
      .then((response) => {
        console.log("Success:", response.data);
        swal("Login Successful!", "You are logged in.", "success");
      })
      .catch((error) => {
        console.error("Error:", error);
        swal("Login Failed", "Check your credentials and try again.", "error");
      });
  }
  return (
    <>
      <PageHeaderNTitle displayName={displayName} />
      <section className="user-area ptb-100">
        <div className="container">
          <div className="user-form-content max-width-600">
            <form className="user-form" onSubmit={handleSubmit}>
              <h3>Log in to your account</h3>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" type="email" name="email" />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="login-action">
                    <span className="log-rem">
                      <input id="remember-2" type="checkbox" />
                      <label htmlFor="remember-2">Keep me logged in</label>
                    </span>

                    <span className="forgot-login">
                      <a href="#">Forgot your password?</a>
                    </span>
                  </div>
                </div>

                <div className="col-12">
                  <button className="default-btn" type="submit">
                    Log in
                  </button>
                </div>

                <div className="col-12">
                  <p className="create">
                    Don’t have an account? <a href="register.html">create</a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
