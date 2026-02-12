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
    <Started/>
    <Footer/>
    </>
  )
}

export default App
