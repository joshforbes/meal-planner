process.env.NODE_ENV = "test";
require("dotenv").config();
const { migrate, rollback, dropDatabase } = require("./helpers");
const { before, beforeEach, after } = require("mocha");

before(async () => await migrate());

beforeEach(async () => {
  await rollback();
  await migrate();
});

after(async () => await dropDatabase());
