
import './App.scss';
import NavMenu from './components/navMenu';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';



function App() {

  
  return (
    <BrowserRouter>
      <NavMenu/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
