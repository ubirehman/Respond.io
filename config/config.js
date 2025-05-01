module.exports = {
    development: {
      username: "root",
      password: "root",
      database: "db",
      host: "127.0.0.1",
      dialect: "mysql"
    },
    test: {
      username: "root",
      password: null,
      database: "respondio_test",
      host: "127.0.0.1",
      dialect: "mysql"
    },
    production: {
      username: "root",
      password: null,
      database: "respondio_production",
      host: "127.0.0.1",
      dialect: "mysql"
    },
};