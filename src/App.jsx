import Form from './components/Form'
import ToDo from './components/ToDo'
import { useState } from 'react'

function App() {
  const [toDo, setToDo] = useState([
    {
      id: 1,
      text: "Go to workout.",
      category: "(Personal)",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Sleep at 9 o'clock.",
      category: "(Personal)",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Make a snack after studyign",
      category: "(Pesonal)",
      isCompleted: false,
    }
  ])

  return (
    <div className='app'>
      <h1>Task List</h1>
      <div className='to-do-list'>
        {toDo.map((toDo => (
          <ToDo toDo={toDo}/>
        )))}
      </div>
      <Form/>
    </div>
  )
}

export default App
