import Form from './components/Form'
import ToDo from './components/ToDo'
import { useState } from 'react'

function App() {
  const [toDo, setToDo] = useState([
    {
      id: 1,
      text: "Go to workout.",
      category: "Personal",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Sleep at 9 o'clock.",
      category: "Personal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Make a snack after studying",
      category: "Personal",
      isCompleted: false,
    }
  ])

  const addToDo = (text, category) => {
    const newToDo = [...toDo, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false
    }];

    setToDo(newToDo)
  }

  const removeToDo = (id) => {
    const newToDo = [...toDo]
    const filterToDo = newToDo.filter(toDo => toDo.id !== id);
    setToDo(filterToDo);
  }

  const completeToDo = (id) => {
    const newToDo = toDo.map((toDo) =>
      toDo.id === id ? { ...toDo, isCompleted: !toDo.isCompleted } : toDo
    );
    setToDo(newToDo);
  }

  return (
    <div className='app'>
      <h1>Task List</h1>
      <div className='to-do-list'>
        {toDo.map((toDo) => (
          <ToDo key={toDo.id} toDo={toDo} removeToDo={removeToDo} completeToDo={completeToDo}/>
        ))}
      </div>
      <Form addToDo={addToDo}/>
    </div>
  )
}

export default App