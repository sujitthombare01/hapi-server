
const { HTTPT_METHODS } = require("../../constants/AppConstact");
const { helloWorld } = require("./homeController");

const HOME_ROUTES = [
    {
        method: HTTPT_METHODS.GET,
        path: '/',
        handler: helloWorld
    }
];


module.exports = HOME_ROUTES;

