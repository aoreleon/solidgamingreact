import React from 'react';

export default function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg bg-primary nav-gradient-custom" data-bs-theme="dark" >
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src={require('../images/Logo.jpeg')} alt="Logo" width="70" height="60"/>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/noticias">Noticias</a>
              </li>
              <li class="nav-item">                
                <a class="nav-link" href="/analisis">Análisis</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Juegos
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href=".">Acción</a></li>
                  <li><a class="dropdown-item" href=".">Aventura</a></li>
                  <li><a class="dropdown-item" href=".">Conducción</a></li>
                  <li><a class="dropdown-item" href=".">Deportes</a></li>
                  <li><a class="dropdown-item" href=".">Estratégia</a></li>
                  <li><a class="dropdown-item" href=".">Plataforma</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href=".">Top 10</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Plataformas
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href=".">PC</a></li>
                  <li><a class="dropdown-item" href=".">Play Station</a></li>
                  <li><a class="dropdown-item" href=".">Xbox</a></li>
                  <li><a class="dropdown-item" href=".">Nintendo</a></li>                
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href=".">Top 10</a></li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
};