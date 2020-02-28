const db = require("../database/connection.js");

module.exports = {
  find,
  add,
  findById
};

function find() {
  return db("cohorts").select("id", "name");
}

function add(name) {
  return db("cohorts")
    .insert(name, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
  return db("cohorts")
    .select("id", "name")
    .where({ id })
    .first();
}
