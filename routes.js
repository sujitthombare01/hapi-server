
const HOME_ROUTES = require("./modules/home/HomeRoutes");
const USER_ROUTES = require("./modules/users/userRoutes");

const routes = [
    ...HOME_ROUTES,
    ...USER_ROUTES
];


module.exports = routes;

