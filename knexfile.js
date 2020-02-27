// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DB_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations"
    }
  },

  testing: {
    client: "pg",
    connection: process.env.DB_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations"
    }
  }
};
