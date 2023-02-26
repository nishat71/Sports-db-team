import React from 'react';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import './Players.css'

const Players = ({ players, cart, setCart }) => { //ekane props by default pai
    // const { players } = props;
    // console.log(props?.players);
    // console.log(players);
    return (
        <div>
            <div className='card-container'>
                {
                    players.map(pd => <SinglePlayer player={pd} key={pd?.idPlayer} cart={cart} setCart={setCart}></SinglePlayer>) //player k erbitor patay dite pari, ekane unique key dite hobe
                }
                {/* player nam diye j pataysi ai player kutay ase --->prottekbar map chalanor por singlePlayer er bitore jacche, singlePlayer er bitore jacche prottekta pd */}
            </div>
        </div>
    );
};

export default Players;
//players k render krbo home.js er left side teke