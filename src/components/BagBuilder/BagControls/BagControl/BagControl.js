import React from "react";
import classes from "./BagControl.module.css";
import { useDispatch } from "react-redux";
import { remove, add } from "../../../../store/actions/builder";

export default ({ label, subject, disabled }) => {
  const dispatch = useDispatch();
  return (
    <div className={classes.BagControl}>
      <button
        className={classes.less}
        onClick={() => remove(dispatch, subject)}
        disabled={disabled}
      >
        -
      </button>
      <span className={classes.label}>{label}</span>
      <button className={classes.more} onClick={() => add(dispatch, subject)}>
        +
      </button>
    </div>
  );
};
