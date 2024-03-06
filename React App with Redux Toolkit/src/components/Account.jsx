import { useState, useEffect } from "react";
import MainHeading from "./small-components/MainHeading";
import SubHeading from "./small-components/SubHeading";
import Button from "./small-components/Button";
// import {
//   increment,
//   decrement,
//   incrementByAmount,
//   getUserByDB,
//   decrementByAmout,
// } from "../slices/accountSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  addAsync,
  deleteAsync,
  getAsync,
  updateAsync,
} from "../slices/accountSlice";

const Account = () => {
  const account = useSelector((state) => state.account);
  const employees = useSelector((state) => state.account.employees);
  // const points = useSelector((state) => state.bonus.points);
  // const rewardPoints = useSelector((state) => state.reward.rewardPoints);

  const dispatch = useDispatch();
  // const [incAmount, setIncAmount] = useState(0);
  // const [decAmount, setDecAmount] = useState(0);

  //for initial fetch of users
  useEffect(() => {
    dispatch(getAsync());
  }, []);

  //for adding new user
  const [newUser, setNewUser] = useState({
    name: "",
    salary: 0,
  });

  //for updating user
  const [isUpdate, setIsUpdate] = useState(false);

  const handleUpdate = (id) => {
    setIsUpdate(true);
    const updateUser = employees.find((employee) => employee.id == id);
    console.log(updateUser);
    setNewUser(updateUser);
  };
  const updateUserHandler = () => {
    console.log(newUser);
    if (isUpdate) {
      dispatch(updateAsync(newUser));
      setIsUpdate(false);
      setNewUser({
        name: "",
        salary: 0,
      });
    } else {
      dispatch(addAsync(newUser));
    }
  };

  return (
    <div className='salaryContainer flex justify-center items-center flex-col p-5 m-2 border-2 border-yellow-500'>
      <MainHeading>Salary Component</MainHeading>
      <div className='flex justify-center items-center gap-5'>
        <SubHeading>
          Add User:
          <div>
            <input
              onChange={(e) =>
                setNewUser({ ...newUser, [e.target.name]: e.target.value })
              }
              value={newUser.name}
              type='text'
              name='name'
              className='bg-slate-200 rounded-md text-md py-1 px-3 border-2 border-yellow-500 outline-2 outline-yellow-600 w-40'
            />
            <input
              onChange={(e) =>
                setNewUser({ ...newUser, [e.target.name]: e.target.value })
              }
              value={newUser.salary}
              type='number'
              name='salary'
              className='bg-slate-200 rounded-md text-md py-1 px-3 border-2 border-yellow-500 outline-2 outline-yellow-600 w-40'
            />
            <Button onClick={() => updateUserHandler()}>
              {isUpdate ? "Update" : "Add New"} User
            </Button>
          </div>
          {account.pending
            ? "Loading..."
            : account.error
            ? account.error.message
            : employees.map((employee) => {
                return (
                  <div key={`employee-${employee.id}`}>
                    <p>
                      <span>
                        <b>{employee.id} :</b>
                      </span>
                      <span>
                        <b> {employee.name} :</b>
                      </span>
                      <span>
                        <b> {employee.salary}.</b>
                      </span>
                      <Button onClick={() => handleUpdate(employee.id)}>
                        Update
                      </Button>
                      <Button
                        onClick={() => dispatch(deleteAsync(employee.id))}>
                        Delete
                      </Button>
                    </p>
                  </div>
                );
              })}
        </SubHeading>
        {/* <SubHeading>Total Bonus : {points}</SubHeading> */}
        {/* <SubHeading>Reward Bonus : {rewardPoints}</SubHeading> */}
      </div>
      {/* <div className='actions text-center '>
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
      </div> */}
    </div>
  );
};

export default Account;
