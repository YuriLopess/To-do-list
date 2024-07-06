import React from 'react'

const ToDo = ({toDo}) => {
    return (
        <div className="toDo">
            <div className="content">
                <p>{toDo.text}</p>
                <p className='category'>{toDo.category}</p>
            </div>
            <div>
                <button className='complete'>Complete</button>
                <button className='delete'>Delete</button>
            </div>
        </div>
    )
}

export default ToDo