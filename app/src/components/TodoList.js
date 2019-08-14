import React from 'react'
import { Box } from 'grommet'
import TodoItem from './TodoItem';


const TodoList = (props) => (
  <Box align='center'>
    <Box as='ul'
      border={{ size: 'xsmall', color: 'brand' }}
      round='xsmall'
      width='large'
      pad='small'
      direction='column'
      overflow='visible'>
      {props.todos.map((todo, index) => (
        <TodoItem
          todo={todo}
          index={index}
          key={index}
          checkTodo={props.checkTodo}
          deleteTodo={props.deleteTodo} />
      ))}
    </Box>
  </Box>
)

export default TodoList
