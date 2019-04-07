import React from "react";
import cn from "classnames";

const MenuButton = ({ isActive, onClick, className }) => (
  <>
    <style jsx="true">{`
      button {
        background: transparent;
        border: 0;
      }
      button .line {
        width: 40px;
        height: 4px;
        background-color: #000;
        display: block;
        margin: 6px auto;
        transition: all 0.3s ease-in-out;
      }
      button.isActive .line:nth-child(2) {
        opacity: 0;
      }
      button.isActive .line:nth-child(1) {
        transform: translateY(10px) rotate(45deg);
      }

      button.isActive .line:nth-child(3) {
        transform: translateY(-10px) rotate(-45deg);
      }
    `}</style>
    <button
      type="button"
      onClick={onClick}
      className={cn(
        {
          isActive: isActive
        },
        className
      )}
    >
      <span className="line" />
      <span className="line" />
      <span className="line" />
    </button>
  </>
);

export default MenuButton;
