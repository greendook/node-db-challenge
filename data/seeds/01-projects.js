exports.seed = function (knex) {
  return knex('projects')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          projects_name: 'Complete this project',
          projects_description: 'Make this project completed as proof it works',
          projects_completed: true,
        },
        {
          projects_name: 'aaaaaa',
          projects_description: 'wasdgf',
          projects_completed: false,
        },
        {
          projects_name: 'jjjj',
          projects_description: 'aaaadafdsgdsg',
          projects_completed: false,
        },
        {
          projects_name: 'eeeeeeeeeeeee',
          projects_description: 'aaaaaaaaa',
          projects_completed: false,
        },
        {
          projects_name: 'aeiou',
          projects_description: 'blah',
          projects_completed: false,
        },
      ]);
    });
};
