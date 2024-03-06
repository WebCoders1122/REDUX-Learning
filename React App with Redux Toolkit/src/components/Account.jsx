import { useState } from "react";
import MainHeading from "./small-components/MainHeading";
import SubHeading from "./small-components/SubHeading";
import Button from "./small-components/Button";
import {
  increment,
  decrement,
  incrementByAmount,
  getUserByDB,
  decrementByAmout,
} from "../slices/accountSlice";
import { useSelector, useDispatch } from "react-redux";

const Account = () => {
  // const salary = useSelector((state) => {
  //   state.account.salary.pending
  //     ? "Loading"
  //     : state.account.salary.error
  //     ? state.account.salary.error
  //     : state.account.salary;
  // });
  // console.log(salary);
  // const salary = useSelector((state) => state.account.salary);
  const account = useSelector((state) => state.account);
  const points = useSelector((state) => state.bonus.points);
  const rewardPoints = useSelector((state) => state.reward.rewardPoints);

  const dispatch = useDispatch();
  const [incAmount, setIncAmount] = useState(0);
  const [decAmount, setDecAmount] = useState(0);

  return (
    <div className='salaryContainer flex justify-center items-center flex-col p-5 m-2 border-2 border-yellow-500'>
      <MainHeading>Salary Component</MainHeading>
      <div className='flex justify-center items-center gap-5'>
        <SubHeading>
          Total Salary :{" "}
          {account.pending
            ? "Loading..."
            : account.error
            ? account.error.message
            : account.salary}
        </SubHeading>
        <SubHeading>Total Bonus : {points}</SubHeading>
        <SubHeading>Reward Bonus : {rewardPoints}</SubHeading>
      </div>
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
        <br />
        <input
          onChange={(e) => setDecAmount(Number(e.target.value))}
          value={decAmount}
          type='number'
          className='bg-slate-200 rounded-md text-md py-1 px-3 border-2 border-yellow-500 outline-2 outline-yellow-600 w-40'
        />
        <Button onClick={() => dispatch(decrementByAmout(decAmount))}>
          Decrement By {decAmount}
        </Button>
        <br />
        <Button onClick={() => dispatch(getUserByDB(1))}>Init Salary</Button>
      </div>
    </div>
  );
};

export default Account;
