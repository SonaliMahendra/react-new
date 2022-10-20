import * as actionTypes from "./ActionTypes";

let lastId = 0;

export default function reducer(state = [], action) {
  //add bug
  if (action.type === actionTypes.BUG_ADDED)
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payLoad.description,
        resolved: false,
      },
    ];
  // remove bug
  if (action.type === actionTypes.BUG_REMOVED)
    return state.filter((bug) => {
      bug.id !== action.payLoad.id;
    });

  return state;
}
