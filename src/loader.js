const server = require('./config/server'); // importando configs básicas do servidor (express e body-parser)
require('./config/database'); // importando a conexão com o mongo
require('./config/routes')(server);