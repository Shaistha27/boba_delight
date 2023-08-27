import React from "react";

const Ingredients = () => {
  return (
    <div className="parent_ing">
      <div className="heading">OUR INGREDIENTS</div>
      <div className="parent_ing_child2"> FOR BEST QUALITY</div>
      <div className="flex_parent">
        <div className="flex1">
          <div className="tapioca">
            <span>Tapioca</span>
            <img src="/images/Tapoica.png" alt="" />
            <p>
              Discover the tantalizing allure of our exquisite tapioca pearls,
              the velvety jewels that elevate every sip of our delightful boba
              creation
            </p>
          </div>

          <div className="sugar">
            <span>Sugar</span>
            <img src="/images/sugar.png" alt="" />
            <p>
              Indulge in the perfect balance of sweetness with our carefully
              crafted sugar blends, specially curated for our boba delights
            </p>
          </div>
        </div>
        <div className="flex2">
          <div className="tea">
            <span>Tea</span>
            <img src="/images/tea.png" alt="" />
            <p>
              we are proud to introduce Leaves, a collection of boba drinks that
              combines the variant flavors of freshly brewed teas
            </p>
          </div>
        </div>
        <div className="flex3">
          <div className="milk">
            <span>Milk</span>
            <img src="/images/milk.png" alt="" />
            <p>
              We source premium high-quality milk to ensure each sip is a burst
              of flavor and satisfaction
            </p>
          </div>

          <div className="brownsugar">
            <span>Brown Sugar</span>
            <img src="/images/brownsugar.png" alt="" />
            <p>
              Explore the irresistible allure of our signature Brown Sugar Boba,
              meticulously crafted to perfection
            </p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Ingredients;
