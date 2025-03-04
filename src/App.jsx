import './App.css'
import About from './Components/About'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'
import ThemeMode from './Components/ThemeMode'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import { Outlet, Route, Routes } from 'react-router'
import HomePage from './HomePage'
import ProjectDetails from './Components/ProjectDetails'
import { ToastContainer } from "react-toastify";
function App() {

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar></Navbar>
      <main className='justify-center min-h-screen'>

        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
