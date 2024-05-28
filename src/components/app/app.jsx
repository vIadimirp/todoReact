import React from "react";
import {useEffect} from "react";
import {useState} from "react";
import TodoWrapper from "../todoWrapper/todoWrapper";

import "./app.css";


export default function App() {

    let [todoItems, setTodoItems] = useState([]);
    let [currentFilterId, setCurrentFilterId] = useState(0);


    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(response => response.json())
    //     .then(json => json.map(item => { return {
    //         id: item.id,
    //         title: item.title,
    //         isDone: item.completed,
    //         isEditing: false
    //     };}))
    //     .then(items => setTodoItems(items.slice(0, 3)));
    // }, []);

    useEffect(() => {
        const itemsFromLS = localStorage.getItem("TODOS_REACT");
        if (itemsFromLS) {setTodoItems(JSON.parse(itemsFromLS))}
    }, []);

    useEffect(() => {
        localStorage.setItem("TODOS_REACT", JSON.stringify(todoItems));
    }, [todoItems]);


    const getFilteredItems = () => {
        if (currentFilterId === 1) {return todoItems.filter(item => item.isDone);}
        else if (currentFilterId === 2) {return todoItems.filter(item => !item.isDone);}
        else if (currentFilterId === 3) {return todoItems.filter(item => item.isEditing);}
        return todoItems;
    }


    const onItemAdd = text => {
        setTodoItems(items => [{
            id: todoItems.length + 1,
            title: text === "" ? "Unnamed" : text,
            isDone: false,
            isEditing: false
        }, ...items]);
    }

    const onItemToggle = id => {
        let newTodoItems = todoItems.slice();
        const index = newTodoItems.findIndex(item => item.id === id);
        const item = newTodoItems[index]; item.isDone = !item.isDone;
        newTodoItems[index] = item; setTodoItems(newTodoItems);
    }

    const onItemDelete = id => {
        let newTodoItems = todoItems.slice();
        newTodoItems.splice(newTodoItems.findIndex(item => item.id === id), 1);
        setTodoItems(newTodoItems);
    }

    const onItemEdit = id => {
        let newTodoItems = todoItems.slice();
        const index = newTodoItems.findIndex(item => item.id === id);
        const item = newTodoItems.find(item => item.id === id);
        item.isEditing = true;
        setTodoItems([...newTodoItems.slice(0, index), item, ...newTodoItems.slice(index + 1)]);
    }

    const onItemEditFinished = (id, text) => {
        let newTodoItems = todoItems.slice();
        const index = newTodoItems.findIndex(item => item.id === id);
        const item = newTodoItems.find(item => item.id === id);
        item.isEditing = false;
        item.title = text === "" ? "Unnamed" : text;
        setTodoItems([...newTodoItems.slice(0, index), item, ...newTodoItems.slice(index + 1)]);
    }


    return (
        <div className="app">
            <TodoWrapper items={todoItems} onItemAdd={text => {onItemAdd(text)}} onItemToggle={id => {onItemToggle(id)}} onItemDelete={id => {onItemDelete(id)}}
                onItemEdit={id => {onItemEdit(id)}} onItemEditFinished={(id, text) => {onItemEditFinished(id, text)}} currentFilterId={currentFilterId}
                setCurrentFilterId={setCurrentFilterId} getFilteredItems={getFilteredItems} />
        </div>
    );

}
