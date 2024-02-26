import { useState } from "react";
import MainHeading from "./small-components/MainHeading";
import SubHeading from "./small-components/SubHeading";
import Button from "./small-components/Button";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../slices/accountSlice";
import { useSelector, useDispatch } from "react-redux";

const Account = () => {
  useSelector((state) => console.log(state));
  const salary = useSelector((state) => state.account.salary);
  const points = useSelector((state) => state.bonus.points);

  const dispatch = useDispatch();
  const [incAmount, setIncAmount] = useState(0);

  return (
    <div className='salaryContainer flex justify-center items-center flex-col p-5 m-2 border-2 border-yellow-500'>
      <MainHeading>Salary Component</MainHeading>
      <SubHeading>Total Salary : {salary}</SubHeading>
      <SubHeading>Total Bonus : {points}</SubHeading>
      <div className='actions text-center '>
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
        <br />
        <input
          onChange={(e) => setIncAmount(Number(e.target.value))}
          value={incAmount}
          type='number'
          className='bg-slate-200 rounded-md text-md py-1 px-3 border-2 border-yellow-500 outline-2 outline-yellow-600 w-40'
        />
        <Button onClick={() => dispatch(incrementByAmount(incAmount))}>
          Increment By {incAmount}
        </Button>
      </div>
    </div>
  );
};

export default Account;
