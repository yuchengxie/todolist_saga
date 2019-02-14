import axios from "axios";

export const getList = () => {
  axios.get("/list.json");
  //   let data = [];
  //   axios.get("/list.json").then(res => {
  //     data = res.data;
  //   });
  //   return data;
};
