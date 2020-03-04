import Vue from "vue";

import VueResource from "vue-resource";

Vue.use(VueResource);
Vue.http.interceptors.push(function (request, next) {
    request.url = '/netbus' + request.url
    let tokenValue = sessionStorage.getItem('token') || "null"
    request.headers.set('AccessToken', tokenValue)
    // ...
    // 请求发送前的处理逻辑
    // ...
    next(function (response) {
        console.log(response);
        
        // ...
        // 请求发送后的处理逻辑
        // ...
        // 根据请求的状态，response参数会返回给successCallback或errorCallback
        return response
    })
})
