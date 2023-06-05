import { useState, useRef, useEffect } from 'react'
import {gsap} from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import { HeaderItemsDesktop, HeaderItemsMobile } from './components/HeaderItems';
import HamburgerArrow from './components/HamburgerArrow';
import './Header.css'

gsap.registerPlugin(ScrollTrigger)

export default function Header(props) {
  const [isArrowed, setIsArrowed ] = useState(false)
  const [isMobile, setIsMobile] = useState(screen.width <= 400 ? true : false)

  const header = useRef()
 
  useEffect(() =>{
    
    window.addEventListener("resize", () => {
      if(screen.width <= 400) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    })
  })
  
  
  return(
    <div ref={header} className="header">
      
      <div className="header-item" id='header-logo'>
        Rocorin
      </div>

      <div className="header-item" id='header-icon'>
        <HamburgerArrow isArrowed={isArrowed} setIsArrowed={setIsArrowed} />
      </div>

      {isMobile? <HeaderItemsMobile isArrowed={isArrowed}  /> : <HeaderItemsDesktop />}
    </div>
  )
}