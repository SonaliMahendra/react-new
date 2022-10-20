//1. create Reducer
//create store  --> contains the states

import store from "./Store";
import * as actionTypes from "./ActionTypes";
import { bugAdded, bugRemoved } from "./ActionCreators";

store.subscribe(() => {
  console.log("Store Updated");
});

//Add a bug
store.dispatch(bugAdded("BUG1"));

//Add another bug
store.dispatch(bugAdded("BUG2"));

//remove a bug
store.dispatch(bugRemoved(1));

console.log(store.getState());
