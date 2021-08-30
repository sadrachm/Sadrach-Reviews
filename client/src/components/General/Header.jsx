import React from "react";
import Nav from "react-bootstrap/Nav"

function Header() {
    return <div>
<Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Sadrach's Reviews</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item active">
          <a className="nav-link" href="/games">Games <span className="sr-only"></span></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/animes">Anime <span className="sr-only"></span></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/movies">Movie <span className="sr-only"></span></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/compose">Compose <span className="sr-only"></span></a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li> */}
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="/about">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled" href="#">Disabled</a>
        </li> */}
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> */}
    </div></div>
  </Nav></div>
}

export default Header;