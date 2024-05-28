import React from "react";

import "./todoFooter.css";


export default function TodoFooter({items, currentFilterId, setCurrentFilterId}) {

    return (
        <div className="todoFooter">
            <div className="todoFooter__filters">
                <button onClick={() => {setCurrentFilterId(0)}}
                    className={`${currentFilterId === 0 ? "active " : ""}todoFooter__filter todoFooter__all`}>All ({items.length})</button>
                <button onClick={() => {setCurrentFilterId(1)}}
                    className={`${currentFilterId === 1 ? "active " : ""}todoFooter__filter todoFooter__done`}>Done ({items.filter(item => item.isDone).length})</button>
                <button onClick={() => {setCurrentFilterId(2)}}
                    className={`${currentFilterId === 2 ? "active " : ""}todoFooter__filter todoFooter__undone`}>Undone ({items.filter(item => !item.isDone).length})</button>
                <button onClick={() => {setCurrentFilterId(3)}}
                    className={`${currentFilterId === 3 ? "active " : ""}todoFooter__filter todoFooter__editing`}>Editing ({items.filter(item => item.isEditing).length})</button>
            </div>
        </div>
    );

}
