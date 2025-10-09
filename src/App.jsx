import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Trust from './components/Trust'
import TrandingApp from './components/TrandingApp'
import Footer from './components/Footer'



function App() {


  
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/data.json').then(res => res.json()).then(response => {
            setItems(response)
            setLoading(false)
        });
    }, [])

  return (
    <>
      <Hero />
      <Trust />
      <TrandingApp items={items} isLoading={loading} count={8} isShowMore />
    </>
  )
}

export default App
