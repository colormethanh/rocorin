import '../Header.css'
import { gsap } from "gsap"


export default function HamburgerArrow({isArrowed, setIsArrowed}) {
  
  const tl = gsap.timeline()

  const handleClick = (e) => {
    e.preventDefault()
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
  }

  return(
    <a id='hamburger-arrow' href='/' onClick={(e) => handleClick(e)}>
      <svg id="Layer_1" height="25" width="25"  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 25">
        <line id="top-bar" className="line" y1="2.12" x2="50" y2="2.12"/>
        <line id="middle-bar" className="line" y1="12.12" x2="50" y2="12.12"/>
        <line id="bottom-bar" className="line" y1="22.12" x2="50" y2="22.12"/>
        <line id="arrow-right" className="line" x1="47.39" y1="24.51" x2="24.11" y2="1.23"/>
        <line id="arrow-left" className="line" x1="2.5" y1="24.62" x2="26.06" y2="1.06"/>
        <line id="arrow-stem" className="line" x1="25" y1="35.43" x2="25" y2="2.12"/>
      </svg>
    </a>

  )
}