const { describe, it } = require("mocha");
const chai = require("chai");
const assert = chai.assert;
const mealModel = require("../../models/Meal");
const planModel = require("../../models/Plan");
const NoMealsError = require("../../errors/NoMealsError");

describe("Plan", function() {
  describe("create()", function() {
    it("creates a plan for the specified date", async function() {
      const meal = await mealModel.create({ name: "Hamburgers" });

      const plan = await planModel.create("2017-05-05");

      assert.equal(meal.id, plan.meal_id);
      assert.equal("2017-05-05", plan.date);
    });

    it("does not create a plan if no meals exist", async function() {
      try {
        await planModel.create("2017-05-05");
      } catch (e) {
        return assert.instanceOf(e, NoMealsError);
      }
      assert.fail({}, {}, "Plan was created even though no meals exist");
    });

    it("if a plan exists for the specified date it is removed before a new one is created", async function() {
      [hamburgerMeal, hotdogMeal] = await Promise.all(
        [{ name: "Hamburgers" }, { name: "Hotdogs" }].map(meal =>
          mealModel.create(meal)
        )
      );

      await planModel.create("2017-05-05");
      await planModel.create("2017-05-05");

      assert.lengthOf(await planModel.query(), 1);
    });

    // it("creates a plan for the specified amount of days", async function() {
    //   const meals = await Promise.all(
    //     [
    //       { name: "Meatloaf" },
    //       { name: "Hamburgers" },
    //       { name: "Hotdogs" },
    //       { name: "Pizza" },
    //       { name: "Fish Sticks" }
    //     ].map(meal => mealModel.create(meal))
    //   );
    //
    //   const mealPlan = await planModel.create("2017-05-05", 5);
    //
    //   assert.lengthOf(mealPlan, 5);
    //
    //   meals.forEach(meal => {
    //     assert.isTrue(mealPlan.some(plan => plan.meal_id === meal.id));
    //   });
    // });
  });
});
