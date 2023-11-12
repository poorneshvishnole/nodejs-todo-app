const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});

    res.status(200).json({
      sucess: true,
      data: todos,
      message: "entire todos fetched",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      sucess: false,
      error: error.message,
      message: "failed to fetch todo",
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    if (!todo) {
      return res.status(404).json({
        sucess: false,
        message: "not found",
      });
    }
    res.status(200).json({
      sucess: true,
      data: todo,
      message: " todo fetched",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      sucess: false,
      error: error.message,
      message: "failed to fetch todo",
    });
  }
};
