import { useState } from "react";
import MainHeading from "./small-components/MainHeading";
import SubHeading from "./small-components/SubHeading";
import Button from "./small-components/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  useGetAccountsQuery,
  useAddAccountMutation,
  useDeleteAccountMutation,
  useUpdateAccountMutation,
} from "../api/adminApi";

const Admin = () => {
  // const account = useSelector((state) => state.account);
  // const points = useSelector((state) => state.bonus.points);
  // const rewardPoints = useSelector((state) => state.reward.rewardPoints);
  const { data, error, isLoading, isError } = useGetAccountsQuery(); // { data, error, isLoading } are returned params and they are case sensitive
  const [addAccount, response] = useAddAccountMutation(); // returns an array like useState, response will be returned by server and like  { data, error, isLoading }
  const [deleteAccount, responseDel] = useDeleteAccountMutation();
  const [updateAccount, responseUpt] = useUpdateAccountMutation();
  // const dispatch = useDispatch();
  // const [incAmount, setIncAmount] = useState(0);
  // console.log(error.error);
  if (isLoading) {
    return (
      <div className='salaryContainer flex justify-center items-center flex-col p-5 m-2 border-2 border-yellow-500'>
        <SubHeading>Loading Data...</SubHeading>
      </div>
    );
  } else if (isError) {
    return (
      <div className='salaryContainer flex justify-center items-center flex-col p-5 m-2 border-2 border-yellow-500'>
        <SubHeading>{error.error}</SubHeading>
      </div>
    );
  } else {
    return (
      <div className='salaryContainer flex justify-center items-center flex-col p-5 m-2 border-2 border-yellow-500'>
        <MainHeading>Admin Component</MainHeading>
        <div className='flex justify-center items-center gap-5 text-center'>
          <SubHeading>
            User Accounts and Salaries:
            <br />
            {data &&
              data.map((account) => {
                return (
                  <div key={account.id}>
                    <span>{account.id} : </span>
                    <span>{account.salary}</span>
                    <Button onClick={() => deleteAccount(account.id)}>
                      Delete
                    </Button>
                    <Button
                      onClick={() =>
                        updateAccount({
                          id: account.id.toString(),
                          salary: 777,
                        })
                      }>
                      Update
                    </Button>
                    <br />
                  </div>
                );
              })}
          </SubHeading>
          {/* <SubHeading>Total Bonus : {points}</SubHeading> */}
          {/* <SubHeading>Reward Bonus : {rewardPoints}</SubHeading> */}
        </div>
        <div className='actions text-center '>
          <Button
            onClick={() =>
              addAccount({
                id: (data.length + 1).toString(),
                salary: 5400,
              })
            }>
            Add Salary
          </Button>
          {/* <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button> */}
          {/* <input
            onChange={(e) => setIncAmount(Number(e.target.value))}
            value={incAmount}
            type='number'
            className='bg-slate-200 rounded-md text-md py-1 px-3 border-2 border-yellow-500 outline-2 outline-yellow-600 w-40'
          /> */}
          {/* <Button onClick={() => dispatch(incrementByAmount(incAmount))}>
            Increment By {incAmount}
          </Button> */}
          {/* <Button onClick={() => dispatch(getUserByDB(1))}>Init Salary</Button> */}
        </div>
      </div>
    );
  }
};

export default Admin;
