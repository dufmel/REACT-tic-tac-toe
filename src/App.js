import './App.css';
import { useEffect, useState } from 'react';
import Boxes from "./Components/Boxes"
import data from "./Components/BoxData"
import Confetti from './Components/Confetti';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("O")
  const[gameState, setGameState] = useState(data)
  const[winner, setWinner] = useState(false)

  function startGame(){
    setGameState(()=>data)
    setWinner(false)
    }

  useEffect(() => {
    if( 
    (
      (gameState[0].player !== "") &&
      (gameState[0].player === gameState[1].player) &&
      (gameState[1].player === gameState[2].player)
    ) ||
    (
      (gameState[3].player !== "") &&
      (gameState[3].player === gameState[4].player) &&
      (gameState[4].player === gameState[5].player)
    ) ||
    (
      (gameState[6].player !== "") &&
      (gameState[6].player === gameState[7].player) &&
      (gameState[7].player === gameState[8].player)
    ) ||
    (
      (gameState[0].player !== "") &&
      (gameState[0].player === gameState[4].player) &&
      (gameState[4].player === gameState[8].player)
    ) ||
    (
      (gameState[0].player !== "") &&
      (gameState[0].player === gameState[3].player) &&
      (gameState[3].player === gameState[6].player)
    ) ||
    (
      (gameState[1].player !== "") &&
      (gameState[1].player === gameState[4].player) &&
      (gameState[4].player === gameState[7].player)
    ) ||
    (
      (gameState[2].player !== "") &&
      (gameState[2].player === gameState[5].player) &&
      (gameState[5].player === gameState[8].player)
    )
      ){setWinner(true)
      console.log("youwon")
      }}, [gameState])
   

  function handleClick(id){
    setGameState(prevState => {
      return prevState.map((square) => {
         if (square.id !== id || square.isMarked){
          return square
         } else{
           const newPlayer = currentPlayer === "X" ? "O" : "X"
           setCurrentPlayer(newPlayer)
           return {...square, isMarked: true, player: newPlayer }
            }
          })
        })
    
  }


  const boxElements = gameState.map(box =>(
    <Boxes
      key={box.id}
      id={box.id}
      isMarked={box.isMarked}
      player = {box.player}
      handleClick = {handleClick}
    />

  ))

  return (
    <main>
{ winner &&     <Confetti />
}      <h1>Tic Tac Toe</h1>
      {winner && <h1>{currentPlayer} Wins!</h1>}
    <div className="box-container">
      {boxElements}
    </div>
      <button className="restart-button" onClick={startGame}>Restart Game</button>
    </main>
  );
}

export default App;
