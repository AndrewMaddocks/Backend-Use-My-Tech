exports.up = function(knex) {
  return knex.schema.createTable("user", tbl => {
    tbl.increments();

    tbl
      .string("username", 128)
      .notNullable()
      .unique();
    tbl.string("password", 128).notNullable();
    tbl.string("location", 128);
    tbl
      .string("user_image")
      .defaultTo(
        "https://www.tvovermind.com/wp-content/uploads/2018/06/Napoleon-Dynamite-750x422.jpg"
      );
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("user");
};
