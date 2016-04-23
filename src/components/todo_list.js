import React, { Component } from 'react';
import AddTodo from './add_todo';
import Todo from './todo';

const TodoList = (props) => {
  let todos = props.todos.map((todo, i) => {
    return <Todo key={i} completeTodo={ props.completeTodo } text={todo} />
  });

  return(
    <div>
      <AddTodo addTodo={ props.addTodo } />
      <ul>
        { todos }
      </ul>
    </div>
  );
}

export default TodoList
