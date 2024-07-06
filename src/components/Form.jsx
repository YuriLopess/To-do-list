import { useState } from 'react'

function Form({addToDo}) {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return;
        addToDo(value, category);
        setValue("");
        setCategory("");
    };

    return (
        <div className='form'>
            <h2>Create Task</h2>
            <form onSubmit={handleSubmit}>
                <input type="text"  placeholder='Enter the title' value={value} onChange={(e) => setValue(e.target.value)}/>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
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