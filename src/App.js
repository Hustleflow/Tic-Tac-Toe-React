import React from "react";
import Cell from "./components/Cell";

import { useState, useEffect } from "react";


const App = () =>  {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""])
  const [go, setGo] = useState("cross")
  const [winningMessage, setWinningMessage] = useState(null)
  const [draw, setDraw] = useState(true);

  
  
  
  const message = "It is now " + go + "'s go.'"
    console.log(cells)
  
  
  const checkScore = () => {
    const winningCombos = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ]
    

    setDraw(true);

    winningCombos.forEach(array => {
     let circleWins = array.every(cell => cells[cell] === "circle")
     
     if (circleWins) {
       setWinningMessage("Circle Wins!")
       setDraw(false);
       return
     }
    });
    
    winningCombos.forEach(array => {
     let crossWins = array.every(cell => cells[cell] === "cross")
     
     if (crossWins) {
       setWinningMessage("Cross Wins!")
       setDraw(false);
       return
     }
    });
    
  if (draw && cells.every(cell => cell !== "")) {
    setWinningMessage("It's a Draw!");
    return
  } 

  }
  
  useEffect(() => {
    checkScore()
  }, [cells])

  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, index) => 
                   <Cell 
                    key={index}
                    id={index}
                    cell={cell}
                    setCells={setCells}
                    go={go}
                    setGo={setGo}
                    cells={cells}
                    winningMessage={winningMessage}
           
                    />) }
      </div>
        <p>{winningMessage || message }</p>
    </div>
  )
}

export default App;
