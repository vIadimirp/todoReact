import React from "react";
import { useState } from "react";

import "./todoItemEditing.css";


export default function TodoItemEditing({item, onItemEditFinished}) {

    let [startTitle] = useState(item.title);
    let [currentTitle, setCurrentTitle] = useState(item.title);


    return (
        <div className="todoItemEditing">
            <div className="todoItemEditing__left">
                <input type="text" className="todoItemEditing__input" value={currentTitle}
                    onChange={() => {setCurrentTitle(document.querySelector("input.todoItemEditing__input").value)}} />
            </div>
            <div className="todoItemEditing__right">
                <button className="todoItemEditing__apply" onClick={() => {onItemEditFinished(item.id, currentTitle)}}>
                    <span className="material-symbols-outlined">done</span>
                </button>
                <button className="todoItemEditing__cancel" onClick={() => {onItemEditFinished(item.id, startTitle)}}>
                    <span className="material-symbols-outlined">close</span>
                </button>
            </div>            
        </div>
    );

}
