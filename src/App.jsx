import {} from 'react'
import {Outlet} from 'react-router-dom'
import Nav from './components/Nav'
import './style/style.css';

function App() {

  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  )
}

export default App
