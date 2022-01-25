import React from "react";
import classNames from "classnames";
import Info from "./Info";
import "./Card.css";


const Card = (props) => {

  const main = classNames("main-card", {
    "main-card--selected": props.activate
  })
  return(
    <div className={main}>
      <div className="content">
    <Info />
      </div>
    </div>
  )
}

export default Card;