import React from "react";

function Boats(){
    const flip = () => {
        console.log(optionContainer)
    } 
    return (
        <div>
        <div className= "options">
            <div className="destroyer-preview destroyer" draggable="true"></div>
            <div className="submarine-preview submarine" draggable="true"></div>
            <div className="cruiser-preview cruiser" draggable="true"></div>
            <div className="battleship-preview battleship" draggable="true"></div>
            <div className="carrier-preview carrier" draggable="true"></div>
        </div>
        <button type="button" className="btn btn-outline-secondary" onClick={flip}>Rotar</button>
        <button type="button" className="btn btn-outline-success">Comenzar</button>
        </div>
    )
}

export default Boats;