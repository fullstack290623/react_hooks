import React, { useState, useContext } from "react";
import ThemeContext from './ThemeContext';

const UseStateCounter = ({ useMyReducer }) => {

    const { theme, setTheme } = useContext(ThemeContext); 

    const [count, setCount] = useState(0)

    function changeCount(amount) {
        setCount(prevCount => prevCount + amount )
    }

    function resetCount() {
        setCount(0)
    }

    return (
        <>
            <span>{count}</span><br />
            <button onClick={() => changeCount(1)}> + </button>
            <button onClick={() => changeCount(-1)}> - </button>
            <button onClick={() => resetCount()}> Reset </button>
            <button onClick={() => setTheme(theme == 'light' ? 'dark': 'light')}> Change Theme </button>
            <p>{theme}</p>
        </>
    )
}

export { UseStateCounter };