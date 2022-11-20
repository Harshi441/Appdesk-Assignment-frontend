import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmpLisitng from './components/EmpListing';
import EmpCreate from './components/EmpCreate';
import EmpEdit from './components/EmpEdit';
import EmpDetail from './components/EmpDetail';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className='Heading'>APPDESK ASSIGNMENT</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpLisitng />}></Route>
          <Route path='/employee/create' element={<EmpCreate />}></Route>
          <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>
          <Route path='/employee/detail/:empid' element={<EmpDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
