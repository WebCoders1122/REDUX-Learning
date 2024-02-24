import React, { useState } from "react";
import MainHeading from "./small-components/MainHeading";
import SubHeading from "./small-components/SubHeading";
import Button from "./small-components/Button";
import { bonusIncrement, bonusDecrement } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const Bonus = () => {
  const salary = useSelector((state) => state.account.salary);
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();

  return (
    <div className='bonusContainer flex justify-center items-center flex-col p-5 m-2 border-2 border-yellow-500'>
      <MainHeading>Bonus Component</MainHeading>
      <SubHeading>Total Salary : {salary}</SubHeading>
      <SubHeading>Total Bonus : {points}</SubHeading>
      <div className='buttons'>
        <Button onClick={() => dispatch(bonusIncrement())}>Increment</Button>
        <Button onClick={() => dispatch(bonusDecrement())}>Decrement</Button>
      </div>
    </div>
  );
};

export default Bonus;
