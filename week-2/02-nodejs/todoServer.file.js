const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const filepath = path.join(__dirname, './files/todos.json');

app.get('/todos', (req, res) => {
  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) throw err;
    res.status(200).json(JSON.parse(data));
  });
});

app.get('/todo/:id', (req, res) => {
  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) throw err;

    const todos = JSON.parse(data);
    const todo = todos.find(obj => obj.id === parseInt(req.params.id));

    todo ? res.status(200).json(todo) : res.status(404).send();
  });
});

app.post('/todo', (req, res) => {
  const newTodo = {
    id: Math.floor(Math.random() * 1000000),
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed
  };

  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) throw err;

    const todos = JSON.parse(data);
    todos.push(newTodo);
    fs.writeFile(filepath, JSON.stringify(todos), err => {
      if (err) throw err;

      res.status(201).json( { id: newTodo.id });
    });
  });
});

app.put('/todo/:id', (req, res) => {
  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) throw err;

    const todos = JSON.parse(data);
    const index = todos.findIndex(obj => obj.id === parseInt(req.params.id));

    if (index === -1) return res.status(404).send();
    else {
      const updatedTodo = {
        id: todos[index].id,
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed
      }

      todos[index] = updatedTodo;

      fs.writeFile(filepath, JSON.stringify(todos), err => {
        if (err) throw err;
        res.status(200).json(updatedTodo);
      });
    }
  });
});

app.delete('/todo/:id', (req, res) => {
  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) throw err;

    const todos = JSON.parse(data);
    const index = todos.findIndex(obj => obj.id === parseInt(req.params.id));

    if (index === -1) return res.status(404).send();
    else {
      todos.splice(index, 1);
      
      fs.writeFile(filepath, JSON.stringify(todos), err => {
        if (err) throw err;
        res.status(200).send();
      });
    }
  });
});

app.all('*', (req, res) => res.status(404).send());

app.listen(port, () => console.log(`Listening at ${port}`));