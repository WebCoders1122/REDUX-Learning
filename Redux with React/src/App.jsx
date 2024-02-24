import React, { useState } from "react";
import MainHeading from "./components/small-components/MainHeading";
import SubHeading from "./components/small-components/SubHeading";
import Account from "./components/Account";
import Bonus from "./components/Bonus";

const App = () => {
  const [salary, setSalary] = useState(0);
  const [points, setPoints] = useState(0);

  return (
    <div className='container m-5'>
      <MainHeading>App</MainHeading>
      <SubHeading>Total Salary : {salary}</SubHeading>
      <SubHeading>Total Bonus : {points}</SubHeading>
      <Account
        salary={salary}
        setSalary={setSalary}></Account>
      <Bonus
        points={points}
        setPoints={setPoints}></Bonus>
    </div>
  );
};

export default App;
