
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Home } from './screens/Home';
import { HeaderNew } from './components/HeaderNew';


function App() {
  return (
    <div className="App">
         <Header />
         {/* <HeaderNew /> */}
         <Home />
        
      
    </div>
  );
}

export default App;
