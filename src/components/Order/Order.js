import React from "react";
import classes from "./Order.module.css";

export default ({ price, subjects, details }) => {
  const subjectsOutput = Object.keys(subjects)
    .filter((subject) => subjects[subject].quantity > 0)
    .map((subject) => (
      <span key={subject} className={classes.flower}>
        {subjects[subject].label} - {subjects[subject].quantity}
      </span>
    ));

  const detailsOutput = (
    <div className={classes.details}>
      {details
        ? details.name +
          " - " +
          details.phone +
          " - " +
          details.city +
          " - " +
          details.address
        : "No details available!"}
    </div>
  );

  return (
    <div className={classes.Order}>
      {detailsOutput}
      <div className={classes.price}>{price} som</div>
      <div className={classes.subjects}>{subjectsOutput}</div>
    </div>
  );
};
