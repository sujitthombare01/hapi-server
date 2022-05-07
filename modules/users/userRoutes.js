const { HTTPT_METHODS, CONTEXT_PATH } = require("../../constants/AppConstact");
const { userCheck, userRoles } = require("./userController");

const USER_ROUTES = [
    {
        method: HTTPT_METHODS.GET,
        path: `${CONTEXT_PATH}/users`,
        handler: userCheck
    },
    {
        method: HTTPT_METHODS.GET,
        path: `${CONTEXT_PATH}/users/roles`,
        handler: userRoles
    }
];


module.exports = USER_ROUTES;

