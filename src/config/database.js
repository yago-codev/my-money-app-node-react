const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // atribuindo  a API de Promises do Node na parte de Promise do Mongo

module.exports = mongoose.connect('mongodb://localhost/mymoney');