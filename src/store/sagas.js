import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import { GET_TODO_LIST } from "./actionTypes";
import { getInitListAction } from "./actionCreators";

function* mySaga() {
  yield takeEvery(GET_TODO_LIST, getTodoList);
}
function* getTodoList(action) {
  try {
    const res = yield axios.get("./list.json");
    const action = getInitListAction(res.data);
    yield put(action);
  } catch (e) {
    console.log("list.json 网络请求失败");
  }
}

export default mySaga;
