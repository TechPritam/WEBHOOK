const { Sequelize } = require("sequelize");
const connectionString = `postgres://postgres.cjmxpwvoflsdijavpiyr:3edfghu876tgx2@A@aws-0-ap-south-1.pooler.supabase.com:5432/postgres`;

// Database connection string

// Initialize Sequelize instance with URI connection string
const sequelize = new Sequelize(connectionString);

module.exports = sequelize;
