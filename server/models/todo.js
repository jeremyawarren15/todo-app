module.exports = (sequelize, DataTypes) => {
  const todo = sequelize.define('todo', {
    text: DataTypes.STRING,
    isCompleted: DataTypes.BOOLEAN,
  }, {});

  return todo;
};
