import { Title } from "components/ui";

const team = [
  {
    title: "Egor",
    occupation: "Product Owner",
    image: "/static/images/egor.png",
    description:
      "Городская легенда фронтенд сообщества Человек изменивший мир докладами про воровство данных..."
  },
  {
    title: "Gleb Borisovich",
    occupation: "Software Engineer",
    image: "/static/images/gleb.jpg",
    description:
      "Лалка из минска который пишет js. Пассивный driver frontend комьюнити."
  },
  {
    title: "Aliaksei Makas",
    occupation: "Software Engineer",
    image: "/static/images/lesha.png",
    description: "Активный driver frontend комьюнити. Агрессивный маркетолог."
  },
  {
    title: "Yulia",
    occupation: "Product Manager",
    image: "/static/images/yulia.jpg",
    description:
      "Идейный вдохновитель. Человек, собравший всех в сообществе ребят вместе"
  }
];

export default () => (
  <>
    <section className="section team">
      <Title>Наша команда</Title>
      <p className="team-description">
        Программный комитет, активные деятели комьюнити и волонтеры, которые нам
        помогают
      </p>
      <div className="team-container">
        {team.map((member, index) => (
          <div className="team-member" key={index}>
            <div className="team-image-container">
              <img src={member.image} alt={member.title} />
              <p className="member-title">{member.title}</p>
              <p className="member-occupation">{member.occupation}</p>
              <p className="member-description">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <style jsx="true">
      {`
        .team .section-title {
          text-align: center;
          margin-top: 120px;
          display: block;
        }

        .team-container {
          display: grid;
          max-width: 700px;
          margin: 120px auto;
          grid-template-columns: 1fr 1fr;
          grid-column-gap: 24px;
          grid-row-gap: 24px;
          margin-top: 70px;
        }

        .team-member {
          text-align: center;
          box-sizing: border-box;
          border-radius: 5px;
        }

        .team-member:hover {
          // box-shadow: 1px 1px 5px #999;
          box-shadow: 0 0 0 2px #FFCC00, 0 2px 0 rgba(0,0,0,0.015);
        }

        .team-image-container {
          width: 100%;
          box-sizing: border-box;
          display: block;
          padding: 20px;
        }

        .team img {
          width: 120px;
          height: 120px;
          display: block;
          border-radius: 60px;
          margin: 10px auto 20px;
          transition: filter 0.2s ease-in-out;
          filter: grayscale(100%);
        }

        .team-member:hover img {
          filter: grayscale(0%);
        }

        .team-description {
          text-align: center;
        }

        .member-title {
          font-weight: 700;
          font-size: 18px;
          margin-bottom: 4px;
        }

        .member-occupation {
          margin-bottom: 16px;
        }

        .member-description {
          padding-bottom: 20px;
          line-height: 20px;
        }

        @media screen and (max-width: 768px) {
          .team .section-title {
            margin-top: 40px;
          }

          .team-container {
            grid-template-columns: 1fr;
          }
        }
      `}
    </style>
  </>
);
