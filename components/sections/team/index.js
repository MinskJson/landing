import { Title } from "components/ui";

const team = [
  {
    title: "Egor",
    occupation: "Occupation #1",
    image: "/static/images/egor.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet perspiciatis repudiandae commodi exercitationem fugiat"
  },
  {
    title: "Lesia",
    occupation: "Occupation #2",
    image: "/static/images/lesia.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet perspiciatis repudiandae commodi exercitationem fugiat",
  },
  {
    title: "Aleksey",
    occupation: "Occupation #3",
    image: "/static/images/lesha.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet perspiciatis repudiandae commodi exercitationem fugiat",
  },
  {
    title: "Valya",
    occupation: "Occupation #4",
    image: "/static/images/valya.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet perspiciatis repudiandae commodi exercitationem fugiat",
  },

];

export default () => (
  <>

    <section className="section team">
      <Title>Наша команда</Title>
      <h2>Программный комитет и волонтеры, которые нам помогают</h2>
      <div className="team-container">
      {team.map((member, index) => (
            <div className="team-member" key={index}>
              <div className="team-image-container">
                <img src={member.image} alt={member.title} />
                <h3>{member.title}</h3>
                <h4>{member.occupation}</h4>
                {member.description}
              </div>
            </div>
          ))}
          </div>
    </section>
    <style jsx="true">{`

      .team .section-title {
        text-align: center;
        margin-top: 120px;
        display: block;
      }
      
      .team-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      
      .team-member {
        margin: 70px 0;
        text-align: center;
      }

      .team-image-container {
        width: 275px;
        height: 440px;
        display: block;
        padding-top: 20px;
      }

      .team-image-container:hover {
        box-shadow: 1px 1px 5px #999;
      }

      .team img {
        width: 120px;
        height: 120px;
        display: block;
        border-radius: 60px;
        margin: 10px auto;
        transition: filter .2s ease-in-out;
        filter: grayscale(100%);
      }

      .team img:hover {
        filter: grayscale(0%);
      }

      h2 {
        text-align: center;
      }

      h3, h4 {
        margin-bottom: 10px;
      }
        
    `}
    </style>
  </>
);

