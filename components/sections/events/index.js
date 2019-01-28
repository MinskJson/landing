import Slider from "react-slick";
import { Title, FontAwesome } from "components/ui";

export default () => {
  var settings = {
    infinite: false,
    speed: 500,
    // slidesToShow: 4,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    variableWidth: true
  };

  const events = [
    {
      title: "{Minsk} JSON Meetup #1",
      description: "Первый митап сообщества {Minsk} JSON",
      image: "https://picsum.photos/300/300",
      date: "22.11.2019",
      location: "Беларусь, г. Минск, EventSpace"
    },
    {
      title: "{Minsk} JSON Meetup #2",
      description: "Второй митап сообщества {Minsk} JSON",
      image: "https://picsum.photos/300/300",
      date: "22.11.2019",
      location: "Беларусь, г. Минск, EventSpace"
    }
  ];

  return (
    <>
      <section className="section events">
        <Title>Предстоящие события</Title>
        <Slider {...settings}>
          {events.map((event, index) => (
            <div className="event" key={index}>
              <div className="event-image-container">
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <h4>{event.description}</h4>
                </div>
                <img src={event.image} alt={event.title} />
              </div>

              <p>
                <FontAwesome name="calendar-o" /> {event.date}
              </p>
              <p>
                <FontAwesome name="map-marker" /> {event.location}
              </p>
            </div>
          ))}
        </Slider>
      </section>
      <style global="true" jsx="true">{`
        .events {
        }

        .events .section-title {
          text-align: center;
        }

        .event-image-container {
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          margin-bottom: 10px;
        }

        .event-content {
          position: absolute;
          top: 20px;
        }

        .event-image-container:after {
          content: "";
          background: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.6) 50%,
              transparent 100%
            )
            no-repeat center;
          background-size: cover;
          box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.8);
          display: block;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }

        .event-content h3,
        .event-content h4 {
          z-index: 1;
          position: relative;
          color: #fff;
          padding: 0 2rem;
          line-height: 1.3;
        }

        .event-content h3 {
          font-weight: 700;
          margin-bottom: 10px;
        }

        .event p {
          margin: 10px 0;
          font-size: 0.9rem;
        }
        .slick-list,
        .slick-slider,
        .slick-track {
          position: relative;
          display: block;
        }
        .slick-loading .slick-slide,
        .slick-loading .slick-track {
          visibility: hidden;
        }
        .slick-slider {
          box-sizing: border-box;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-touch-callout: none;
          -khtml-user-select: none;
          -ms-touch-action: pan-y;
          touch-action: pan-y;
          -webkit-tap-highlight-color: transparent;
        }
        .slick-list {
          margin: 0;
          padding: 0;
        }
        .slick-list:focus {
          outline: 0;
        }
        .slick-list.dragging {
          cursor: pointer;
          cursor: hand;
        }
        .slick-slider .slick-list,
        .slick-slider .slick-track {
          -webkit-transform: translate3d(0, 0, 0);
          -moz-transform: translate3d(0, 0, 0);
          -ms-transform: translate3d(0, 0, 0);
          -o-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
        .slick-track {
          top: 0;
          left: 0;
        }
        .slick-track:after {
          clear: both;
        }
        .slick-slide {
          display: none;
          float: left;
          height: 100%;
          min-height: 1px;
          margin: 0 20px;
        }
        .slick-slide img {
          display: block;
        }
        .slick-slide.slick-loading img {
          display: none;
        }
        .slick-slide.dragging img {
          pointer-events: none;
        }
        .slick-initialized .slick-slide {
          display: block;
        }
        .slick-vertical .slick-slide {
          display: block;
          height: auto;
          border: 1px solid transparent;
        }
        .slick-arrow.slick-hidden {
          display: none;
        }
        .slick-dots,
        .slick-next,
        .slick-prev {
          position: absolute;
          display: block;
          padding: 0;
        }
        .slick-dots li button:before,
        .slick-next:before,
        .slick-prev:before {
          font-family: slick;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .slick-next,
        .slick-prev {
          font-size: 0;
          line-height: 0;
          top: 50%;
          width: 20px;
          height: 20px;
          -webkit-transform: translate(0, -50%);
          -ms-transform: translate(0, -50%);
          transform: translate(0, -50%);
          cursor: pointer;
          color: transparent;
          border: none;
          outline: 0;
          background: 0 0;
        }
        .slick-next:focus,
        .slick-next:hover,
        .slick-prev:focus,
        .slick-prev:hover {
          color: transparent;
          outline: 0;
          background: 0 0;
        }
        .slick-next:focus:before,
        .slick-next:hover:before,
        .slick-prev:focus:before,
        .slick-prev:hover:before {
          opacity: 1;
        }
        .slick-next.slick-disabled:before,
        .slick-prev.slick-disabled:before {
          opacity: 0.25;
        }
        .slick-next:before,
        .slick-prev:before {
          font-size: 20px;
          line-height: 1;
          opacity: 0.75;
          color: #fff;
        }
        .slick-prev {
          left: -25px;
        }
        .slick-next {
          right: -25px;
        }
      `}</style>
    </>
  );
};
