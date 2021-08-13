import React from 'react'
import './App.css'
import { useEffect, useState } from 'react'



function Item({ match }) {
    useEffect(() => {
        fetchItem2();
        console.log(match);
    }, [])
    const [item, setItem] = useState({
        flag: {}
    })

    return (
        <div>
            <h1>{item.capital}</h1>

        </div>
    );

}
export default Item;