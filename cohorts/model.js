const db = require("../database/connection.js");

module.exports = {
 find
}


function find(){
 return db("cohorts").select("id", "name")
}