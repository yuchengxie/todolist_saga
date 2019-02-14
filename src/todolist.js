import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "./store";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <div style={{ marginTop: "20px", marginLeft: "10px" }}>
        <Input
          type="text"
          placeholder="TodoList"
          style={{ width: "300px", marginRight: "10px" }}
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <Button type="primary" onClick={this.handleAddItem}>
          按钮
        </Button>
        <Button type="danger" onClick={this.handleDeleteItem}>
          删除
        </Button>
        <List
          style={{ width: "300px", marginTop: "10px" }}
          header={
            <div style={{ size: "20px", fontWeight: "bold" }}>ToDoList</div>
          }
          footer={<div>This is footer</div>}
          size="large"
          bordered
          dataSource={this.state.list}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    );
  }

  handleInputChange(e) {
    const action = {
      type: "change_input_value",
      value: e.target.value
    };
    store.dispatch(action);
  }

  handleAddItem() {
    const action = {
      type: "add_todo_item"
    };
    store.dispatch(action);
  }

  handleDeleteItem() {
    console.log("delete");
  }

  handleStoreChange() {
    this.setState(store.getState());
  }
}
// export default connect()(TodoList);
export default TodoList;
