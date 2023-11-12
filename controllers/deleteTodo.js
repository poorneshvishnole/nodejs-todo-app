const Todo = require("../models/Todo");

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await Todo.findByIdAndDelete({ _id: id });

    res.status(200).json({
      sucess: true,
      message: "deleted succesfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      sucess: false,
      error: err.message,
      message: "failed to delete",
    });
  }
};
