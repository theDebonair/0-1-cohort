/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  todoMemo = [];

  add = todo => this.todoMemo.push(todo);
  remove = indexOfTodo => this.todoMemo.splice(indexOfTodo, 1);
  update = (indexOfTodo, todo) => (indexOfTodo < this.todoMemo.length) && (this.todoMemo[indexOfTodo]=todo);
  getAll = () => this.todoMemo;
  get = indexOfTodo => (indexOfTodo < this.todoMemo.length) ? this.todoMemo[indexOfTodo] : null;
  clear = () => this.todoMemo = [];
}

module.exports = Todo;
