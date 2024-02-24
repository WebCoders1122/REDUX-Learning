import React, { useState } from "react";
import MainHeading from "./small-components/MainHeading";
import SubHeading from "./small-components/SubHeading";
import Button from "./small-components/Button";

const Bonus = () => {
  const [points, setPoints] = useState(0);
  return (
    <div className='bonusContainer flex justify-center items-center flex-col p-5 m-2 border-2 border-yellow-500'>
      <MainHeading>Bonus Component</MainHeading>
      <SubHeading>Total Bonus : {points}</SubHeading>
      <div className='buttons'>
        <Button onClick={() => setPoints(points + 1)}>Increment</Button>
        <Button onClick={() => setPoints(points - 1)}>Decrement</Button>
      </div>
    </div>
  );
};

export default Bonus;
