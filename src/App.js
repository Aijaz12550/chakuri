import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Header, Footer, Signin } from './components'

const Navigation = () =>{
  return(
    <Router>
        <Header />
      <Routes>
        <Route to='/' element={<Signin />} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default Navigation;
