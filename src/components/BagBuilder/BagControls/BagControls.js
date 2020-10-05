import React from "react";
import classes from "./BagControls.module.css";
import BagControl from "./BagControl/BagControl";
import Button from "../../UI/Button/Button";

export default ({ canOrder, subjects, startOrder }) => {
  const controlsOutput = Object.keys(subjects).map((subject) => (
    <BagControl
    key={subject}
    subject={subject}
    label={subjects[subject].label}
    disabled={subjects[subject].quantity === 0}
    />
  ));

  return (
    <div className={classes.BagControls}>
      {controlsOutput}
      <Button click={startOrder} enabled={canOrder}>
        Order
      </Button>
    </div>
  );
};
