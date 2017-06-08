const knex = require("../database/knex");
const objection = require("objection");
const moment = require("moment");
const Model = objection.Model;

Model.knex(knex);

class BaseModel extends Model {
  $beforeInsert() {
    this.created_at = moment().toDate();
  }

  $beforeUpdate() {
    this.updated_at = moment().toDate();
  }
}

module.exports = BaseModel;
