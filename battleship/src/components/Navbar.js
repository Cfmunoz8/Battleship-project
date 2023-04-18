import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Battleship
          </Link>
          <form className="d-flex" role="search">
            <button className="btn btn-outline-success" type="submit">
              Reiniciar Juego
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
