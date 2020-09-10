import React from "react";
import axios from "axios";
import CardContainer from "../card/cards";
import Filter from "../filter/filter";
import "./base.css";

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      year: [],
    };
  }

  componentDidMount = () => {
    axios
      .get(`https://api.spaceXdata.com/v3/launches?limit=100`)
      .then((response) => {
        this.setState({ data: response.data });
        console.log("response", response);
      })
      .catch(function (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      });
    this.yearArray();
  };

  onClickButton = (data) => {
    this.setState({ data: data });
  };

  yearArray = () => {
    const { year } = this.state;
    for (let i = 2006; i <= 2020; i++) {
      year.push(i);
    }
  };

  render() {
    const { data, year } = this.state;
    return (
      <div className="baseContainer1">
        <div className="filterContainer1">
          <Filter
            year={year}
            onSuccessLaunchTrue={this.onClickButton}
            onSuccessLaunchFalse={this.onClickButton}
            onSuccessfullLandingTrue={this.onClickButton}
            onSuccessfullLandingFalse={this.onClickButton}
            onFilterByYear={this.onClickButton}
          />
        </div>
        <div className="cardContainer1">
          <CardContainer data={data} />
        </div>
      </div>
    );
  }
}

export default Base;
