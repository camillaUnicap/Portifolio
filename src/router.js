/* eslint-disable */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "./components/todo-list/TodoList";
import TelaPrincipal from "./Pages/TelaPrincipal";

const Routers = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<TelaPrincipal />} />
      <Route exact path="/telaprincipal" element={<TelaPrincipal />} />
      <Route exact path="/projetos" element={<TodoList />} />
    </Routes>
  </Router>
);

export default Routers;