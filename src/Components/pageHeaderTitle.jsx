/* eslint-disable react/prop-types */
import "./DistanceAdmission.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export default function PageHeaderNTitle({ displayName }) {
  return (
    <div className="page-title-area bg-27">
      <div className="container">
        <div className="page-title-content">
          <h2>{displayName}</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="active">{displayName}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
