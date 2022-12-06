import holiday from './holiday.jpg';
import './App.css';
import { WishList } from './WishList';

function App() {
  return (
    
    <div className="App">
      <img src={holiday} alt="list"/>
     <div className='wish'>
      <WishList/>
      </div>
    </div>
  
  );
}

export default App;
