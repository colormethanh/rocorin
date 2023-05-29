import { useState } from 'react'
import './App.css'
import Header from './Header'
import topImage from './assets/images/leather-table.jpg'


function LandingSection() {
  return(
    <div className="landing-section">
      
    </div>
  )
}



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <LandingSection />
      <div className="block"></div>
    </>
  )
}

export default App
