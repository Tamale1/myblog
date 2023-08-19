
import './App.css';
import Header from './components/header';
import Post from './components/post';
import {Routes,Route} from 'react-router-dom'
import Layout from './layouts/layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}> 
    <Route index element={<HomePage />   }/>
 <Route path='/login' element={<LoginPage /> }/>
 <Route path='/register' element={<RegisterPage /> }/>
    
   
 </ Route>
    </Routes>
   
  );

  }
export default App;
