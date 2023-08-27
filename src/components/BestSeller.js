import React from "react";

const BestSeller = () => {
  return (
    <>
      <h1
        style={{
          // position: "relative",
          // bottom: "-69pxpx",
          // left: "69%",
          backgroundColor: "rgba(255, 165, 0, 0.0001)",
          color: " #3d0c02",
          fontFamily: "Bebas Neue",
          // fontSize: "21px",
          wordSpacing: "3px",
          textAlign: "center",
        }}
      >
        BEST SELLER
        <hr className="small-line" />
      </h1>
      <div className="parent_bs">
        <div className="parent_bs_child1">
          {/* <h3> BEST SELLER</h3> */}
          {/* <img src="images/bs_tag.png" className="image1" alt="" best seller /> */}

          <img
            src="/images/IMG-20230721-WA0008.jpg"
            alt=""
            className="image2"
          />
        </div>
        <div className="parent_bs_child2">
          <p>
            embrace the delicious harmony of our bestselling boba drinks this
            month :
            <strong style={{ backgroundColor: "#cac0b1" }}>
              chocolate boba{" "}
            </strong>
            and
            <strong style={{ backgroundColor: "#cac0b1" }}>
              {" "}
              matcha boba{" "}
            </strong>
            . indulge your senses with the heavenly blend of rich, velvety
            chocolate and perfectly brewed tea-infused goodness.
          </p>
        </div>
      </div>
    </>
  );
};

export default BestSeller;
