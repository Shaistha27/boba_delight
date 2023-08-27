import React, { useState } from "react";

const Menu = ({ item }) => {
  const initial_val = "+Add";
  const [cart_item, setCart_item] = useState(initial_val);
  const [cart_item2, setCart_item2] = useState(initial_val);
  const [cart_item3, setCart_item3] = useState(initial_val);
  const [cart_item4, setCart_item4] = useState(initial_val);
  const [cart_item5, setCart_item5] = useState(initial_val);
  const [cart_item6, setCart_item6] = useState(initial_val);
  const [cart_item7, setCart_item7] = useState(initial_val);
  const [cart_item8, setCart_item8] = useState(initial_val);
  const [cart_item9, setCart_item9] = useState(initial_val);

  const [a, setA] = useState(1); // Initialize 'a' with 0
  const [a2, setA2] = useState(1);
  const [a3, setA3] = useState(1);
  const [a4, setA4] = useState(1);
  const [a5, setA5] = useState(1);
  const [a6, setA6] = useState(1);
  const [a7, setA7] = useState(1);
  const [a8, setA8] = useState(1);
  const [a9, setA9] = useState(1);

  const increment = () => {
    // console.log("clicked");
    setA((prevA) => prevA + 1);
    setCart_item(`- ${a} +`);
  };
  const increment2 = () => {
    setA2((prevA2) => prevA2 + 1);
    setCart_item2(`- ${a2} +`);
  };
  const increment3 = () => {
    setA3((prevA3) => prevA3 + 1);
    setCart_item3(`- ${a3} +`);
  };
  const increment4 = () => {
    setA4((prevA4) => prevA4 + 1);
    setCart_item4(`- ${a4} +`);
  };
  const increment5 = () => {
    setA5((prevA5) => prevA5 + 1);
    setCart_item5(`- ${a5} +`);
  };
  const increment6 = () => {
    setA6((prevA6) => prevA6 + 1);
    setCart_item6(`- ${a6} +`);
  };
  const increment7 = () => {
    setA7((prevA7) => prevA7 + 1);
    setCart_item7(`- ${a7} +`);
  };
  const increment8 = () => {
    setA8((prevA8) => prevA8 + 1);
    setCart_item8(`- ${a8} +`);
  };
  const increment9 = () => {
    setA9((prevA9) => prevA9 + 1);
    setCart_item9(`- ${a9} +`);
  };

  return (
    <div className="parent_flex_menu">
      <h2>MENU</h2>
      <div className="menu_items">
        <div className="flex_menu_1">
          <div className="prod1 products">
            <div className="img1">
              <img src="images/Rectangle1.png" alt="" />
            </div>
            <p>Brown sugar milk tea with boba</p>
            <span>Rs. 219</span>
            <span> (regular)</span>
            <div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={increment}
              >
                {cart_item}
              </button>
            </div>
          </div>

          <div className="prod1 products">
            <div className="img1">
              <img src="images/Rectangle 2.png" alt="" />
            </div>
            <p>Chocolate milk tea with boba</p>
            <span>Rs. 319</span>
            <span> (regular)</span>
            <div>
              <button
                type="button"
                className="btn btn-primary bt2"
                onClick={increment2}
              >
                {cart_item2}
              </button>
            </div>
          </div>
          <div className="prod1 products">
            <div className="img1">
              <img src="images/Rectangle3.png" alt="" />
            </div>
            <p>Matcha milk tea with boba</p>
            <span>Rs. 219</span>
            <span> (regular)</span>
            <div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={increment3}
              >
                {cart_item3}
              </button>
            </div>
          </div>
        </div>

        <div className="flex_menu_2">
          <div className="prod1 products">
            <div className="img1">
              <img src="images/Rectangle4.png" alt="" />
            </div>
            <p>Mango milk tea with honey boba</p>
            <span>Rs. 395</span>
            <span> (regular)</span>
            <div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={increment4}
              >
                {cart_item4}
              </button>
            </div>
          </div>
          <div className="prod1 products">
            <div className="img1">
              <img src="images/Rectangle5.png" alt="" />
            </div>
            <p>Boba sundae</p>
            <span>Rs. 355</span>
            <span> (regular)</span>
            <div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={increment5}
              >
                {cart_item5}
              </button>
            </div>
          </div>
          <div className="prod1 products">
            <div className="img1">
              <img src="images/Rectangle6.png" alt="" />
            </div>
            <p>Strawberry milk tea with honey boba</p>
            <span>Rs. 375</span>
            <span> (regular)</span>
            <div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={increment6}
              >
                {cart_item6}
              </button>
            </div>
          </div>
        </div>

        <div className="flex_menu_2">
          <div className="prod1 products">
            <div className="img1">
              <img src="images/Rectangle7.png" alt="" />
            </div>
            <p>Milk icecream with boba</p>
            <span>Rs. 399</span>
            <span> (regular)</span>
            <div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={increment7}
              >
                {cart_item7}
              </button>
            </div>
          </div>
          <div className="prod1 products">
            <div className="img1">
              <img src="images/Rectangle8.png" alt="" />
            </div>
            <p>Taro milk tea with boba</p>
            <span>Rs. 419</span>
            <span> (regular)</span>
            <div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={increment8}
              >
                {cart_item8}
              </button>
            </div>
          </div>
          <div className="prod1 products">
            <div className="img1">
              <img src="images/Rectangle9.png" alt="" />
            </div>
            <p>Oreo brulee boba milk</p>
            <span>Rs. 394</span>
            <span> (regular)</span>
            <div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={increment9}
              >
                {cart_item9}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
