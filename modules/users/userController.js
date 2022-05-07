const userCheck = (request, h) => {
    return 'Welcome in user controller !!';
}

const userRoles = (request, h) => {
    return [{
        roleName: "Admin"
    }, {
        roleName: "User"
    }];
}

module.exports = {
    userCheck,
    userRoles
}