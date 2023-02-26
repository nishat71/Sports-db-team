import React from 'react';
import './SinglePlayer.css'

const SinglePlayer = ({ player, cart, setCart }) => {
    // console.log(player);
    const { strPlayer, idPlayer, strCutout } = player;


    const handleAddToCart = () => {
        const info = {
            strPlayer,
            idPlayer,
            strCutout,
            price: 115 //statically add krsi
        };
        // if (cart) { //cart jodi true hoy, ermodde jodi kisu take
        //     const newPlayer = [...cart, info]; //cart er modde age ja object ase ta nibo tar sate info add kore setCart e boshay dibo
        //     setCart(newPlayer);
        // }
        if (cart?.length) {
            // const prev = [...cart];
            // const newPlayer = info;
            setCart([...cart, info]);
            return;
        }
        else {
            setCart([info]);
            return;
        }
        // const newPlayer = [info];
        // setCart(newPlayer);
        // console.log(info);
    }
    // console.log(cart);


    const handleBookmark = () => {
        const info = {
            strPlayer,
            idPlayer,
            strCutout,
            price: 110,
            bookmark: "true",
        };
        const prevBookmark = localStorage.getItem("bookmark");
        const oldBookmark = JSON.parse(prevBookmark);
        if (oldBookmark) {
            const isExist = oldBookmark.find(p => p.idPlayer === idPlayer); //here p.idPlayer holo localstorage er oldBookmark er idPlayer,  idPlayer holo cart er ta
            // console.log(isExist); //na takle undefined return krbe takle object diye dicche
            if (isExist) {
                alert("Already bookmarked");
                return;
            }
            else {
                localStorage.setItem("bookmark", JSON.stringify([...oldBookmark, info]));
            }
        }
        else {
            localStorage.setItem("bookmark", JSON.stringify([info])); //key bookmark, value k array er bitore rakte chacchi
            console.log("nai");
        }

        //bookmark nam diye set krbo tai get krle bookmark nam diye paite hobe
        // check krbo Age kuno bookmark localstorage e ase ki na bookmark nam e (null falsy value)
        //localstorage e kuno kisu rakle stringify obstay raki , neyar smy parse kore nei
    };



    return (
        <div className="card" data-aos="zoom-in">
            <img className='player-img' src={strCutout} alt="" />
            <h6>{strPlayer}</h6>
            {/* <p>{strDescriptionEN ? strDescriptionEN.slice(0, 60) : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sed culpa magnam modi laboriosam, eligendi nam? A eveniet harum, accusantium quibusdam nam sed ipsa laborum facere nemo fugit. Laboriosam, modi."}</p> */}
            <button className='card-btn'>Details</button>
            <button onClick={handleAddToCart} className='card-btn'>Add to cart</button>
            <button onClick={handleBookmark} className='card-btn'>Bookmark</button>
        </div>
    );
};

export default SinglePlayer;


/*
chaile puro product er info add to cart e add kora jabe but jehetu product er info onk beshi and ato kisu kaj e lagtese na tai j jinish gula distructuring krsi sudu egulai add krbo
object er bitor diye product er distructuring item pataite pari

add to cart e click krle oitar info ashtese tai akn eta state e set kore dite pari

cart e onkgula player takbe and segula k array akare niye jawa lagbe tai newArray niye tar modde info diye disi
 const newPlayer = [info]
 setCart newPlayer k krle....add to cart e click krle cart e array akare save hobe

 cart e array akare set hoile home.js e giye cart er upor map chalay dite pari
*/

/* age ja chilo ... diye cart er modde teke niye nilm
... spread operator, cart akta array er bitor object chilo -->oi object gula k nilm tar sate arkta object add kore dilm
*/