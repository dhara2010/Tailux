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
<<<<<<< HEAD
import { useRef } from 'react'
function App() {

  const templatesRef = useRef(null);

  const scrollToTemplates = () => {
    templatesRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
    <Header />
    <Hero scrollToTemplates={scrollToTemplates}/>
    <Tailux/>
    <Theme/>
    <Technology/>
    <div ref={templatesRef}>
        <Templates />
      </div>
=======

function App() {

  return (
    <>
    <Header />
    <Hero/>
    <Tailux/>
    <Theme/>
    <Technology/>
    <Templates/>
>>>>>>> bc661905c5358ba1a7cc6344fb5fd5e9f6fd1cb8
    <Started/>
    <Footer/>
    </>
  )
}

export default App
