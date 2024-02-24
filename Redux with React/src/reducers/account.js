import {
  accFetchResolved,
  accFetchRejected,
  accFetchPending,
  inc,
  dec,
  incByAmt,
} from "../actions";

export default function accountReducer(state = { salary: 1 }, action) {
  switch (action.type) {
    case accFetchResolved:
      return { salary: action.payload.salary, pending: false };
    case accFetchRejected:
      return { ...state, error: action.error, pending: false };
    case accFetchPending:
      return { ...state, pending: true };
    case inc:
      return { salary: state.salary + 1 };
    case dec:
      return { salary: state.salary - 1 };
    case incByAmt:
      return { salary: state.salary + action.payload };
    default:
      return state;
  }
}
