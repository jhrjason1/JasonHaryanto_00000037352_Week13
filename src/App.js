import './App.css';
import uparrow from './up.png';
import downarrow from './down.png';
import clock from './jam.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="Title">
          <img src={clock} className="jam"></img>SIMPLE COUNTDOWN<img src={clock} className="jam"></img>
        </p>
        <img src={uparrow} className="arrow1"></img>
        <img src={downarrow} className="arrow6"></img>
        <img src={uparrow} className="arrow2"></img>
        <img src={downarrow} className="arrow3"></img>
        <img src={uparrow} className="arrow4"></img>
        <img src={downarrow} className="arrow5"></img>
        <button className="startbutton">START</button>
      </header>
    </div>
  );
}


export default App;
