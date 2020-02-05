const db = require("../data/dbConfig.js");
module.exports = {
  find,
  findById,
  add,
  findTechForOwner,
  findTechForRenter,
  update,
  remove
};
function find() {
  return db("tech");
}
function findById(id) {
  return db("tech")
    .where({ id })
    .first();
}
function add(techItem) {
  return db("tech")
    .insert(techItem, "id")
    .then(ids => {
      const [id] = ids;

      return findById(id);
    });
}
function findTechForOwner(id) {
  // select o.id as owner_id,o.username,  t.name, t.description, t.rented
  // from tech as t
  // join owner as o
  // on t.owner_id =
  // where o.id = 2;
  return db("tech as t")
    .select(
      "u.id ",
      "u.username",
      "t.name",
      "t.image",
      "t.description",
      "t.rented"
    )
    .join("user as u", "t.owner_id", "u.id")
    .where("u.id", id);
}

function update(changes, id) {
  return db("tech")
    .where({ id })
    .update(changes)
    .then(() => {
      return findById(id);
    });
}

function remove(id) {
  return db("tech")
    .where("id", id)
    .del();
}

function findTechForRenter(id) {
  // select u.username,t.name, t.description, rt.returned
  // from tech as t
  // join rented_tech as rt
  // on rt.tech_id = t.id
  // join user as u
  // on u.id = rt.renter_id
  // where u.id = 2;

  return db("tech as t")
    .select("u.username", "t.name", "t.image", "t.description", "rt.returned")
    .join("rented_tech as rt", "rt.tech_id", "t.id")
    .join("user as u ", "u.id", "rt.renter_id")
    .where("u.id", id);
}
