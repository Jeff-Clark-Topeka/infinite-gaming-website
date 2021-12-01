import headerImage from './ing-react-header.jpeg';
import testImage from './test.jpg'
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChainOfCommand from './ChainOfCommand';
import MenuLogo from './menu.jpg'

function App() {
  return (
    <Router>
      <div className="App">
        {/*<img class="header-img" src={headerImage} alt=""/>*/}
        {/*<img class="header-img" src={testImage} alt=""/>*/}
        <div class="header-mobile">
          <h1 class="logo">Infinite Gaming</h1>
          <img class="menu-logo" src={MenuLogo} alt="menu-logo"></img>
        </div>
        <Navbar/>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/code-of-conduct"/>
            <Route path="/how-tos"/> 
            <Route path="/ranks" element={<ChainOfCommand/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
