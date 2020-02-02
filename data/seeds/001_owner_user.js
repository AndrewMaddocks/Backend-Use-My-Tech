const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("owner")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("owner").insert([
        {
          username: "andrew",
          password: bcrypt.hashSync("andrew", 10),
          location: "Utah"
        },
        {
          username: "owner",
          password: bcrypt.hashSync("owner", 10),
          location: "Alabama"
        }
      ]);
    });
};
