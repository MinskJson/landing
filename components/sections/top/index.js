import React from "react";
import Link from "components/ui/Link";
import Triangle from "components/ui/Triangle";
import TelegramIcon from "../../../svgs/telegram.svg";
import Json from "components/ui/Json";

export default () => (
  <>
    <style global="true" jsx="true">{`
      .page-content-section .triangle {
        position: absolute;
        right: -10em;
        top: -220px;
        z-index: -1;
      }

      .page-content {
        max-width: 800px;
        width: 100%;
        height: calc(100vh - 82px);
        display: flex;
        justify-content: center;
        margin: 0 auto;
        flex-direction: column;
        position: relative;
        padding: 0 2rem;
      }

      .page-title {
        font-size: 2rem;
        margin-bottom: 20px;
        line-height: 40px;
      }

      .page-description {
        font-size: 3rem;
        font-weight: 700;
        font-family: Pacifico, cursive;
        margin-bottom: 20px;
      }

      .page-cta a:first-child {
        margin-right: 20px;
      }

      .page-json {
        white-space: pre;
        position: absolute;
        right: 0;
        line-height: 1.5;
      }

      @media screen and (max-width: 768px) {
        .page-json {
          display: none;
        }

        .page-content-section .triangle {
          right: -20em;
        }
      }
    `}</style>
    <section className="page-content-section">
      <Triangle size={30} direction="right" />
      <div className="page-content">
        <h2 className="page-description">{`{M} JSON`}</h2>
        <h1 className="page-title">
          Сообщество любителей <br />
          передавать JSON
        </h1>
        <div className="page-cta">
          {/* <Link href="/" className="round-link" title="Telegram">
            Шта?
          </Link> */}
          <Link
            href="https://t.me/minskjson"
            className="round-link"
            title="Присоединиться в Telegram"
            target="_blank"
          >
            <TelegramIcon /> Присоединиться в Telegram
          </Link>
        </div>
        <div className="page-json">
          <Json />
        </div>
      </div>
    </section>
  </>
);
