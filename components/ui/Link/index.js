import Link from "next/link";
import cn from "classnames";

const LinkComponent = ({
  title,
  className,
  children,
  href,
  target,
  color = "#fff"
}) => (
  <>
    <style global="true" jsx="true">{`
      .link {
        color: #000;
        text-decoration: none;
        cursor: pointer;
        display: inline-block;
        box-shadow: 0 2px 0 rgba(0,0,0,0.015);
      }

      .link:hover {
        text-decoration: underline;
      }

      .round-link {
        border: 1px solid #000;
        border-radius: 20px;
        padding: 10px 20px;

        display: inline-flex;
        flex-direction: row;
        align-items: center;
        height: 42px;
        box-sizing: border-box;
      }

      .round-link svg {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }

      .round-link:hover {
        background: #FFCC00!important;
        color: #000!important;
        border-color: #FFCC00!important;
        text-decoration: none;
      }

      .round-link:hover svg {
        fill: #000!important;
      }

      @media screen and (max-width: 768px) {
        .round-link {
          padding: 10px;
        }
      }
    `}</style>
    <Link href={href}>
      <a title={title} target={target} className={cn("link", className)}>
        {children}
      </a>
    </Link>
  </>
);

export default LinkComponent;
