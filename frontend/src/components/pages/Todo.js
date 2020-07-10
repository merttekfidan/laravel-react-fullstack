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
  useEffect(() => {
    getTodo();
  }, []);
  return (
    <Master>
      <ul>
        {todos.map((todo) => (
          <li>{todo.body}</li>
        ))}
      </ul>
    </Master>
  );
}
