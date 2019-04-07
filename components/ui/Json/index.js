import React from "react";
import axios from "axios";

export default class Json extends React.Component {
  state = {
    json: {}
  };

  componentWillMount() {
    const self = this;

    // axios
    //   .get("http://api.open-notify.org/astros.json")
      new Promise((res) => res()).then(function(response) {
        self.setState({
          json: {"message": "success", "number": 6, "people": [{"craft": "ISS", "name": "Oleg Kononenko"}, {"craft": "ISS", "name": "David Saint-Jacques"}, {"craft": "ISS", "name": "Anne McClain"}, {"craft": "ISS", "name": "Alexey Ovchinin"}, {"craft": "ISS", "name": "Nick Hague"}, {"craft": "ISS", "name": "Christina Koch"}]}
        });
      })
      .catch(function(error) {
        self.setState({
          json: {
            people: [
              {
                name: "Oleg Kononenko",
                craft: "ISS"
              },
              {
                name: "David Saint-Jacques",
                craft: "ISS"
              },
              {
                name: "Anne McClain",
                craft: "ISS"
              }
            ],
            number: 3,
            message: "success"
          }
        });
      });
  }

  render() {
    return JSON.stringify(this.state.json, null, 4);
  }
}
