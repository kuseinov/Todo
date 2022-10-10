import { useState } from "react";
import ToDoForm from "./components/Todu-form";
import ToDo from "./components/Tudo";

function App() {
  const [todos, setTodus] = useState([]);

 const addTask=(userInput)=>{
    if(userInput){
        const newItem ={
            id:Math.random().toString(),
            task:userInput,
            complete:false,
        }
        setTodus([...todos,newItem])
        return true
    }
 }
 const removTask=(id)=>{
setTodus([...todos.filter((todo)=>todo.id !==id)])
 }

 const hendel=(id)=>{
setTodus((todos.map((todo)=>todo.id===id?{...todo,complete:!todo.complete}:{...todo})))
 }
 return (
<div>
    <header>
    <h1>{todos.length}</h1>
    </header>
    <ToDoForm
        addTask={addTask}
    />
    {todos.map((todo)=>{
        return (
            <ToDo
                todo={todo}
                key={todo.id}
                removeTask={removTask}
                hedel={hendel}
            />
        )
    })}
</div>
 )}
export default App
