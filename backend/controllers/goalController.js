const asyncHandler = require("express-async-handler");
// desc Get goals
//route Get /api.goals
// acess private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

// desc Set goals
//route Set /api.goals
// acess private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text field");
  }
  res.status(200).json({ message: "Set goals" });
});

// desc Update goal
//route Put /api.goals:id
// acess private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// desc Delete goals
//route Delete /api.goals: id
// acess private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
