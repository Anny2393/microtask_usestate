import React, {useState} from 'react';
import './App.css';

function App() {
    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }
    const onClickHandlerDel = () => {
        setA(0)
        console.log(a)
    }

    // let a = 1
    let [a, setA] = useState(1)
    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandlerDel}>0</button>
        </div>
    );
}

export default App;
