import React from 'react';

function Navbar() {
    return (
        <div>
            <nav class="main-nav">
                <a class="logo" href="/"><h1>Infinite Gaming</h1></a>
                <ul class="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="App.js">ING info</a></li>
                    <li><a href="/ranks">ING Ranks</a></li>
                    <li><a href="App.js">ING Forums</a></li>
                    <li><a href="App.js">Clan Roster</a></li>
                    <li><a href="App.js">Chat</a></li>
                </ul>
                <ul class="log-sign-links">
                    <li><a href="App.js">Login</a></li>
                    <li><a href="App.js">Sign Up</a></li>
                </ul>
            </nav>
            <hr></hr>
        </div>
    );
}

export default Navbar;