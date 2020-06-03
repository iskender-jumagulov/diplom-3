import React, { useState, useEffect } from "react";
import Bag from "../../components/BagBuilder/Bag/Bag";
import classes from "./BagBuilder.module.css";
import BagControls from "../../components/BagBuilder/BagControls/BagControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/BagBuilder/OrderSummary/OrderSummary";
import axios from "../../axios";
import Spinner from "../../components/UI/Spinner/Spinner";
import withAxios from "../../hoc/withAxios/withAxios";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { load } from "../../store/actions/builder";

export default withAxios(() => {
  const { subjects, price } = useSelector((state) => state.builder);
  const history = useHistory();
  const [isOrdering, setIsOrdering] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    load(dispatch);
  }, [dispatch]);

  let output = <Spinner />;
  if (subjects) {
    const canOrder = Object.values(subjects).reduce((canOrder, subject) => {
      return !canOrder ? subject.quantity > 0 : canOrder;
    }, false);

    output = (
      <>
        <Bag price={price} subjects={subjects} />
        <BagControls
          startOrder={() => setIsOrdering(true)}
          canOrder={canOrder}
          subjects={subjects}
        />
        <Modal show={isOrdering} hideCallback={() => setIsOrdering(false)}>
          <OrderSummary
            subjects={subjects}
            finishOrder={() => history.push("/checkout")}
            cancelOrder={() => setIsOrdering(false)}
            price={price}
          />
        </Modal>
      </>
    );
  }
  return <div className={classes.BagBuilder}>{output}</div>;
}, axios);
