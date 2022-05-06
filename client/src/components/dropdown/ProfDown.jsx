import React from "react";
import { Link } from "react-router-dom";
import users from "../../images/users.svg";
import Complaint from "../../images/Complaint.svg";
import logouts from "../../images/logouts.svg";
import AddBooks from "../../images/AddBooks.svg";

export default function ProfDown() {
  return (
    <ul
      className="dropdown-menu navbar-profile"
      aria-labelledby="navbarScrollingDropdown"
    >
      <li className="nav-item mb-3">
        <Link className="dropdown-item fw-bold" to="/profile">
          <img
            src={users}
            alt=""
            style={{ width: "2rem", height: "2rem" }}
            className="me-3"
          />
          Profile
        </Link>
      </li>
      <li className="nav-item mb-3">
        <Link className="dropdown-item fw-bold" to="#">
          <img
            src={AddBooks}
            alt=""
            style={{ width: "2rem", height: "2rem" }}
            className="me-3"
          />
          Add Book
        </Link>
      </li>
      <li className="nav-item mb-3">
        <Link className="dropdown-item fw-bold" to="#">
          <img
            src={Complaint}
            alt=""
            style={{ width: "2rem", height: "2rem" }}
            className="me-3"
          />
          Complain
        </Link>
      </li>
      <li>
        <hr className="dropdown-divider my-2" />
      </li>

      <li className="nav-item">
        <Link className="dropdown-item fw-bold" to="#">
          <img
            src={logouts}
            alt=""
            style={{ width: "2rem", height: "2rem" }}
            className="me-3"
          />
          Logout
        </Link>
      </li>
    </ul>
  );
}
