
const HOME_ROUTES = require("./modues/home/HomeRoutes");
const USER_ROUTES = require("./modues/users/userRoutes");

const routes = [
    ...HOME_ROUTES,
    ...USER_ROUTES
];


module.exports = routes;

