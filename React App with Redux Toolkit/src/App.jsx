import React from "react";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import MainHeading from "./components/small-components/MainHeading";
import SubHeading from "./components/small-components/SubHeading";
import { useSelector } from "react-redux";
import Reward from "./components/Rewards";
import Admin from "./components/admin";
const App = () => {
  // const salary = useSelector((state) => state.account.salary);
  const points = useSelector((state) => state.bonus.points);
  const rewardPoints = useSelector((state) => state.reward.rewardPoints);

  return (
    <div className='container p-3 w-screen'>
      <MainHeading>App</MainHeading>
      <div className='flex justify-center items-center gap-5'>
        {/* <SubHeading>Total Salary : {salary}</SubHeading> */}
        <SubHeading>Total Bonus : {points}</SubHeading>
        <SubHeading>Reward Bonus : {rewardPoints}</SubHeading>
      </div>
      <Account></Account>
      <Bonus></Bonus>
      <Reward></Reward>
      <Admin></Admin>
    </div>
  );
};

export default App;
