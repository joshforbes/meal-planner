const BaseModel = require("./BaseModel");
const MealModel = require("./Meal");
const NoMealsError = require("../errors/NoMealsError");
const moment = require("moment");
const _ = require("lodash");

class Plan extends BaseModel {
  static get tableName() {
    return "plans";
  }

  static async create(date) {
    date = moment(date).format("YYYY-MM-DD");
    const meal = _(await MealModel.query()).shuffle().first();

    if (!meal) {
      throw new NoMealsError("Cannot create a plan without meals.");
    }

    await Plan.query().delete().where('date', date);

    return await Plan.query().insert({
      meal_id: meal.id,
      date: date
    });
  }

  // static async create(startDate, days) {
  //   let date = moment(startDate);
  //   let meals = _(await MealModel.query()).shuffle().take(days);
  //
  //   if (meals.isEmpty()) {
  //     return [];
  //   }
  //
  //   return Promise.all(
  //     meals.map(async meal => {
  //       let plan = await Plan.query().insert({
  //         meal_id: meal.id,
  //         date: date.toDate()
  //       });
  //       date.add(1, "days");
  //
  //       return plan;
  //     })
  //   );
  // }
}

module.exports = Plan;
