import Vue from 'vue';

export const logService = (body) => { //操作日志
    Vue.http.post("/log/info", body).then(r => {});
};