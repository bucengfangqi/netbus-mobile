import Vue from 'vue';
import axios from "axios";
export const logService=(body)=>{  //操作日志
    axios.post("/log/info", body).then(r => {});
};