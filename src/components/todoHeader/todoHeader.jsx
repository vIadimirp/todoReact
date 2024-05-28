import React from "react";

import "./todoHeader.css";


export default function TodoHeader({onItemAdd}) {

    return (
        <div className="todoHeader">
            <input type="text" className="todoHeader__input" placeholder="What to do..." />
            <button className="todoHeader__button" onClick={() => {
                onItemAdd(document.querySelector("input.todoHeader__input").value);
                document.querySelector("input.todoHeader__input").value = "";
            }}>+</button>
        </div>
    );

}
