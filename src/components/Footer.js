import React from "react";

const Footer = () => {
  return (
    <>
      <div className="parent_footer">
        <div className="section1">
          <h2>THE COCO CAFE & BOBA</h2>
          <hr /> <span>EVERY SIP COUNTS</span> <hr />
        </div>
        <div className="section2">
          <h3>Navigation</h3>
          <p>About us</p>
          <p>Menu</p>
          <p>Location</p>
        </div>

        <div className="section2">
          <h3>Contacts</h3>
          {/* <img src="images/call_icon.png" alt="" /> */}
          <p>
            <i
              className="fa-solid fa-phone fa-lg"
              style={{ marginRight: "4px" }}
            ></i>
            9967xxxxxx
          </p>
          <p>
            <i
              className="fa-solid fa-envelope fa-lg"
              style={{ marginRight: "4px" }}
            ></i>
            tcbb@gmail.com
          </p>
          <i
            className="fa-brands fa-instagram fa-lg"
            style={{ marginRight: "8px" }}
          ></i>
          <i className="fa-brands fa-square-facebook fa-lg"></i>

          <img src="images/meta_icon" alt="" />
          <img src="images/insta_icon" alt="" />
        </div>

        <div className="section2">
          <h3>Location</h3>
          <p>
            {" "}
            <i
              className="fa-solid fa-location-dot fa-lg"
              style={{ marginRight: "4px" }}
            ></i>
            Punjagutta, PVR
          </p>
          <p>
            <i
              className="fa-solid fa-clock fa-lg"
              style={{ marginRight: "4px" }}
            ></i>
            9:00 am - 11:00 pm
          </p>

          <img src="images/meta_icon" alt="" />
          <img src="images/insta_icon" alt="" />
        </div>
      </div>
      <div className="footer2">2023 &copy; All Rights Reserved</div>
    </>
  );
};

export default Footer;
