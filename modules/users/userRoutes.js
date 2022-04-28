const { HTTPT_METHODS } = require("../../constants/AppConstact");
const { userCheck } = require("./userController");

const USER_ROUTES = [
    {
        method: HTTPT_METHODS.GET,
        path: '/users',
        handler: userCheck
    }
];


module.exports = USER_ROUTES;

