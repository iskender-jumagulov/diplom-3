import React from "react";
import classes from "./Order.module.css";

const CONTROLS = {
  camera: "Camera",
  flashlight: "Flashlight",
  water: "Water",
  medicinechest: "Medicinechest",
  tent: "Tent",
  flashlight: "Flashlight",
};
export default ({ price, subjects, details }) => {
  const subjectsOutput = Object.keys(subjects)
  .filter(subject => subjects[subject].quantity)
  .map((subject) => (
    <span key={subject} className={classes.subject}>
      {subjects[subject].label}({subjects[subject].quantity})
    </span>
  ));

  const detailsOutput = (
    <div className={classes.details}>
      {details
        ? details.name +
          "," +
          details.phone +
          "," +
          details.city +
          "," +
          details.address
        : "No details available!"}
    </div>
  );

  return (
    <div className={classes.Order}>
      {detailsOutput}
      
      <div className={classes.subjects}>{subjectsOutput}</div>
      <div className={classes.price}>{price} som</div>
    </div>
  );
};