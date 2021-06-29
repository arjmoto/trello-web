import React from 'react'

import './Column.scss'
import Task from 'components/Task/Task';
function Column(){
    return (
        <div className="column">
            <header>Brainstorm</header>
            <ul className="Task-list">
            <Task/>
             <li className="Task-item">Add what you'd like to work on below</li>
              <li className="Task-item">Add what you'd like to work on below</li>
              <li className="Task-item">Add what you'd like to work on below</li>
              <li className="Task-item">Add what you'd like to work on below</li>
              <li className="Task-item">Add what you'd like to work on below</li>
              <li className="Task-item">Add what you'd like to work on below</li>
              <li className="Task-item">Add what you'd like to work on below</li>
            </ul>
            <footer>Add another card</footer>
          </div>
        )
}

export default Column