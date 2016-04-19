import React, { Component } from 'react';
import TodoList from './todo_list';

export default class TodoListContainer extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        'Feed dog',
        'Walk dog',
        'Take out recycle'
      ]
    }

    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange(e) {
    if(e.key === 'Enter') {
      let updatedState = this.state.todos.slice(0);
      updatedState.push(e.target.value)

      this.setState({
        todos: updatedState
      });

      e.target.value = '';
    }
  }

  render() {
    return(
      <TodoList todos={ this.state.todos }
                onInputChange={ this.onInputChange } />
    );
  }
}

