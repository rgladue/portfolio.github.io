import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Banner from './components/Banner';
import {useState, useEffect} from "react";
import classNames from "classnames";






function App() {
  const [trigger, setTrigger] = useState(false);
  const [active, setActive] = useState(null)
  const arrow = classNames("fa-solid fa-angles-up", {
    "hide": trigger
  })
  
  
  const handleClick = () => {
    setActive(true);
    setTrigger(true);
  }
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Card activate={active}/>
      <i className={arrow} onClick={handleClick}></i>
    </div>
  );
}

export default App;
