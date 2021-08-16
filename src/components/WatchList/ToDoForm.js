import React, {useState, useEffect} from 'react'
import './ToDo.css'
import { v4} from "uuid";
import { randomColor} from "randomcolor"
import { Draggable} from "react-draggable"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function ToDoForm() {
    const [item, setItem] = useState('');
    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem('items')) || []
    )    
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])

    const newItem = () => {
        if (item.trim() !== '') {
            const newItem = {
                id: v4(),
                item: item,
                color: randomColor({
                    luminosity: 'light'
                }),
                defaultPos: {
                    x: -100,
                    y: -100
                }
            }
            setItems((items) => [...items, newItem])
            setItem('')
        } else {
            alert('Enter some ToWatch!')
            setItem('')
        }
    }

    const deleteNode = (id) => {
        
        setItems(items.filter((item) => item.id !== id))
    }

    const updatePos = (data, index) => {
        let newArray = [...items]
        newArray[index].defaultPos = {x: data.x, y: data.y}
        setItems(newArray)
    }

    return(
                <div>
        <div className="wrapper">
        <input
        className="ToDoInput"
        type="text"
        placeholder="Enter someting..."
        onChange={(e) => setItem(e.target.value) }
        />
        <button className="enter" onClick={newItem}>Enter</button>
    </div>
     {
         items.map((item, index) => {
             return (
                 <Draggable
                 key={index}
                 defaultPosition={item.defaultPos}
                 onStop={(_, data) => {
                     updatePos(data, index)
                 }}
                 >
                     <div className="todo_item" style={{backgroundColor: item.color}}>
                         {`${item.item}`}
                         <button 
                         className="delete"
                         onClick={() => deleteNode(item.id)}>
                             X
                         </button>
                     </div>
                 </Draggable>
             )
         })
     }
     </div>
        
    )
   
}

export default ToDoForm;