import React, { useState } from "react";
import "./App.css";
import InputField from "./components/inputField";
import { Todo } from "./model";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";

/* export const App = () => {
  const [todo, setTodo] = useState<string>("asdfgn");
  const [todos, setTodos] = useState<Todo[]>([]);

  console.log(todo,'todo');
  console.log(setTodo)

  const handleAdd = () => {};
  console.log(todo);
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
}; */

export const App = () => {
  return (
    <div className="Front">
      <header>
        <Navbar />
        <Main />
      </header>
    </div>
  );
};
