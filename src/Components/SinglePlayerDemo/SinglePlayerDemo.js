import React from 'react';
import '../SinglePlayer/SinglePlayer.css'


const SinglePlayerDemo = ({ player, cart, setCart }) => {
    const { strPlayer, idPlayer, strCutout } = player;
    // console.log(player);

    const handleAddToCart = () => {
        const info = {
            strPlayer, 
            idPlayer, 
            strCutout,
            price : 115 
        };
        const newPlayer = [info]
        setCart(newPlayer);
    }
//   console.log(cart);

    return (
        <div className='card'>
            <img className='player-img' src={strCutout} alt="" />
            <h6>{strPlayer}</h6>
            <button className='card-btn'>Details</button>
            <button onClick={() => handleAddToCart()} className='card-btn'>Add To Cart</button>
            <button className='card-btn'>Bookmark</button>
        </div>
    );
};

export default SinglePlayerDemo;