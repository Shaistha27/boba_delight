import React from "react";

const Home = () => {
  return (
    <>
      <div className="parent1">
        <div className="container1">
          <div className="container1_child1">
            <span style={{ color: "#635045" }}>B</span>
            <span style={{ color: "#9E8258" }}>O</span>
            <span style={{ color: "#635045" }}>B</span>
            <span style={{ color: "#424955" }}>A </span>
            <span style={{ color: "#635045" }}>L</span>
            <span style={{ color: "#9E8258" }}>O</span>
            <span style={{ color: "#635045" }}>V</span>
            <span style={{ color: "#424955" }}>E</span>
            , <br />
            <span style={{ color: "#635045" }}>J</span>
            <span style={{ color: "#224787" }}>U</span>
            <span style={{ color: "#704E1B" }}>S</span>
            <span style={{ color: "#635045" }}>T </span>
            <span style={{ color: "#635045" }}>A </span>
            <span style={{ color: "#704E1B" }}>C</span>
            <span style={{ color: "#635045" }}>L</span>
            <span style={{ color: "#224787" }}>I</span>
            <span style={{ color: "#635045" }}>C</span>
            <span style={{ color: "#9E8258" }}>K </span>
            <span style={{ color: "#635045" }}>A</span>
            <span style={{ color: "#224787" }}>W</span>
            <span style={{ color: "#6C404A" }}>A</span>
            <span style={{ color: "#635045" }}>Y</span>
            <span style={{ color: "#9E8258" }}>!</span>
          </div>
          <p className="description">
            FROM CLASSIC MILK TEAS TO TRENDY FRUIT-INFUSED CONCOTIONS,
            <br /> WE ARE COMMITTED TO DELIVERING A DELIGHTFUL BOBA EXPERIENCE
            RIGHT TO YOUR DOORSTEP
          </p>
          <button
            type="button"
            className="btn btn-primary btn-lg view-menu-btn"
          >
            VIEW MENU
          </button>
        </div>
        <div>
          <img src="/images/Rectangle 43.png" alt="boba" />
          {/* <img src="/images/spill.png" alt="boba" /> */}
          {/* <img src="/images/hero_img.png" alt="boba" /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
