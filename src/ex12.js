import { useState } from "react";

export function Increment() {
    const [cnt, setCnt] = useState(0);

    return (
        <div>
            <button onClick={() => setCnt(cnt + 1)}>Increace</button>
            <div>{cnt}</div>
        </div>
    );
}

export function ControllInput() {
    const [value, setValue] = useState('');

    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <div>{value}</div>
        </div>
    );
}

export function ToggleMe() {
    const [show, setShow] = useState(false);

    return (
        <div>
            <button onClick={() => setShow(!show)}>Toggle me</button>
            <div style={{fontSize: 20, display: show ? "block" : "none"}}>Toggle me</div>
        </div>
    );
}

export function TodoList() {
    const [list, setList] = useState([]);
    const [input, setInput] = useState('');

    return (
        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => { setList([...list, input]); setInput("") }}>add</button>
            {list.map((item, index) => (
                <div key={item}>
                    <div style={{display: "inline-block"}}>{item}</div>
                    <button
                        style={{display: "inline-block"}} 
                        onClick={() => setList(list.filter((_item, i) => i !== index))}
                    >delete</button>
                </div>
            ))}
        </div>
    );
}

export function ColorSwitch() {
    const colors = ['red', 'blue', 'green', 'yellow'];

    const [color, setColor] = useState(colors[0]);

    return (
        <div>
            <select name="color" id="color" onClick={(e) => setColor(e.target.value)}>
                {colors.map((item) => (
                    <option
                        value={item}
                    >{item}</option>
                ))}
            </select>
            <div style={{backgroundColor: color, width: 50, height: 50}}></div>
        </div>
    );
}

export function SearchFilter() {
    const initDragState = {
        draggedFrom: null,
        draggTo: null,
        isDragging: false,
        originalOrder: [],
        updatedOrder: [],
    }
    const a = ['javascript', 'html', 'css', 'c-sharp', 'antd', 'special'];

    const [dnd, setDnd] = useState(initDragState)
    const [list, setList] = useState(a);
    const [value, setValue] = useState('');

    function onDragStart(e) {
        const initialPosition = Number(e.currentTarget.dataset.position);
        setDnd({
            ...dnd,
            draggedFrom: initialPosition,
            isDragging: true,
            originalOrder: list
        })
        e.dataTransfer.setData("text/html", '');
    }
    function onDragOver(e) {
        e.preventDefault();
        let newList = dnd.originalOrder;
        const draggedFrom = dnd.draggedFrom;
        const draggedTo = Number(e.currentTarget.dataset.position);
        const itemDragged = newList[draggedFrom];
        const remainingItems = newList.filter((_item, index) => index !== draggedFrom);
        newList = [
            ...remainingItems.slice(0, draggedTo),
            itemDragged,
            ...remainingItems.slice(draggedTo)
        ];
        if (draggedTo !== dnd.draggedTo){
            setDnd({
                ...dnd,
                updatedOrder: newList,
                draggedTo: draggedTo
            })
        }
    }
    function onDrop() {
        setList(dnd.updatedOrder);
        setDnd({
            ...dnd,
            draggedFrom: null,
            draggedTo: null,
            isDragging: false
        });
    }

    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <div>{list.filter((item) => item.match(value)).map((item, index) => (
                <div
                    data-position={index}
                    key={item} draggable
                    onDragStart={onDragStart}
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                >{item}</div>
            ))}</div>
        </div>
    );
}