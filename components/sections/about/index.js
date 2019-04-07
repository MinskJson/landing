import { Triangle, Title } from "components/ui/";

export default () => (
  <>
    <section className="section about">
      <div className="about-container">
        <div className="about-content">
          <Title>О нас</Title>
          <p>
            Мы молодое сообщество о веб-разработке. Наши цели заключаются в
            создании продуктов призванных помогать молодым людям получать знания
            и изучать современные технологии. Митапы, подкасты, лайвкодинг,
            общение - это инструменты, которые мы используем для достижения
            наших целей.
          </p>
        </div>
        <div className="about-image">
          <img src="/static/images/team.jpg" alt="Наша команда" />
        </div>
      </div>
      <Triangle size={10} direction="left" />
    </section>
    <style jsx="true">{`
      .about-container {
        display: flex;
        max-width: 700px;
        margin: 80px auto 0;
      }

      .about .triangle {
        position: absolute;
        left: -20em;
        top: 50%;
        margin-top: -15em;
      }

      .about h2 {
      }

      .about-content {
        flex: 1;
      }

      .about-content {
        line-height: 20px;
      }

      .about-content .section-title {
        margin-top: 40px!important;
      }
      .about-image {
        max-width: 30%;
        border-radius: 20px;
        overflow: hidden;
      }
      .about-image img {
        max-width: 100%;
      }

      @media screen and (max-width: 768px) {
        .about-container {
          flex-direction: column;
        }

        .triangle {
          display: none;
        }
        .about-content {
          margin-bottom: 40px;
        }

        .about-image {
          max-width: 100%;
        }
      }
    `}</style>
  </>
);
