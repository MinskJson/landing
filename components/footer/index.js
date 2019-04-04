import React from "react";
import TelegramIcon from "../../svgs/telegram.svg";
import Link from "../ui/Link";

export default () => (
  <>
    <footer className="section">
      <p>&copy; 2019 {"{Minsk} JSON"}</p>
      <Link
        href="https://t.me/minskjson"
        className="round-link"
        title="Присоединиться в Telegram"
        target="_blank"
      >
        <TelegramIcon />
        Telegram
      </Link>
    </footer>
    <style jsx="true">
      {`
        footer.section {
          background: #7a7a7a;
          padding: 30px 2rem;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }

        footer p {
          margin-right: 30px;
        }

        footer .round-link {
          color: #fff;
          border-color: #fff;
        }

        footer .round-link svg {
          fill: #fff;
        }

        footer .round-link:hover {
          border-color: #000;
        }

        @media screen and (max-width: 768px) {
          footer.section {
            flex-direction: column;
          }

          footer p {
            margin: 0 0 20px;
          }
        }
      `}
    </style>
  </>
);
