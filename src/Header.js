import React from 'react';
import MenuLogo from './menu.jpg'

function Header() {

    const sideBar = () => {
        alert("Sidebar")
    }

    return (
        <div class="header-mobile">
            <h1 class="logo">Infinite Gaming</h1>
            <img class="menu-logo" src={MenuLogo} alt="menu-logo" onClick={sideBar}></img>
        </div>
    )
}

export default Header;