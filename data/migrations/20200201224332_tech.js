exports.up = function(knex) {
  return knex.schema
    .createTable("tech", tbl => {
      tbl.increments();
      tbl.string("name").notNullable();
      tbl.string("description");
      tbl.string("price");
      tbl.string("rented").defaultTo(false);
      tbl
        .string("owner_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("user")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("rented_tech", tbl => {
      tbl.increments();
      tbl.string("returned").defaultTo(false);
      tbl
        .string("renter_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("user")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .string("tech_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("tech")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("rented_tech").dropTableIfExists("tech");
};
