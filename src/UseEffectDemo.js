import React, { useState, useEffect, useContext } from "react"
import ThemeContext from './ThemeContext';

// useEffect(() => {
//     console.log("Only run on mount")
//   }, [])

// useEffect(() => {
//     console.log("Only run on url change")
//   }, [url])

const UseEffectDemo = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [items, setItems] = useState([])
    const [resourceType, setResourceType] = useState('posts')

    const { theme, setTheme } = useContext(ThemeContext); // take theme from parent state

    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        console.log('********************** use effect');
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`).
            then(response => response.json()).
            then(data => {
                setItems(data);
                console.log(data);
            })
    }, [resourceType])

    useEffect(() => {
        window.addEventListener("resize", updateWindowWidth)

        return () => {
            window.removeEventListener("resize", updateWindowWidth)
        }
    }, [])

    return (
        <>
            <div>Window Width: {windowWidth}</div>
            <p>{theme}</p>            
            {items.slice(0, 5).map(item => {
                return <div key={item.id}>{item.id} {item.title} {item.name}</div>
            })}
            <button onClick={() => setResourceType('posts')}>POSTS</button>
            <button onClick={() => setResourceType('users')}>USERS</button>
        </>
    )
}

export { UseEffectDemo };