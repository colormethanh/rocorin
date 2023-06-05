import useScrollDirection from '../hooks/useScrollDirection';



export function HeaderItemsMobile(props) {
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

export function HeaderItemsDesktop(props) {
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