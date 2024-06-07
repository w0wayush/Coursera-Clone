import React from "react";

const AdvantageCard = (props) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img style={{ width: "50px" }} src={props.imageLink} />
        <div>
          <p>{props.p1}</p>
          <p>
            {props.p2} <br /> {props.p3} <br /> {props.p4}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvantageCard;
