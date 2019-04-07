import cn from "classnames";

const Triangle = ({ size = 20, direction = "left" }) => (
  <>
    <style global="true" jsx="true">{`
      .triangle {
        position: relative;
        background-color: #7a7a7a;
        text-align: left;
        z-index: -1;
      }
      .triangle:before,
      .triangle:after {
        content: "";
        position: absolute;
        background-color: inherit;
      }
      .triangle,
      .triangle:before,
      .triangle:after {
        width: 30em;
        height: 30em;
        border-top-right-radius: 30%;
      }

      .triangle.right {
        transform: rotate(-40deg) skewX(-40deg) scale(1, 0.866);
      }
      .triangle.left {
        transform: rotate(50deg) skewX(0deg) scale(1, 0.866);
      }
      .triangle:before {
        transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707)
          translate(0, -50%);
      }
      .triangle:after {
        transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414)
          translate(50%);
      }
    `}</style>
    <div
      className={cn("triangle", {
        right: direction === "right",
        left: direction === "left"
      })}
    />
  </>
);

export default Triangle;
