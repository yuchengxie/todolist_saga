import React from "react";
import "antd/dist/antd.css";
import { Button, Input, List } from "antd";

const TodoListUI = props => {
  return (
    <div style={{ marginTop: "20px", marginLeft: "10px" }}>
      <Input
        type="text"
        placeholder="TodoList"
        style={{ width: "300px", marginRight: "10px" }}
        value={props.inputValue}
        onChange={props.handleInputChange}
      />
      <Button type="primary" onClick={props.handleAddItem}>
        添加
      </Button>
      <List
        style={{ width: "300px", marginTop: "10px" }}
        header={
          <div style={{ size: "20px", fontWeight: "bold" }}>ToDoList</div>
        }
        footer={
          <div style={{ size: "20px", fontWeight: "bold" }}>
            @CopyRight By yucheng
          </div>
        }
        size="large"
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item
            key={index}
            // onClick={index => this.props.handleDeleteItem(index)}
            onClick={props.handleDeleteItem(index)}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};

// class TodoListUI extends Component {
//   render() {
//     return (
//       <div style={{ marginTop: "20px", marginLeft: "10px" }}>
//         <Input
//           type="text"
//           placeholder="TodoList"
//           style={{ width: "300px", marginRight: "10px" }}
//           value={this.props.inputValue}
//           onChange={this.props.handleInputChange}
//         />
//         <Button type="primary" onClick={this.props.handleAddItem}>
//           添加
//         </Button>
//         <List
//           style={{ width: "300px", marginTop: "10px" }}
//           header={
//             <div style={{ size: "20px", fontWeight: "bold" }}>ToDoList</div>
//           }
//           footer={
//             <div style={{ size: "20px", fontWeight: "bold" }}>
//               @CopyRight By yucheng
//             </div>
//           }
//           size="large"
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item
//               key={index}
//               // onClick={index => this.props.handleDeleteItem(index)}
//               onClick={this.props.handleDeleteItem(index)}
//             >
//               {item}
//             </List.Item>
//           )}
//         />
//       </div>
//     );
//   }
// }
export default TodoListUI;
