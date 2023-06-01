import { useState, useRef, useEffect } from 'react'
import {gsap} from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import useScrollDirection from './hooks/useScrollDirection';
import './Header.css'

gsap.registerPlugin(ScrollTrigger)


function HeaderItemsMobile(props) {
  let isArrowed = props.isArrowed

  return (
    <div className={isArrowed === true ? "header-item header-links" : "header-item header-links header-links--hidden"} >
      <div id="header-link-1"><a href='/'>Home</a></div>
      <div id="header-link-2"><a href='/'>Categories</a></div>
      <div id="header-link-3"><a href='/'>Contact Us</a></div>
      <div id="header-link-4"><a href='/'>Cart</a></div>
    </div>
  )


}

function HeaderItemsDesktop(props) {
  const scrollDirection = useScrollDirection()

  return (
    <div className={scrollDirection === "up" ? "header-item header-links" : "header-item header-links header-links--hidden"} >
      <div id="header-link-1"><a href='/'>Home</a></div>
      <div id="header-link-2"><a href='/'>Categories</a></div>
      <div id="header-link-3"><a href='/'>Contact Us</a></div>
      <div id="header-link-4"><a href='/'>Cart</a></div>
    </div>
  )
}

export default function Header(props) {
  
  const [isArrowed, setIsArrowed ] = useState(false)
  const [isMobile, setIsMobile] = useState(screen.width <= 400 ? true : false)

  const header = useRef()
  const tl = gsap.timeline()


  const handleClick = (e) => {
    if (isArrowed){
      tl.to("#arrow-stem", { strokeDashoffset: 160, duration: 0.5 });
      tl.to("#arrow-right", { strokeDashoffset: 116, duration: 0.5 }, "<");
      tl.to("#arrow-left", { strokeDashoffset: 116, duration: 0.5 }, "<");
      tl.to("#middle-bar", { strokeDashoffset: 170, duration: 0.5 }, "<.1");
      tl.to("#bottom-bar", { strokeDashoffset: 170, duration: 0.5 }, "<");
      tl.to("#top-bar", { strokeDashoffset: 170, duration: 0.5 }, "<");
      setIsArrowed(false)
    } else {
      tl.to("#top-bar", { strokeDashoffset: 119, duration: 0.5 });
      tl.to("#bottom-bar", { strokeDashoffset: 119, duration: 0.5 }, "<");
      tl.to("#middle-bar", { strokeDashoffset: 225, duration: 0.5 }, "<");
      tl.to("#arrow-left", { strokeDashoffset: 65, duration: 0.5 }, "<.1");
      tl.to("#arrow-right", { strokeDashoffset: 65, duration: 0.5 }, "<");
      tl.to("#arrow-stem", { strokeDashoffset: 115, duration: 0.5 }, "<");
      setIsArrowed(true)
    }
    e.preventDefault()
  }

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
          <a href='/' onClick={(e) => handleClick(e)}>
          <svg id="Layer_1" height="25" width="25"  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 25">
            <line id="top-bar" className="line" y1="2.12" x2="50" y2="2.12"/>
            <line id="middle-bar" className="line" y1="12.12" x2="50" y2="12.12"/>
            <line id="bottom-bar" className="line" y1="22.12" x2="50" y2="22.12"/>
            <line id="arrow-right" className="line" x1="47.39" y1="24.51" x2="24.11" y2="1.23"/>
            <line id="arrow-left" className="line" x1="2.5" y1="24.62" x2="26.06" y2="1.06"/>
            <line id="arrow-stem" className="line" x1="25" y1="35.43" x2="25" y2="2.12"/>
          </svg>
          </a>
        </div>

        {isMobile? <HeaderItemsMobile isArrowed = {isArrowed} /> : <HeaderItemsDesktop />}
        
        
    </div>
  )
}