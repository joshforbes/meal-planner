const config = require("./config");
const knex = require("knex")(config.test);

module.exports = knex;
