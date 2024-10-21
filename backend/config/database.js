const path = require('path');
const config = require('./index');

module.exports = {
  development: {
    storage: path.resolve(__dirname, 'backend/db/dev.db'), // Adjusted path for SQLite database
    dialect: "sqlite",
    seederStorage: "sequelize",
    logQueryParameters: true,
    typeValidation: true,
    seedersPath: path.resolve(__dirname, '../db/seeders') // Seeders path, correct relative path
  },

  production: {
    use_env_variable: 'DATABASE_URL', // Uses an environment variable for production DB URL
    dialect: 'postgres',
    seederStorage: 'sequelize',
    seedersPath: path.resolve(__dirname, '../db/seeders'), // Seeders path for production
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // Necessary for connecting to SSL-secured Postgres
      }
    },
    define: {
      schema: process.env.SCHEMA // Uses environment variable for schema name
    }
  }
};
