const { describe, it } = require("mocha");
const chai = require("chai");
const assert = chai.assert;
const mealModel = require("../../models/Meal");

describe("Meal", function() {
  describe("create()", function() {
    it("should create a new meal", async function() {
      const meal = await mealModel.create({
        name: "test meal",
        description: "test description"
      });

      assert.equal("test meal", meal.name);
      assert.equal("test description", meal.description);
    });
  });
});
