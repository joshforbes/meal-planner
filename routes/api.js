const express = require("express");
const router = express.Router();

const mealModel = require("../models/Meal");

router.get("/", async (req, res) => {
  const meal = await mealModel.create({
    name: "test meal",
    description: "test description"
  });
  res.send("Hey, it works!");
});

module.exports = router;
