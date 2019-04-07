import Link from "next/link";

const LogotypeComponent = ({ title, className, children }) => (
  <>
    <style jsx="true">{`
      .logotype {
        font-family: Pacifico, cursive;
        color: #000;
        text-decoration: none;
        font-size: 2rem;
      }
    `}</style>
    <Link href="/">
      <a className="logotype" title="На главную страницу">{`{M}`}</a>
    </Link>
  </>
);

export default LogotypeComponent;
