import Link from "next/link";
import cn from "classnames";

const LinkComponent = ({ title, className, children, href }) => (
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
      }

      .round-link:hover {
        background: #000;
        color: #fff;
        text-decoration: none;
      }
    `}</style>
    <Link href={href}>
      <a title={title} className={cn("link", className)}>
        {children}
      </a>
    </Link>
  </>
);

export default LinkComponent;
