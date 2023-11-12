const Todo = require("../models/Todo");

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updateat: Date.now() }
    );

    res.status(200).json({
      sucess: true,
      data: updatedTodo,
      message: "sucessfully updated",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      sucess: false,
      error: err.message,
      message: "failed to update todo",
    });
  }
};
