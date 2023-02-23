import React from "react";
import "./navbar2.css"
import logoImage from "./mountain logo.png";

function Navbar2() {

  return (
    <nav id="navbar2" class="navbar navbar-expand-lg navbar-light bg-white">
        <a id="navbar-brand-name" class="navbar-brand" href="/"><img src={logoImage} alt="Mountain Logo" width="50" height="50"/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link" href="#history-body"> 01. History</a>
                <a class="nav-item nav-link" href="#climb-body">02. Climb</a>
            </div>
        </div>
  </nav>
  )
}

export default Navbar2;