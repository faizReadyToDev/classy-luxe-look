import GooeyNav from "../GooeyNav/GooeyNav"
import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import MobileHeaderMenu from "../MobileHeaderMenu/MobileHeaderMenu";


function Header() {
    const items = [
        { label: "Home",href: "home", location: "/"  },
        { label: "Products",href: "product",location: "/product"  },
        { label: "About",href: "about",location: "/about" },
        { label: "Contact",href: "contact",location: "/contact" },
        { label: "Custom Order",href: "custom-order",location: "/custom" },
      ];

      const [display, setDisplay] = useState(false)
      


  return (
    <>
    
        <div className="flex justify-between items-center border-2 border-slate-100 shadow-2xs gap-20 bg-black w-[90vw] mx-auto rounded-full px-8 mt-2 h-[10vh] max-sm:w-[99vw]  max-sm:gap-4 max-sm:px-4">
          <NavLink to = "/">
            <img className="w-[4vw] max-sm:w-[15vw] rounded-full" src="img/logo.jpg" alt="" />
          </NavLink>
            
            <MobileHeaderMenu show={display} setShow={setDisplay} />
            <ul className="flex gap-10 max-xl:hidden">
                {
                  <GooeyNav
                  items={items}
                  animationTime={600}
                  pCount={15}
                  minDistance={20}
                  maxDistance={42}
                  maxRotate={75}
                  colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                  timeVariance={300}
                />
                }
            </ul>
            <div className="sm:hidden">
              <img onClick={() => setDisplay(true)} src="img/menu.png" alt="" />
            </div>
            <div className="flex items-center gap-4 max-sm:hidden">

                <input  type="text" className="border border-white rounded-md px-4 py-2 text-white " placeholder="Search by Product"/>
                <img src="img/cart.png" alt="Cart" />
            </div>
        </div>
    
    
    </>
  )
}

export default Header
