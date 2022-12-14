import './App.css'
import TabDadosDeEndereco from './pages/EnderecoComponents/TabDadosDeEndereco'
import Login from "./pages/loginComponents/Login"
import Cadastro from "./pages/loginComponents/Cadastro"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Update from './pages/loginComponents/Update'


export default function () {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TabDadosDeEndereco/>}/>
        <Route path='/Login' element={<Login/>}/> 
        <Route path='/Cadastro' element={<Cadastro/>}/>
        <Route path='/Update' element={<Update/>}/>
      </Routes>
    </BrowserRouter>
  </>
}