import React from 'react';
import SinglePlayerDemo from '../SinglePlayerDemo/SinglePlayerDemo';
import '../Players/Players.css'


const PlayersDemo = ({ players, cart, setCart }) => {
    // console.log(players);
    return (
        <div className='card-container'>
            {
                players.map(pd => <SinglePlayerDemo player={pd} key={pd.idPlayer} cart={cart} setCart={setCart}></SinglePlayerDemo>)
            }
        </div>
    );
};

export default PlayersDemo;