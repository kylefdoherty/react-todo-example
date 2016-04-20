import React from 'react';

const Todo = (props) => {
  return (
    <li>
      {props.text}
      <input onChange={ props.completeTodo } type='checkbox' checked={false} />
    </li>

  )
};

export default Todo;
