import React from "react";
import "./style.scss";

function HomeSection({ counterValue, handleIncrement, handleDecrement }) {
  return (
    <section>
      <div className="sub-header"> Home</div>

      <div className="parent-container">
        <div className="child-container">
          <div className="button-Wrapper">
            <button
              type="submit"
              onClick={counterValue >= 10 ? null : handleIncrement}
              className={counterValue >= 10 && "disable-btn"}
            >
              Add
            </button>
            <button
              type="submit"
              onClick={counterValue <= 0 ? null : handleDecrement}
              className={counterValue <= 0 && "disable-btn"}
            >
              Subtract
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
