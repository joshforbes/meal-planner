require("dotenv").config();

module.exports = {
  test: {
    client: "sqlite3",
    connection: {
      filename: "test/test.db"
    },
    migrations: {
      tableName: "migrations",
      directory: `${__dirname}/migrations`
    },
    useNullAsDefault: true
  },
  development: {
    client: "mysql",
    connection: {
      host: process.env.DB_HOST || "127.0.0.1",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "password",
      database: process.env.DB_DATABASE || "database",
      charset: "utf8"
    },
    migrations: {
      tableName: "migrations",
      directory: `${__dirname}/../database/migrations`
    }
  }
};
