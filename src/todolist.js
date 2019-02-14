import React, { Component } from "react";
import store from "./store";
import TodoListUI from "./TodoListUI";

import {
  getChangeInputValue,
  getAddTodoItem,
  getDeleteTodoItem,
  getTodoList
} from "./store/actionCreators";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleDeleteItem={index => this.handleDeleteItem.bind(this, index)}
        handleAddItem={this.handleAddItem}
      />
    );
  }

  componentDidMount() {
    const action = getTodoList();
    store.dispatch(action);

    // axios.get("/list.json").then(res => {
    //   const action = getInitListAction(res.data);
    //   store.dispatch(action);
    // });
    // console.log(getToDoList);
    // const action = getToDoList();
    // store.dispatch(action);
    // getToDoList();
    // axios.get("/list.json").then(res => {
    //   console.log(res.data);
    //   const action = getInitListAction(res.data);
    //   store.dispatch(action);
    // });
    // Promise(getList()).then(res => console.log(res.data));
    // this.setState({
    //   list: list
    // });
  }

  handleInputChange(e) {
    const action = getChangeInputValue(e.target.value);
    store.dispatch(action);
  }

  handleAddItem() {
    const action = getAddTodoItem();
    store.dispatch(action);
  }

  handleDeleteItem(index) {
    const action = getDeleteTodoItem(index);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }
}
export default TodoList;
