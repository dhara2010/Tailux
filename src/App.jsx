import { useState } from 'react'
import './App.css'
import './index.css'
import Header from './component/Header'
import Hero from './component/Hero'
import Tailux from './component/Tailux'
import Theme from './component/Theme'
import Technology from './component/Technology'
import Templates from './component/Templates'
import Started from './component/Started'
import Footer from './component/Footer'

function App() {

  return (
    <>
    <Header />
    <Hero/>
    <Tailux/>
    <Theme/>
    <Technology/>
    <Templates/>
    <Started/>
    <Footer/>
    </>
  )
}

export default App
