import React, { useRef } from 'react'

function Footer() {
  return (
    <>

    <div  className='w-[90vw] mx-auto border-t border-[var(--color-lightblack)] py-10'>
        <div>
            <img className="w-[10vw] rounded-full" src="img/logo.jpg" alt="" />
        </div>

        <div className='grid grid-cols-4'>
            <div>
                <h1 className='text-2xl font-extrabold mb-5'>CUSTOMER SERVICE</h1>
                <p className='mb-2 text-[var(--color-lightblack)]'>Contact Us</p>
                <p className='mb-2 text-[var(--color-lightblack)]'>Track Order</p>
                <p className='mb-2 text-[var(--color-lightblack)]'>Return Order</p>
                <p className='mb-2 text-[var(--color-lightblack)]'>Cancel Order</p>
            </div>
            <div>
                <h1 className='text-2xl font-extrabold mb-5'>COMPANY</h1>
                <p className='mb-2 text-[var(--color-lightblack)]'>About Us</p>
                <p className='mb-2 text-[var(--color-lightblack)]'>Terms & Conditions</p>
                <p className='mb-2 text-[var(--color-lightblack)]'>Privacy Policy</p>
                <p className='mb-2 text-[var(--color-lightblack)]'>We are hiring</p>
            </div>
            <div>
                <h1 className='text-2xl font-extrabold mb-5'>CONNECT WITH US</h1>
                <div className='flex gap-2'>

                    <img className='w-[2vw]' src="img/facebook.png" alt="" />
                    <p className='mb-2 text-[var(--color-lightblack)]'>1.5M People like this</p>

                </div>

                <div className='flex gap-2 mt-5 mb-5'>

                <img className='w-[2vw]' src="img/ig.png" alt="" />
                    <p className='mb-2 text-[var(--color-lightblack)]'>670k People like this</p>
                </div>
                <div className='flex w-[2vw] gap-2'>

                   <img className='rounded-lg' src="img/snap.png" alt="" />
                   <img className='rounded-lg' src="img/twitter.png" alt="" />
                   <img src="img/apple.png" alt="" />
        
                   
                </div>
                
                
             
            </div>
            <div>
                <h1 className='text-2xl font-extrabold mb-5'>KEEP UP TO DATE</h1>
                <div className='flex '>
                    <input className='border border-[var(--color-price)] py-2 px-4 rounded-md ' type="email" placeholder='Enter your email'  />
                    <button className='bg-black text-white py-2 px-8 rounded-md' >Subscribe</button>

                </div>
                <div className='mt-5'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27972.283659901957!2d79.00423173526015!3d28.79311308041306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a8d3389e519a1%3A0x2678f83d0c9909c0!2sRaza%20Library!5e0!3m2!1sen!2sin!4v1745003892608!5m2!1sen!2sin" width="348" height="150" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className=''>
                        <div className='flex gap-5 mt-5 mb-5'>
                            <img className='w-[2vw]' src="img/truck.png" alt="" />
                            <p className='mb-2 text-[var(--color-lightblack)]'>15 Days Return Policy*</p>
                        </div>
                        <div className='flex gap-5 mt-5 mb-5'>
                            <img className='w-[2vw]' src="img/payment.png" alt="" />
                            <p className='mb-2 text-[var(--color-lightblack)]'>Cash On Delivery*</p>
                        </div>
            </div>
            <div className=''>
                        <h1 className='text-2xl font-extrabold mb-5'>DOWNLOAD THE APP</h1>
                        <div className='flex gap-2 mt-5 mb-5'>
                            <img className='' src="img/googleplay.webp" alt="" />
                            <img className='' src="img/appstore.webp" alt="" />
                        </div>
                        
            </div>
            
        </div>
        
    </div>
    <div className='text-center bg-black text-white py-3 font-bold'>
        ©2025 ClassyLuxeLook, All rights reserved. <span className='underline '>Powered By ClassyLuxeLook</span>
    </div>
    
    
    
    </>
  )
}

export default Footer
