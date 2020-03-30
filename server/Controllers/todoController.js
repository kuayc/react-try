let toDos = [];
let id = 1;

const getTodos = (req, res) => {
  res.status(200).json(todos);
};

const postTodos = (req, res) => {
  const { Todos } = req.body;

  travelDestinations.push({
    id,
    todo
  });
  id++;

  res.status(200).json(toDos);
};

module.exports = {
  getTodo,
  postTodo
};
