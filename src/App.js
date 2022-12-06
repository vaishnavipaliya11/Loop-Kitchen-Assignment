import './App.css';
import { CardDisplay } from './components/CardsDisplay/CardDisplay';
import { SideBar } from './components/sidebar/Sidebar';
import "./styles.css"

function App() {
  return (
    <div className="App">
     <div className='layout-container'>
      <SideBar/>
      <CardDisplay/>
     </div>
    </div>
  );
}

export default App;
