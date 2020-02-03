const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("user")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("user").insert([
        {
          username: "andrew",
          password: bcrypt.hashSync("andrew", 10),
          location: "Utah"
        },
        {
          username: "user",
          password: bcrypt.hashSync("user", 10),
          location: "Alabama"
        }
      ]);
    });
};
