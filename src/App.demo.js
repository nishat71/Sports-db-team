import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [players, setPlayers] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {
    // fetch("https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=Danny%20Welbeck")
    //   .then(res => res.json())
    //   .then(data => setPlayers(data?.player)); //? optional chaining diye disi jate data kunosmy undefined takle jate error na dey
  console.log('here iam');
    }, [control]);


    const handleEffect = () =>{
      setControl(!control); //prottekbar jkn ai function k cll krbo setControl hobe ai control er opposite
    }


  // console.log(players);
  //load korar por j data pabo ta to kunojaygay rakte hobe, rakar jnno variable er poriborte react akta state create kore dey
  // jekane data rakte parbo, sate function takbe jeta diye state control or change krte parbo
  // players variabl er moto behave krbe , eta diye state er bitor ja ase ta sudu dekte parbo
  // setPlayers diye data dekte parbo na, data k set krte parbo, state e rakte parbo
  // players, setPlayers k jekane kushi niye jete parbo, access krte parbo
  // chaile onno kuno function teke setPlayers k diye ai state er data manage or control or change krte parbo
  return (
    <div className="App">
      <h1>Sport Academy</h1>
      <button onClick={()=>handleEffect()}>check effect</button>
    </div>
  );
}

export default App;
