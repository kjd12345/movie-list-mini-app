/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('movies', table => {
    table.increments();
    table.string('title', 250);
    table.boolean('watched').defaultTo(false);
    table.boolean('toWatch').defaultTo(false);
    table.boolean('userAdded').defaultTo(true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('movies')
};
