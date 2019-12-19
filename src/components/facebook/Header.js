import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <header>
        <div className="container">
          <div className="logo">
            <img src="https://i.imgur.com/KDIDiSE.png" />
          </div>

          <nav className="menu">
            <span>Meu perfil</span>
            <i className="material-icons">account_circle</i>
          </nav>
        </div>
      </header>
    );
  }

}

export default Header;