import './App.css';
import { Element } from 'react-scroll';
import NavigationBar from './sections/NavigationBar';
import Home from './sections/Home';
function App() {
  return (
    <div className="app">
      <div>
      <NavigationBar/>
      </div>
      <div>
        <Element name="home">
          <Home/>
        </Element>
      </div>
    </div>
  );
}

export default App;
