import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import axios from "axios";

//action names
// const init = "account/initialize";
const accFetchResolved = "account/getAccountData/initialize";
const accFetchRejected = "account/getAccountData/reject";
const accFetchPending = "account/getAccountData/pending";
const inc = "account/increment";
const dec = "account/decrement";
const incByAmt = "account/incrementByAmount";
const bonusInc = "bonus/Increment";
const bonusDec = "bonus/Decrement";
const bonusInit = "bonus/initialize";

//API calls
const getAccountData = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(getAccountDataPending());
      let { data } = await axios.get(`http://localhost:3000/employees/${id}`);
      dispatch(getAccountDataResolved(data));
    } catch (error) {
      dispatch(getAccountDataRejected(error.message));
    }
  };
};
const getBonusData = (id) => {
  return async (dispatch, getState) => {
    let { data } = await axios.get(`http://localhost:3000/bonus/${id}`);
    dispatch(bonusInitialize(data));
    console.log(data);
  };
};
// store
const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
  }),
  applyMiddleware(logger.default, thunk)
);

// Reducers
function accountReducer(state = { salary: 100 }, action) {
  switch (action.type) {
    case accFetchResolved:
      return { salary: action.payload.salary, pending: false };
    case accFetchRejected:
      return { ...state, error: action.error, pending: false };
    case accFetchPending:
      return { ...state, pending: true };
    case inc:
      return { salary: state.salary + 50 };
    case dec:
      return { salary: state.salary - 50 };
    case incByAmt:
      return { salary: state.salary + action.payload };
    default:
      return state;
  }
}
function bonusReducer(state = { points: 5 }, action) {
  switch (action.type) {
    case bonusInit:
      return { points: action.payload.points };
    case bonusInc:
      return { points: state.points + 5 };
    case bonusDec:
      return { points: state.points - 5 };
    default:
      return state;
  }
}

//action creators
const increment = () => {
  return { type: inc };
};
const decrement = () => {
  return { type: dec };
};
const incrementByAmount = (value) => {
  return { type: incByAmt, payload: value };
};
// const initializeUser = (value) => {
//   return { type: init, payload: value };
// };
const getAccountDataResolved = (value) => {
  return { type: accFetchResolved, payload: value };
};
const getAccountDataRejected = (error) => {
  return { type: accFetchRejected, error: error };
};
const getAccountDataPending = () => {
  return { type: accFetchPending };
};

const bonusIncrement = () => {
  return { type: bonusInc };
};
const bonusDecrement = () => {
  return { type: bonusInc };
};
const bonusInitialize = (value) => {
  console.log(value);
  return { type: bonusInit, payload: value };
};

// setInterval(() => {
//   store.dispatch(incrementByAmount(300));
// }, 2500);

// store.dispatch(getAccountData(2));
store.dispatch(getAccountData(2));
// console.log(axios.get("`http://localhost:3000/employees"));
