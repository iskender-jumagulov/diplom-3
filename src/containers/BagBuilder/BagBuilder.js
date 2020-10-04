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
  const { subjects, price } = useSelector(state => state.builder);
  const isAuthenticated = useSelector(state => state.auth.token !== null);
  const [isOrdering, setIsOrdering] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    load(dispatch);
  }, [dispatch]);

  function startOrder() {
    if (isAuthenticated) {
      setIsOrdering(true);
    }
    else {
      history.push('/auth?checkout');
    }
  }

  let output = <Spinner />;
  if (subjects) {
    const canOrder = Object.values(subjects).reduce((canOrder, subject) => {
      return !canOrder ? subject.quantity > 1 : canOrder;
    }, false);

    output = (
      <>
        <Bag price={price} subjects={subjects} />
        <BagControls
          startOrder={startOrder}
          canOrder={canOrder}
          subjects={subjects}
        />
        <Modal show={isOrdering} hideCallback={() => setIsOrdering(false)}>
          <OrderSummary
            subjects={subject}
            finishOrder={() => history.push("/checkout")}
            cancelOrder={() => setIsOrdering(false)}
            price={price}
            />
        </Modal>
      </>
    );
  }

  return (
    <div className={classes.BagBuilder}>
      <h1>Bag builder</h1>
      {output}
    </div>
  );
}, axios);