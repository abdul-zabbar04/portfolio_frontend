import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Hero from './Components/Hero.jsx'
import Projects from './Components/Projects.jsx'
import HomePage from './HomePage.jsx'
import ProjectDetails from './Components/ProjectDetails.jsx'
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route
          path="/"
          element={<HomePage></HomePage>}
        />
        <Route path="/project/:id" element={<ProjectDetails></ProjectDetails>} />
      </Route>
    </Routes>
  </BrowserRouter>
)
