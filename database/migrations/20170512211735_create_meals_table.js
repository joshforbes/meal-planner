exports.up = function(knex) {
  return knex.schema.createTable("meals", function(table) {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("description");
    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("meals");
};
