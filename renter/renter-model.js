const db = require("../data/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db("renter").select("id", "username", "password");
}

function findBy(filter) {
  return db("renter").where(filter);
}

async function add(user) {
  const [id] = await db("renter").insert(user);

  return findById(id);
}

function findById(id) {
  return db("renter")
    .where({ id })
    .first();
}
