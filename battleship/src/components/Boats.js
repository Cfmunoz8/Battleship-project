import React, {useRef} from "react";

function Boats(){
    const refBoats = useRef(null)
    const refDestroyer = useRef(null)
    const flip = () => {
        const rotateShip = refDestroyer
 //       let angle = angle === 0 ? 90 : 0
        {rotateShip.style.transform = `rotate(90deg)`}
    } 
    return (
        <div>
        <div className= "options" ref={refBoats}>
            <div className="destroyer-preview destroyer" ref={refDestroyer} draggable="true"></div>
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