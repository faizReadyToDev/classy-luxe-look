import GooeyNav from "../GooeyNav/GooeyNav"
import React from "react"
import { NavLink } from "react-router-dom"

function Header() {
    const items = [
        { label: "Home",href: "home", location: "/"  },
        { label: "Products",href: "product",location: "/product"  },
        { label: "About",href: "about",location: "/about" },
        { label: "Contact",href: "contact",location: "/contact" },
        { label: "Custom Order",href: "custom-order",location: "/custom" },
      ];
  return (
    <>
    
        <div className="flex justify-between items-center shadow-2xs gap-20 bg-black w-[90vw] mx-auto rounded-full px-8 h-[10vh]">
            <img className="w-[4vw] rounded-full" src="img/logo.jpg" alt="" />
            <ul className="flex gap-10">
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
            <div className="flex items-center gap-4">

                <input type="text" className="border border-white rounded-md px-4 py-2 text-white" placeholder="Search by Product"/>
                <img src="img/cart.png" alt="Cart" />
            </div>
        </div>
    
    
    </>
  )
}

export default Header
