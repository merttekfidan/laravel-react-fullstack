import React, { useEffect, useState } from "react";
import Master from "../theme/Master";
import axios from "axios";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  async function getTodo() {
    await axios
      .get("http://backend.test/api/todo")
      .then((res) => setTodos(res.data));
  }
  function flipStatus(e, i) {
    const newTodos = [...todos];
    if (e.target.value === 1) newTodos[i].done = 0;
    else newTodos[i].done = 1;
    setTodos(newTodos);
  }
  useEffect(() => {
    getTodo();
  }, []);
  return (
    <Master>
      <ul>
        {console.log(todos)}
        {todos.map((todo, i) => (
          <li
            value={todo.done}
            onClick={(e) => flipStatus(e, i)}
            style={{
              textDecorationLine: todo.done === 1 ? "line-through" : "none",
            }}
            key={i}
          >
            {todo.body}
          </li>
        ))}
      </ul>
    </Master>
  );
}
