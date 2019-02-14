import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION
} from "./actionTypes";

const defaultState = {
  inputValue: "",
  list: []
};

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      newState.inputValue = action.value;
      return newState;
    case ADD_TODO_ITEM:
      newState.list.push(newState.inputValue);
      newState.inputValue = "";
      return newState;
    case DELETE_TODO_ITEM:
      const index = action.index;
      newState.list.splice(index, 1);
      return newState;
    case INIT_LIST_ACTION:
      newState.list = action.data;
      return newState;
    default:
      return state;
  }
};
