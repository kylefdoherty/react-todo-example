import React, { Component } from 'react';
import Todo from './todo';

const TodoList = (props) => {
  let todos = props.todos.map((todo, i) => {
    return <Todo key={i} text={todo} />
  });

  return(
    <div>
      <input onKeyDown={ props.onInputChange }
             type='text'
             name='add-todo'
             placeholder='Add Todo' />
      <ul>
        { todos }
      </ul>
    </div>
  );
}

export default TodoList
