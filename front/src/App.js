import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Index from './components/Index/Index'
import Create from './components/Create/Create'
import Edit from './components/Edit/Edit'
import Login from './components/Login/Login'
import Register from './components/Register/Register';

function App() {
  return (
<div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Index /> }/>
        <Route path='/create' element={ <Create />} />
        <Route path='/edit/:id' element={ <Edit />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/register' element={ <Register />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
