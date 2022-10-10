function ToDo({ todo, toggleTas, removeTask }) {
  return (
    // <div key={todo.id} className="">
    //   <div onClick={() => removeTask(todo.id)}>{todo.task}</div>
    //   <button onClick={() => toggleTas(todo.id)}></button> 
    // </div>
    <div key={todo.id} className="item-todo">
      <div
        className={todo.complete ? "item-yext strike" : "item-text"}
        onClick={() => toggleTas(todo.id)}
      >
        {todo.task}
      </div>
      <div className="item-delete" onClick={() => removeTask(todo.id)}>
        x
      </div>
    </div>
  );
}
export default ToDo;
