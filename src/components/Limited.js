import React from "react";

const Limited = () => {
  return (
    <div>
      <div className="ltd_ed">LIMITED EDITION [HURRY UP!]</div>
      <div className="flex_menu_2">
        <div className="prod1 products">
          <div className="img1">
            <img src="images/Rectangle10.png" alt="" />
          </div>
          <p>chocolate cake with boba</p>
          <span>Rs. 999</span>
          <span> (regular)</span>
          <div>
            <button type="button" className="btn btn-primary">
              +ADD
            </button>
          </div>
        </div>
        <div className="prod1 products">
          <div className="img1">
            <img src="images/Rectangle11.png" alt="" />
          </div>
          <p>Boba tea cupcakes (8pcs)</p>
          <span>Rs. 799</span>
          <span> (regular)</span>
          <div>
            <button type="button" className="btn btn-primary">
              +ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Limited;
