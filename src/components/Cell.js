import React from "react";

const Cell = ({id, cell, setCells, go, setGo, cells, winningMessage }) => {

    const handleClick = (e) => {
        if(!winningMessage) {
        const taken = e.target.firstChild.classList.contains("circle") ||
          e.target.firstChild.classList.contains("cross")
        
        if(!taken) {
          if (go === "circle") {
            e.target.firstChild.classList.add("circle")
            handleCellChange("circle")
            setGo("cross")
          }
          if (go === "cross") {
            e.target.firstChild.classList.add("cross")
            handleCellChange("cross")
            setGo("circle")
          }
        }
      }
      }
      
      
      const handleCellChange = (className) => {
        const nextCells = cells.map((cell, index) => {
          if (index === id) {
            return className
          } else {
            return cell
          }
        })
        
        setCells(nextCells)
      }

    return(
        <div className="square" id={id} onClick={handleClick}>
         <div className={cell}></div>
        </div>
        )

}

export default Cell;