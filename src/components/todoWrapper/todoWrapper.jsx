import React from "react";
import TodoHeader from "../todoHeader/todoHeader";
import TodoList from "../todoList/todoList";
import TodoFooter from "../todoFooter/todoFooter";

import "./todoWrapper.css";


export default function TodoWrapper({items, onItemAdd, onItemToggle, onItemDelete, onItemEdit, onItemEditFinished,
    currentFilterId, setCurrentFilterId, getFilteredItems}) {

    return (
        <div className="todoWrapper">
            <div className="todoWrapper__title">Todo list</div>
            <TodoHeader onItemAdd={text => onItemAdd(text)} />
            {getFilteredItems().length > 0 ? <TodoList items={getFilteredItems()} onItemToggle={id => {onItemToggle(id)}} onItemDelete={id => {onItemDelete(id)}}
                onItemEdit={id => {onItemEdit(id)}} onItemEditFinished={(id, text) => {onItemEditFinished(id, text)}} /> : null}
            <TodoFooter items={items} currentFilterId={currentFilterId} setCurrentFilterId={setCurrentFilterId} />
        </div>
    );

}
