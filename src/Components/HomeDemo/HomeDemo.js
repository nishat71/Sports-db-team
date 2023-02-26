import React, { useEffect, useState } from 'react';
import PlayersDemo from '../PlayersDemo/PlayersDemo';
import './HomeDemo.css'


const HomeDemo = () => {
    const [search, setSearch] = useState("");
    const [players, setPlayers] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${search}`)
        .then(res=>res.json())
        .then(data=>setPlayers(data?.player))
    },[search]);
    // console.log(players);


    return (
        <div className='home-container'>
            <div className='search-content'>
                <input onChange={(e)=>setSearch(e.target.value)} type="text" className='search-input' />
                <button className='search-btn'>Search</button>
            </div>
            <div className='players-cart-content'>
                <div className='players-container'>
                    <PlayersDemo players={players} cart={cart} setCart={setCart}></PlayersDemo>
                </div>
                <div className='cart'>
                    <p>This is players cart</p>
                    {
                        cart.map(p=><li>{p.idPlayer}</li>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeDemo;