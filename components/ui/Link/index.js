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
        background: #000;
        color: #fff;
        text-decoration: none;
      }

      .round-link:hover svg {
        fill: #fff;
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
