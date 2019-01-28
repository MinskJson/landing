import { Triangle, Title } from "components/ui/";

export default () => (
  <>
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
      .about-image {
        max-width: 30%;
        border-radius: 20px;
        overflow: hidden;
      }
      .about-image img {
        max-width: 100%;
      }
    `}</style>
    <section className="section about">
      <div className="about-container">
        <div className="about-content">
          <Title>О нас</Title>
          <p>Мы молодое сообщество о веб-разработке. </p>
        </div>
        <div className="about-image">
          <img src="/static/images/team.jpg" alt="Наша команда" />
        </div>
      </div>
      <Triangle size={10} direction="left" />
    </section>
  </>
);
