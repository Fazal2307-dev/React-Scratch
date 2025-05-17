import React from 'react'
import Header from './components/Header'
import TodoItem from './components/TodoItme'
import Button from './components/Button'

import './style.css'

const App = () => {
  return (
    <div className='todo-container'>
        <Header />
        <TodoItem />
        <Button />
    </div>
  )
}

export default App;
