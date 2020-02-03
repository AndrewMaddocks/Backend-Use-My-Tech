exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("rented_tech")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("rented_tech").insert([
        { returned: false, renter_id: 1, tech_id: 1 },
        { returned: false, renter_id: 2, tech_id: 3 },
        { returned: false, renter_id: 2, tech_id: 2 }
      ]);
    });
};
