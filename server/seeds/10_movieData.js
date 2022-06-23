/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    {title: 'Mean Girls', userAdded: false},
    {title: 'Hackers', userAdded: false},
    {title: 'The Grey', userAdded: false},
    {title: 'Sunshine', userAdded: false},
    {title: 'Ex Machina', userAdded: false}
  ]);
};
