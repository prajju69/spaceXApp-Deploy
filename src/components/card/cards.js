import React from "react";
import "./cards.css";

const cards = ({ data }) => {
  return (
    <div className="mainCardContainer">
      {data.length > 0 ? (
        data.map((item, i) => {
          return (
            <div key={item.flight_number} className="CardContainer">
              <img
                className="cardImage"
                src={item.links.mission_patch_small}
                alt="a card with details"
              />
              <div className="cardTitle">{`${item.mission_name} #${item.flight_number}`}</div>
              <div>
                <b>Mission Ids</b>
                <li className="secondText">list Mission</li>
              </div>
              <div>
                <b>Launch Year:</b>{" "}
                <span className="secondText">{item.launch_year}</span>
              </div>
              <div>
                <b>Successful Launch:</b>{" "}
                <span className="secondText">
                  {item.launch_success ? "True" : "False"}
                </span>
              </div>
              <div>
                <b>Successful Landing:</b>{" "}
                <span className="secondText">
                  {item.rocket.first_stage.cores[0].land_success
                    ? "True"
                    : "False"}
                </span>
              </div>
            </div>
          );
        })
      ) : (
        <div className="noData">No Data Available</div>
      )}
    </div>
  );
};

export default cards;
