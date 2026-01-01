
import './App.css'
import Home from './components/HomePage/Home'
import Login from './components/LoginPage/Login'
import Navbar from './components/Navbar'
import SignUp from './components/Singup/SignUp'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
 
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
