import React from "react";
import classes from "./OrderSummary.module.css";
import Button from "../../UI/Button/Button";

export default ({ subjects , cancelOrder, finishOrder, price }) => {
  const subjectsOutput = Object.keys(subjects)
    .filter((subject) => subjects[subject].quantity > 0)
    .map((subject) => (
      <li key={subjects}>
        {subjects[subject].label}: {subjects[subject].quantity}
      </li>
      ));

  return (
    <div className={classes.OrderSummary}>
      <h2>Congratulations! </h2>
      <p>Here is the composition of your bag</p>
      <ul>{subjectsOutput}</ul>
      <p>Total price: {price} som.</p>
      <p>Would you like to checkout? </p>
      <Button click={finishOrder} green>
        Checkout
      </Button>
      <Button click={cancelOrder} red>
        Cancel
      </Button>
    </div>
  );
};
