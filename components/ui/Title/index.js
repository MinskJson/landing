import cn from "classnames";

export default ({ children, className }) => (
  <>
    <style global="true" jsx="true">{`
      .section-title {
        font-size: 2rem;
        font-weight: 700;
        margin-top: 180px!important;
        margin-bottom: 40px;
        font-family: Pacifico, cursive;
      }
    `}</style>
    <h2 className={cn("section-title", className)}>{children}</h2>
  </>
);
