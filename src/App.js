import headerImage from './ing-react-header.jpeg';
import testImage from './test.jpg'
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Info from './Info';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChainOfCommand from './ChainOfCommand';
import ForumsPage from './ForumsPage';
import ClanRoster from './ClanRoster';
import LandingPage from './LandingPage';
import Footer from './Footer';
import MenuLogo from './menu.jpg'
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="App">
        {/*<img class="header-img" src={headerImage} alt=""/>*/}
        {/*<img class="header-img" src={testImage} alt=""/>*/}
        <Header/>
        <Navbar/>
        <div>
          <Routes>
            {/*<Route path="/" element={<LandingPage/>}/>*/}
            <Route path="/" element={<Home/>}/>
            <Route path="/info" element={<Info/>}/> 
            <Route path="/ranks" element={<ChainOfCommand/>}/>
            <Route path="/forums" element={<ForumsPage/>}/>
            <Route path="/clan-roster" element={<ClanRoster/>}/>
          </Routes>
        </div>
        {/*<div>
          <Footer/>
        </div>*/}
      </div>
    </Router>
  );
}

export default App;
