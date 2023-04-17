import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
      <div className="card border-primary mb-3">
        <div className="card-body">
          <h1 className="card-title">Bienvenido a tu juego de Batalla Naval</h1>
          <p className="card-text">
            Este es el clásico juego de batalla naval, hecho para entretenerte y
            pasar el rato, puedes elegir la disposición de tus barcos de manera
            estratégica! Quien primero hunda todos los barcos del enemigo será
            el ganador!! ¡¡Mucha suerte!!
          </p>
          <Link to="/playing" className="btn btn-primary">
            Jugar ahora
          </Link>
        </div>
      <img
        src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2HbynDtkRoykvenxEGPTaF/89ea1746e327f197387a7a4311ef03fd/-BS-_Hero_Image_-_Desktop.jpg"
        className="card-img-bottom"
        alt="Battleship"
      />
    </div>
  );
}

export default Home;
