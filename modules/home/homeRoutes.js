
const { HTTPT_METHODS,CONTEXT_PATH } = require("../../constants/AppConstact");
const { helloWorld } = require("./homeController");

const HOME_ROUTES = [
    {
        method: HTTPT_METHODS.GET,
        path: `${CONTEXT_PATH}/`,
        handler: helloWorld
    }
];


module.exports = HOME_ROUTES;

