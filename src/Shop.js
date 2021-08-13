import React from 'react'
import './App.css'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';


function Shop() {
    useEffect(() => {
        fetchItems();
    }, [])
    const [items, setItems] = useState([])
    const fetchItems = async () => {
        const data = await fetch('https://restcountries.eu/rest/v2/all');
        const items = await data.json();
        console.log(items.items);
        setItems(items);
    }
    return (
        <div>
            {items.map(item => (
                <h1 key={item.name}>
                   <li style={{textAlign:'left'}}><Link to={`/shop/${item.flag}`}>{item.name}</Link></li></h1>
            ))
            }
        </div>
    )

}
export default Shop