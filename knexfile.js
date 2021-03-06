require('dotenv').config();
module.exports = {
    development: {
      client: 'pg',
      connection:'postgres://idonava:idonavaPg@postgres-tourist.cysyblukbczg.eu-west-1.rds.amazonaws.com/Postgres',
      migrations: {
        directory: './db/migrations'
      },
      seeds: {
        directory: './db/seeds/dev'
      },
      useNullAsDefault: true
    },
  
    test: {
      client: 'pg',
      connection:'postgres://postgres-tourist.cysyblukbczg.eu-west-1.rds.amazonaws.com/Postgres',
      migrations: {
        directory: './db/migrations'
      },
      seeds: {
        directory: './db/seeds/test'
      },
      useNullAsDefault: true
    },
  
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      migrations: {
        directory: './db/migrations'
      },
      seeds: {
        directory: './db/seeds/production'
      },
      useNullAsDefault: true
    }
  };    