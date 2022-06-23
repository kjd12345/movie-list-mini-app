/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    {title: 'Mean Girls', default: true},
    {title: 'Hackers', default: true},
    {title: 'The Grey', default: true},
    {title: 'Sunshine', default: true},
    {title: 'Ex Machina', default: true}
  ]);
};
