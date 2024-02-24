import { bonusInit, bonusInc, bonusDec } from "../actions";

export default function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    case bonusInit:
      return { points: action.payload.points };
    case bonusInc:
      return { points: state.points + 1 };
    case bonusDec:
      return { points: state.points - 1 };
    default:
      return state;
  }
}
