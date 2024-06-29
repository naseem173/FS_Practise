import React, { useState } from 'react'
import Create from './Create'

const Home = () => {
    const [todos, setTodos] = useState([]);
  return (
    <div>
          <h2>Todo list</h2>
          <Create />
          {
              todos.length === 0 ?
                  <div><h2>No Record found</h2></div>
                  :

              todos.localeCompare(todo => {
                  <div>
                      {todo}
                  </div>
                      
              } )
          }

    </div>
  )
}

export default Home
