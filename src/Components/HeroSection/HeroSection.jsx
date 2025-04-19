import React from 'react'
import { NavLink } from 'react-router-dom'

function HeroSection() {
  return (
    <>
         <div className='border rounded-3xl border-[var(--color-price-1)] bg-gray-100 mt-5 mb-10 w-[90vw] mx-auto max-sm:w-[98vw]'>
            <h1 className='text-3xl font-extrabold text-center pt-5 mb-3 text-[var(--color-lightblack)] max-sm:text-2xl'>Classy luxe look</h1>
            <h2 className='text-2xl text-center font-bold text-[var(--color-price-1)] max-sm:text-xl'>"Where Casual Meets Curated — Redefine Comfort with Timeless Luxury."</h2>
            <div className='grid grid-cols-3 gap-10 w-[60vw] mx-auto justify-items-center mt-5 max-sm:w-[90vw] max-sm:gap-2'>
                <NavLink to="/product">

                    <div className='right-ani'>
                        <img className='rounded-t-lg  h-[50vh] max-sm:h-[20vh] max-sm:w-[30vw]' src="img/Tshirt-1.webp" alt="" />
                        <h1 className='text-center font-bold bg-amber-950 text-white'>T-shirts</h1>
                    </div>
                </NavLink>

                <NavLink  to="/product">
                    <div className='middle-ani'>
                        <img className='rounded-t-lg  h-[50vh] max-sm:h-[20vh] max-sm:w-[30vw]' src="img/Hoodie-2.webp" alt="" />
                        <h1 className='text-center font-bold bg-amber-950 text-white'>Hoodie</h1>
                    </div>
                </NavLink>
                <NavLink  to="/product">

                    <div className='left-ani'>
                        <img className='rounded-t-lg  h-[50vh] max-sm:h-[20vh] max-sm:w-[30vw]' src="img/lower-1.webp" alt="" />
                        <h1 className='text-center font-bold bg-amber-950 text-white'>Lowers</h1>
                    </div>
                </NavLink>
            
            </div>
            <div className='flex justify-center mt-10 mb-10 '>
                <NavLink to="/product">

                    <button className='border-2 cursor-pointer border-slate-100 rounded-full font-bold text-white py-2 px-10 bg-gradient-to-r from-lime-300 to-green-900 hover:from-green-100 hover:to-green-300'>
                        Shop Now
                    </button>
                </NavLink>
            </div>
            
         </div> 
      

    
    
    </>
  )
}

export default HeroSection
