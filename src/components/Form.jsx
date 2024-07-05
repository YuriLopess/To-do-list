import React from 'react'

function Form() {
  return (
    <div className='form'>
        <h2>Create Task</h2>
        <form>
            <input type="text"  placeholder='Enter the title'/>
            <select>
                <option value="">Select a category</option>
                <option value="Job">Job</option>
                <option value="Personal">Personal</option>
                <option value="Study">Study</option>
            </select>
            <button type="submit">Create task</button>
        </form>
    </div>
  )
}

export default Form