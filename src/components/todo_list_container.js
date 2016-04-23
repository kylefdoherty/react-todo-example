import React, { Component } from 'react';
import TodoList from './todo_list';

export default class TodoAppContainer extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        'Feed dog',
        'Take out recycle'
      ]
    }

    this.addTodo = this.addTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
  }

  addTodo(e) {
    if(e.key === 'Enter') {
      let updatedState = this.state.todos.slice(0);
      updatedState.push(e.target.value)

      this.setState({
        todos: updatedState
      });

      e.target.value = '';
    }
  }

  completeTodo(e) {
    let completedTodo = e.target.parentElement.innerText
    let updatedState = this.state.todos.filter((todo) => {
      return todo !== completedTodo
    })

    this.setState({
      todos: updatedState
    });
  }

  render() {
    return(
      <TodoList todos={ this.state.todos }
                addTodo={ this.addTodo }
                completeTodo={ this.completeTodo }/>
    );
  }
}

