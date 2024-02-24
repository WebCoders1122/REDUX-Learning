//action names
// const init = "account/initialize";
export const accFetchResolved = "account/getAccountData/initialize";
export const accFetchRejected = "account/getAccountData/reject";
export const accFetchPending = "account/getAccountData/pending";
export const inc = "account/increment";
export const dec = "account/decrement";
export const incByAmt = "account/incrementByAmount";
export const bonusInc = "bonus/Increment";
export const bonusDec = "bonus/Decrement";
export const bonusInit = "bonus/initialize";

//action creators
export const increment = () => {
  return { type: inc };
};
export const decrement = () => {
  return { type: dec };
};
export const incrementByAmount = (value) => {
  return { type: incByAmt, payload: value };
};
// const initializeUser = (value) => {
//   return { type: init, payload: value };
// };
export const getAccountDataResolved = (value) => {
  return { type: accFetchResolved, payload: value };
};
export const getAccountDataRejected = (error) => {
  return { type: accFetchRejected, error: error };
};
export const getAccountDataPending = () => {
  return { type: accFetchPending };
};

export const bonusIncrement = () => {
  return { type: bonusInc };
};
export const bonusDecrement = () => {
  return { type: bonusDec };
};
export const bonusInitialize = (value) => {
  console.log(value);
  return { type: bonusInit, payload: value };
};
