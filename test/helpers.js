const fs = require("fs");
const config = require("../database/config");
const knex = require("knex")(config.test);

const migrate = async () => {
  await knex.migrate.latest();
};

const rollback = async () => {
  await knex.migrate.rollback();
};

const dropDatabase = () => {
  fs.unlink("test/test.db", () => {});
};

module.exports = { migrate, rollback, dropDatabase };
