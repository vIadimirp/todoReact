import React from "react";
import TodoItem from "../todoItem/todoItem";
import TodoItemEditing from "../todoItemEditing/todoItemEditing";

import "./todoList.css";


export default function TodoList({items, onItemToggle, onItemDelete, onItemEdit, onItemEditFinished}) {

    const newItems = items.map(item => item.isEditing ? 
        <TodoItemEditing key={item.id} item={item} onItemEditFinished={(id, text) => {onItemEditFinished(id, text)}} /> :
        <TodoItem key={item.id} item={item} onItemToggle={id => {onItemToggle(id)}} onItemDelete={id => {onItemDelete(id)}}
            onItemEdit={id => {onItemEdit(id)}}/>);


    return (
        <div className="todoList">{newItems}</div>
    );

}
