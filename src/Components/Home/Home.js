import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Players from '../Players/Players';
import './Home.css'
import Swal from 'sweetalert2';

const Home = () => {
    const [search, setSearch] = useState("") //empty string cz ja search e liktesi ta akta string
    const [players, setPlayers] = useState([]); //arekta state nilm jar modde player er data rakbo
    const [cart, setCart] = useState([]);

    // const handleChange = (e) => {
    //     console.log(e.target.value); //e.target.value prottekbar change er jnno prottekbar state e reke dite pari
    //     setSearch(e.target.value) //prottekbar jkn e change hobe setSearch er bitor reke dilm
    // }
    // jotobar liktesi sate sate console hocche and state o set kore dicche


    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${search}`)
            .then(res => res.json())
            .then(data => setPlayers(data?.player)) //akta state nite hobe jar modde datagula rakbo
    }, [search]);
    // console.log(players);

    //url dynamic hoy nai cz useeffect bujtese na j jotobar likbo totobar fetch k cll marbe cz kuno dependency set kore deya hoy nai
    // ekane search useEffect er dependency , search jotobar chnage hobe useEffect totobar cll hobe and state er value change hoye new value set hobe



    const handleDelete = (id) => {
        // console.log(id);
        const leftPlayer = cart.filter(pd => pd.idPlayer !== id);
        setCart(leftPlayer);
        toast("Wow deleted from Cart!");
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
    }


    return (
        <div className='home-container'>
            <div className='player-content'>
                <input onChange={(e) => setSearch(e.target.value)} type="text" className='search-input' />
                {/* <input onChange={(e) => handleChange(e)} type="text" className='search-input' /> */}
                <button className='search-btn'>Search</button>
                <div className='players-container'>
                    <Players players={players} cart={cart} setCart={setCart}></Players>
                </div>
            </div>
            <div className='player-cart'>
                <div className='cart'>
                    <p>This is players cart</p>
                    {
                        cart.map(p =>
                            <div className='cart-info-container'>
                                <li>{p.strPlayer}</li>
                                <button onClick={() => handleDelete(p.idPlayer)} className='delete-btn'>x</button>
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
};

export default Home;
//add to cart e add krle 1tai add hocche porer ta r add hocche na cz info k directly set kore dislm 1bar e
// 1 bar click krbo info ashbe player e giye set kore dibo
// amra chai age jeta takbe tar sate arekta add krte, age kunta chilo seta bujbo kibabe??  player e 1st e info 1ta set krlm, set korar por seta home.js er cart er bitor chole jabe, tai cart check krlei bujte parbo
// cart er bitor ase ki na nai