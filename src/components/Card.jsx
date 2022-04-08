import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.imgURL} />
      </div>
      <div className="bottom">
        <Detail text={props.phone} />
        <Detail text={props.email} />
      </div>
    </div>
  );
}

export default Card;
