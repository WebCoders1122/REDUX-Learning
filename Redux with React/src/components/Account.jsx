import React, { useState } from "react";
import MainHeading from "./small-components/MainHeading";
import SubHeading from "./small-components/SubHeading";
import Button from "./small-components/Button";

const Account = () => {
  const [salary, setSalary] = useState(0);
  const [incAmount, setIncAmount] = useState(0);

  return (
    <div className='salaryContainer flex justify-center items-center flex-col p-5 m-2 border-2 border-yellow-500'>
      <MainHeading>Salary Component</MainHeading>
      <SubHeading>Total Salary : {salary}</SubHeading>
      <div className='actions text-center '>
        <Button onClick={() => setSalary(salary + 1)}>Increment</Button>
        <Button onClick={() => setSalary(salary - 1)}>Decrement</Button>
        <br />
        <input
          onChange={(e) => setIncAmount(Number(e.target.value))}
          type='number'
          className='bg-slate-200 rounded-md text-md py-1 px-3 border-2 border-yellow-500 outline-2 outline-yellow-600 w-40'
        />
        <Button onClick={() => setSalary(salary + incAmount)}>
          Increment By {incAmount}
        </Button>
      </div>
    </div>
  );
};

export default Account;
