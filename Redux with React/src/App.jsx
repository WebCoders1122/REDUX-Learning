import React, { useState } from "react";
import MainHeading from "./components/small-components/MainHeading";
import SubHeading from "./components/small-components/SubHeading";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import { useSelector } from "react-redux";

const App = () => {
  const salary = useSelector((state) => state.account.salary);
  const points = useSelector((state) => state.bonus.points);

  return (
    <div className='container p-3 w-screen'>
      <MainHeading>App</MainHeading>
      <SubHeading>Total Salary : {salary}</SubHeading>
      <SubHeading>Total Bonus : {points}</SubHeading>
      <Account></Account>
      <Bonus></Bonus>
    </div>
  );
};

export default App;
