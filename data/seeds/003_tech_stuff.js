exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tech")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("tech").insert([
        {
          name: "camera",
          description: "Nikon - D3500 DSLR ",
          rented: true,
          owner_id: 1
        },
        {
          name: "fog machine",
          description: "black with a red lid",
          rented: true,
          owner_id: 1
        },
        {
          name: "labtop",
          description: "macbook pro",
          rented: true,
          owner_id: 2
        }
      ]);
    });
};
