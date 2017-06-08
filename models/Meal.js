const BaseModel = require("./BaseModel");

class Meal extends BaseModel {
  static get tableName() {
    return "meals";
  }

  static create(params) {
    return Meal.query().insert(params);
  }
}

module.exports = Meal;
