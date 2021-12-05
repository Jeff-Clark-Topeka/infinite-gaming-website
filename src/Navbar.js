import React from 'react';
import HomeLogo from './home.jpg';
import InfoLogo from './information.jpg';
import RanksLogo from './ranking.jpg';
import ForumsLogo from './forums.jpg';
import RosterLogo from './roster.jpg';


function Navbar() {
    return (
        <div class="nav-cont">
            <nav class="main-nav">
                {/*<a class="logo" href="/"><h1>Infinite Gaming</h1></a>*/}
                <ul class="nav-links">
                    <li><a href="/"><img src={HomeLogo} alt="home-logo"/></a></li>
                    <li><a href="/info"><img src={InfoLogo} alt="info-logo"/></a></li>
                    <li><a href="/ranks"><img src={RanksLogo} alt="ranks-logo"/></a></li>
                    <li><a href="App.js"><img src={ForumsLogo} alt="forums-logo"/></a></li>
                    <li><a href="App.js"><img src={RosterLogo} alt="ranks-logo"/></a></li>
                    {/*<li><a href="App.js">Chat</a></li>*/}
                </ul>
                {/*<ul class="log-sign-links">
                    <li><a href="App.js">Login</a></li>
                    <li><a href="App.js">Sign Up</a></li>
                </ul>*/}
            </nav>
        </div>
    );
}

export default Navbar;