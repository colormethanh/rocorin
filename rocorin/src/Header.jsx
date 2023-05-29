import { useState, useRef, useEffect } from 'react'
import {gsap} from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import './Header.css'

gsap.registerPlugin(ScrollTrigger)

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState('up')

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset

      const direction = scrollY > lastScrollY ? 'down' : 'up'
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < 10 )) {
        setScrollDirection(direction)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
    }
    window.addEventListener("scroll", updateScrollDirection)
    return () => {
      window.removeEventListener("scroll", updateScrollDirection) // cleanup
    }
  }, [scrollDirection])

  return scrollDirection
}

export default function Header(props){
  
  const scrollDirection = useScrollDirection()
  
  const header = useRef()
  useEffect(() => {
    
    let ctx = gsap.context(() => {
      // gsap.to(".header-links", {top:"5rem", duration: 2});
    }, header)

  return () => ctx.revert()
  }, [])
  
  return(
    <div ref={header} className="header">
        <div className="header-item" id='header-logo'><a href='/'>Rocorin</a></div>

        <div className={scrollDirection === "up" ? "header-item header-links" : "header-item header-links header-links--hidden"} id=''>
          <div id="header-link-1"><a href='/'>Home</a></div>
          <div id="header-link-2"><a href='/'>Categories</a></div>
          <div id="header-link-3"><a href='/'>Contact Us</a></div>
          <div id="header-link-4"><a href='/'>Cart</a></div>
        </div>
        
    </div>
  )
}