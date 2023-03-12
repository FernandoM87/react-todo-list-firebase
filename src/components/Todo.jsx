import React, {useState} from "react"

function Todo(props) {

    const [input, setInput] = useState("")
    const [isEditing, setIsEditing] = useState(false)
    const [toggled, setToggle] = useState (false)

    const handleSubmit = (event) => {
        console.log("edited form submitted with input:", input)
        event.preventDefault()
        props.editTodo(props.id, input)
        setIsEditing(true)
        setInput("")
    }

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const defaultTemplate = (
        <div>
                <input type="checkbox" id={props.id}
                defaultChecked={props.completed}
                onChange={() => props.toggleCompleted()} />
                {props.desc}
                <div className="btn.group">
                    <button type="button" onClick={() => setIsEditing(true)}>Edit</button>
                    <button type="button" onClick={() => props.deleteTodo(props.id)}>Delete</button>
                </div>
            </div>
    )

    const editTemplate =(

        <form onSubmit={(handleSubmit)}>
                <label>Rename: {props.desc}</label>
                <input 
                    type="text"
                    id={props.id}
                    onChange = {handleChange}
                    value={input}/>
                <div className="btn.group">
                    <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                    <button type="submit">Save</button>
                </div>
            </form>
    )

    return (<li>{isEditing ? editTemplate: defaultTemplate}</li>
    );
  }

  export default Todo;