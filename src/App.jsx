import Form from './components/Form'
import ToDo from './components/ToDo'
import Search from './components/Search';
import Filter from './components/Filter';
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

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");


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
      <Search search={search} setSearch={setSearch}/>
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
      <div className='to-do-list'>
        {toDo.filter((toDo) => filter === "All" ? true : filter === "Completed" ? toDo.isCompleted : !toDo.isCompleted)
        .filter((toDo) => toDo.text.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
        .map((toDo) => (
          <ToDo key={toDo.id} toDo={toDo} removeToDo={removeToDo} completeToDo={completeToDo}/>
        ))}
      </div>
      <Form addToDo={addToDo}/>
    </div>
  )
}

export default App
