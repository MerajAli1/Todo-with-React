import { useState } from "react";

const App = () => {
  const [inpValue, setInpValue] = useState("");
  const [todoData, setTodoData] = useState([]);
  const addTodoHandler = () => {
    if (inpValue) {
      setTodoData((prev) => [...prev, inpValue]);
      setInpValue("");
    }
  };
  const editTodoHandler = (i) => {
    let updatedValue = prompt("Enter Updated Value");
    todoData[i] = updatedValue;
    setTodoData([...todoData]);
  };
  const deleteTodoHandler = (index) => {
    console.log(index);
    let data = todoData.filter((e, i) => i !== index);
    setTodoData(data);
  };
  return (
    <div>
      <input
        onChange={(e) => setInpValue(e.target.value)}
        placeholder="Enter Todo"
        value={inpValue}
      />
      <button onClick={addTodoHandler}>Add</button>
      <ul>
        {todoData.length
          ? todoData.map((e, i) => (
              <li key={i}>
                {e}
                <button onClick={() => editTodoHandler(i)}>Edit</button>
                <button onClick={() => deleteTodoHandler(i)}>Delete</button>
              </li>
            ))
          : "No Todos"}
      </ul>
    </div>
  );
};
export default App;
