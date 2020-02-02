const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("renter")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("renter").insert([
        {
          username: "andrew",
          password: bcrypt.hashSync("andrew", 10)
        },
        {
          username: "renter",
          password: bcrypt.hashSync("renter", 10)
        }
      ]);
    });
};
