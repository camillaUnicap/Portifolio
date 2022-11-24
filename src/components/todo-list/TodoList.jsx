import React, { useState } from "react";

import "../../styles/components/todoList.sass";

const TodoList = () => {
 const data = localStorage.getItem("todoList");
    const [todoList, setTodoList] = useState(
        data ? JSON.parse(data) : []
      );
    const [descricao, setDesc] = useState("");

const handleSave = () => {

    const todo = {
        descricao: descricao,
    }
    const newArrayTransactions = [...todoList, todo];

    setTodoList(newArrayTransactions);

    localStorage.setItem("todoList", JSON.stringify(newArrayTransactions));
    console.log(newArrayTransactions)
}

const voltar = ()=> {
    window.location.href="/telaPrincipal";
}

    return (
        <div class="todo">
        <button className="btn" onClick={voltar}>Voltar</button>
        <div class="todo__title">
            TODO - LIST
        </div>

        <div class="todo__new-item">
        <input type="text" id="newItem" placeholder="Digite uma tarefa" value={descricao} onChange={(e) => setDesc(e.target.value)}></input>
        <button className="btn" onClick={handleSave}>Adicionar</button>
        </div>
        {todoList?.map((item, id) => (
          <ul key={id} item={item} >{item.descricao}</ul>
        ))}
    </div>
    );
  };
  
  export default TodoList;