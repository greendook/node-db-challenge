// Update with your config settings.
// this is setting the development
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/projects.db3',
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    useNullAsDefault: true,
  },
};
