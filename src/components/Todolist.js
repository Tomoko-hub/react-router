import { useState } from "react";

function Todolist(){

    const [ todo, setTodo ] = useState({discription: '', date: ''})
    const [ todos, setTodos ] = useState([])

    const inputChanged = (event) =>{
        setTodo({...todo, [event.target.name]: event.target.value})
    }

    const addTodo = ()=>{
        setTodos([...todos, todo]);
        setTodo({description:'', date: ''})
    }

    const deleteTodo =(index)=>{
        const newTodos = todos.filter((_, i)=> i !== index);
        setTodos(newTodos);
    }

    return(
        <div>
            <h1>Todolist</h1>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div>
                    <input placeholder='Description' name='description' value={todo.description} onChange={inputChanged} />
                    <input placeholder='Date' name='date' value={todo.date} onChange={inputChanged} />
                    <button onClick={addTodo}>Add</button>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <table style={{ marginRight: '10px'}}>
                            <tbody>
                                {todos.map((todo, index)=>
                                <tr key={index}>
                                    <td>{todo.description}</td>
                                    <td>{todo.date}</td>
                                    <td>
                                     <button onClick={()=>deleteTodo(index)}>Delete</button>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todolist;