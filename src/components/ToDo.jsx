import React from 'react'

const ToDo = ({toDo, removeToDo, completeToDo}) => {
    return (
        <div className="toDo" style={{textDecoration: toDo.isCompleted ? "line-through" : ""}}>
            <div className="content">
                <p>{toDo.text}</p>
                <p className='category'>{toDo.category}</p>
            </div>
            <div>
                <button className='complete' onClick={() => completeToDo(toDo.id)}>Complete</button>
                <button className='delete' onClick={() => removeToDo(toDo.id)}>Delete</button>
            </div>
        </div>
    )
}

export default ToDo