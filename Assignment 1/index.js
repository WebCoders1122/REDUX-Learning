import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import { thunk } from "redux-thunk";

//actions
const resolve = "reducer/getPosts/resolve";
const pending = "reducer/getPosts/pending";
const reject = "reducer/getPosts/reject";
const sort = "reducer/getPosts/sort";

//action creators
const getPostsResolved = (data) => {
  return { type: resolve, payload: data };
};
const getPostsRejected = (error) => {
  return { type: reject, error: error };
};
const getPostsPending = () => {
  return { type: pending };
};
const getPostsSorted = (data) => {
  return { type: sort, payload: data };
};

//Misc functions
const sortFn = (a, b) => {
  var textA = a.title.toUpperCase();
  var textB = b.title.toUpperCase();
  return textA < textB ? -1 : textA > textB ? 1 : 0;
};

//API calls
const getPosts = async (dispatch, getState) => {
  try {
    dispatch(getPostsPending());
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?userId=1"
    );
    // let array = [...data];
    dispatch(getPostsResolved(response.data));
    dispatch(getPostsSorted(response.data));
  } catch (error) {
    dispatch(getPostsRejected(error.message));
  }
};

//store
const store = createStore(reducer, applyMiddleware(thunk));

//reducer
function reducer(state = { posts: [] }, action) {
  switch (action.type) {
    case resolve:
      console.log("Posts Loaded");
      return {
        posts: [...action.payload],
        pending: false,
      };
    case reject:
      console.log("posts fetching failed");
      return { ...state, error: action.error, pending: false };
    case pending:
      console.log("fetching Data");
      return { ...state, pending: true };
    case sort:
      console.log("sorted State");
      let payload = action.payload.sort((a, b) => sortFn(a, b));
      //   console.log(payload);
      return { posts: [...payload], pending: false };
    //   return { ...state, pending: true };
    default:
      return state;
  }
}

// console.log(store.getState());
// getPosts();
store.dispatch(getPosts);
// store.dispatch(getPostsSorted(store.getState()));
setTimeout(() => console.log(store.getState()), 2000);
