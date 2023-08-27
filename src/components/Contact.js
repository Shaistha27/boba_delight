import React from "react";

const Contact = () => {
  return (
    <div className="parent_contact">
      <h2>CONTACT US</h2>
      <p>we would love to hear from you!</p>
      <div className="flex_contact">
        <div className="form">
          <form action="https://formspree.io/f/xpzgqqnv" method="POST">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter email address"
                name="email"
                required
                autoComplete="off"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                write your review here
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="text"
                required
                autoComplete="off"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        <div className="contact_img">
          <img src="images/Rectangle12.png" alt="" />
        </div>
      </div>
      <div className="socialmedia">
        <img src="images/insta.png" alt="" />
        <img src="images/pinterest.png" alt="" />
        <img src="images/meta.png" alt="" />
      </div>
    </div>
  );
};

export default Contact;
