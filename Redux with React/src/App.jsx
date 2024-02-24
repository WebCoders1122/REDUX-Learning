import React from "react";
import MainHeading from "./components/small-components/MainHeading";
import SubHeading from "./components/small-components/SubHeading";
import Account from "./components/Account";
import Bonus from "./components/Bonus";

const App = () => {
  return (
    <div className='container m-5'>
      <MainHeading>App</MainHeading>
      <SubHeading>Total Salary : </SubHeading>
      <SubHeading>Total Bonus : </SubHeading>
      <Account></Account>
      <Bonus></Bonus>
    </div>
  );
};

export default App;
