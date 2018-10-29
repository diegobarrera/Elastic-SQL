module.exports = {
  development: {
    username: "root",
    password: "password",
    database: "database",
    host: "127.0.0.1",
    dialect: "sqlite",
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    storage: './database.sqlite'
  },
  test: {
    username: "root",
    password: "password",
    database: "database",
    host: "127.0.0.1",
    dialect: "sqlite",
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    storage: './database.sqlite'
  },
  production: {
    username: "root",
    password: "password",
    database: "database",
    host: "127.0.0.1",
    dialect: "sqlite",
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    storage: './database.sqlite'
  }
}