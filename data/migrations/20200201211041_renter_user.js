exports.up = function(knex) {
  return knex.schema.createTable("renter", tbl => {
    tbl.increments();

    tbl
      .string("username", 128)
      .notNullable()
      .unique();
    tbl.string("password", 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("renter");
};
