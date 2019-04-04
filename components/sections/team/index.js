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
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 70px;
        }

        .team-member {
          margin: 0 10px;
          text-align: center;
        }

        .team-image-container {
          width: 275px;
          display: block;
          padding: 20px;
        }

        .team-image-container:hover {
          box-shadow: 1px 1px 5px #999;
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
        }

        .member-title,
        .member-occupation {
          margin-bottom: 10px;
        }

        .member-description {
          padding-bottom: 20px;
          line-height: 20px;
        }

        @media screen and (max-width: 768px) {
          .team .section-title {
            margin-top: 40px;
          }
        }
      `}
    </style>
  </>
);
