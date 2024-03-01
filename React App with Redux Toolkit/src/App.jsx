import React from "react";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import MainHeading from "./components/small-components/MainHeading";
import SubHeading from "./components/small-components/SubHeading";
import { useSelector } from "react-redux";
import Reward from "./components/Rewards";
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
      <Reward></Reward>
    </div>
  );
};

export default App;
