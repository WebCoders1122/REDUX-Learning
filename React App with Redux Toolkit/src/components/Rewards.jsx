import MainHeading from "./small-components/MainHeading";
import SubHeading from "./small-components/SubHeading";
import Button from "./small-components/Button";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../reducers/rewardReducer";

const Reward = () => {
  const salary = useSelector((state) => state.account.salary);
  const points = useSelector((state) => state.bonus.points);
  const rewardPoints = useSelector((state) => state.reward.rewardPoints);
  const dispatch = useDispatch();

  return (
    <div className='RewardContainer flex justify-center items-center flex-col p-5 m-2 border-2 border-yellow-500'>
      <MainHeading>Reward Component</MainHeading>
      <div className='flex justify-center items-center gap-5'>
        <SubHeading>Total Salary : {salary}</SubHeading>
        <SubHeading>Total Bonus : {points}</SubHeading>
        <SubHeading>Reward Bonus : {rewardPoints}</SubHeading>
      </div>
      <div className='buttons'>
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      </div>
    </div>
  );
};

export default Reward;
