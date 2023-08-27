import React from "react";

const Navbar = () => {
  return (
    <div className="parent_nav">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item home">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  style={{ color: "#965a3e" }}
                >
                  home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={{ color: "#965a3e" }}>
                  menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={{ color: "#965a3e" }}>
                  location
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={{ color: "#965a3e" }}>
                  Contact
                </a>
              </li>
            </ul>
            <div
              style={{
                textAlign: "center",
                margin: "auto",
                fontFamily: "Bebas Neue",
              }}
            >
              <div
                className="heading conatiner fs-2 nav_title"
                style={{ color: "#4A2C14" }}
              >
                THE COCO CAFE AND BOBA
                <div>
                  <hr /> <span>EVERY SIP COUNTS</span> <hr />
                </div>
              </div>
            </div>
            <form className="d-flex" role="search" style={{ color: "#965a3e" }}>
              <input
                className="form-control me-2"
                id="searchbar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <ul style={{ listStyle: "none", color: "#965a3e", margin: "0px" }}>
              <li className="nav-item">
                <a className="nav-link cart" href="/">
                  <i className="fa-solid fa-cart-shopping fa-sm"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
