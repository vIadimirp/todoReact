import React from "react";

import "./todoItem.css";


export default function TodoItem({item, onItemToggle, onItemDelete, onItemEdit}) {

    return (
        <div className="todoItem">
            <div className="todoItem__left">
                <button className={"todoItem__toggle" + (item.isDone ? " active" : "")} onClick={() => onItemToggle(item.id)}>
                    <span className="material-symbols-outlined">adjust</span>
                </button>
                <div className="todoItem__title">{item.title}</div>
            </div>
            <div className="todoItem__right">
                <button className="todoItem__edit" onClick={() => onItemEdit(item.id)}>
                    <span className="material-symbols-outlined">edit</span>
                </button>
                <button className="todoItem__delete" onClick={() => onItemDelete(item.id)}>
                    <span className="material-symbols-outlined">delete</span>
                </button>
            </div>            
        </div>
    );

}
