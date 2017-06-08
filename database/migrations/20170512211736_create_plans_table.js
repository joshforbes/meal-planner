exports.up = function(knex) {
  return knex.schema.createTable("plans", function(table) {
    table.increments("id").primary();
    table
      .integer("meal_id")
      .unsigned()
      .index()
      .references("id")
      .inTable("Meals");
    table.date("date");
    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("plans");
};
