import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION,
  GET_TODO_LIST
} from "./actionTypes";

export const getChangeInputValue = value => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddTodoItem = () => ({
  type: ADD_TODO_ITEM
});

export const getDeleteTodoItem = index => ({
  type: DELETE_TODO_ITEM,
  index
});

export const getInitListAction = data => ({
  type: INIT_LIST_ACTION,
  data
});

export const getTodoList = () => ({
  type: GET_TODO_LIST
});

//函数式action
// export const getToDoList = () => {
//   return dispatch => {
//     axios.get("/list.json").then(res => {
//       const action = getInitListAction(res.data);
//       dispatch(action);
//     });
//   };
// };
