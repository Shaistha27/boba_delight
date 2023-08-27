import React from "react";

const Location = () => {
  return (
    <div className="parent_location">
      <h2>LOCATION</h2>
      <p>
        our dedicated team for boba connoisseurs is eager to welcome you and
        provide an exceptional experience. so, drop by our location and embark
        on a delightful journey through the world of boba. we can't wait to
        serve you!
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6936705532917!2d78.45046627386873!3d17.426482501680283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90b550b010e1%3A0x3e80ca1bc0ddd16!2sPVR%20Panjagutta%20Hyderabad!5e0!3m2!1sen!2sin!4v1690627271967!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <p>open in google maps</p>
    </div>
  );
};

export default Location;
