//import

const Todo = require("../models/Todo");

//route handler -> we reach here by hitting of any route .so,now to control that route we made controller fn
exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    //create new todo obj and insert in db
    const response = await Todo.create({ title, description });

    res.status(200).json({
      success: true,
      data: response,
      message: " Entry created succesfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      data: response,
      message: " Internal server error",
    });
  }
};
