const models = require('../models');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('test works');
  });

  // Create a new todo
  app.post('/todo/', async (req, res) => {
    const { text } = req.body;

    res.send(await models.todo.create({
      text,
    }));
  });

  // Get all todos
  app.get('/todo/', async (req, res) => {
    const todos = await models.todo.findAll();

    res.send(todos);
  });

  // Get todo by id
  app.get('/todo/:id', async (req, res) => {
    const todo = await models.todo.findOne({
      where: { id: req.params.id },
    });

    if (!todo) return res.status(404).send('todo not found for given id');

    return res.send(todo);
  });

  // Update todo by id and return updated todo
  app.put('/todo/:id', async (req, res) => {
    const { id } = req.params;
    const { text, isCompleted } = req.body;

    const todo = await models.todo.update({
      text,
      isCompleted,
    },
    {
      where: { id },
      returning: true,
      plain: true,
    });

    res.send(todo[1].dataValues);
  });
};

