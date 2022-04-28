const Hapi = require('@hapi/hapi');
const serverConfig = require('./config/server-config');
const routes = require('./routes');

const init = async () => {

    const server = Hapi.server(serverConfig);

    server.route(routes)

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();