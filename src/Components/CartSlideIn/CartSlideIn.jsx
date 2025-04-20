import React, { useEffect } from 'react'



function CartSlideIn({item,count,setCount, showCartSlideIn,setShowCartSlideIn}) {
    useEffect(() => {
        setCount(1);
        setTimeout(() => {
            if(showCartSlideIn) setShowCartSlideIn(false)
        },3000)
      
    },[setShowCartSlideIn,showCartSlideIn])
  return (
    <>
        <div className={`w-[40vw]  bg-white border border-[var(--color-price)] p-4 ${ showCartSlideIn ? "absolute" : "hidden"} z-10 top-0 right-[-1000px] cartSlideIn max-sm:top-0 max-sm:w-[80vw] max-sm:right-[-500px]`}>
            <div className='h-[8vh] border-b border-[var(--color-price)]'>
                <h1 className='font-bold text-xl max-sm:text-2xl'>Cart</h1>
            </div>
            <div className='flex gap-10 items-center justify-evenly mt-5 max-sm:gap-2'>
            <img className='w-[8vw]' src={item.Image} alt="" />
                <div>
                <p className='font-bold text-2xl max-sm:text-xs'>{item.Name}</p>
                <div className='border flex items-center w-[6vw] justify-center mb-1 max-sm:w-[8vw] mt-1'>
                            <button className=' px-4 py-1' onClick={()=>setCount(count-1)}>
                                <span className='text-xl font-bold text-[var(--color-price)] hover:text-black'>-</span>
                            </button>
                            <p className='text-xl font-bold'>
                            {count}
                            </p>
                            <button className=' px-4 py-1' onClick={()=>setCount(count+1)}>
                                <span className='text-xl font-bold  text-[var(--color-price)] hover:text-black'>+</span>
                            </button>
                                
                        </div>
                </div>
                <p><span className='font-bold text-[var(--color-lightblack)] text-xl max-sm:text-xs'>₹{item.Price}</span></p>
                <div className='flex justify-end items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="black" fill="red">
                    <path d="M10.2471 6.7402C11.0734 7.56657 11.4866 7.97975 12.0001 7.97975C12.5136 7.97975 12.9268 7.56658 13.7531 6.74022L13.7532 6.7402L15.5067 4.98669L15.5067 4.98668C15.9143 4.5791 16.1182 4.37524 16.3302 4.25283C17.3966 3.63716 18.2748 4.24821 19.0133 4.98669C19.7518 5.72518 20.3628 6.60345 19.7472 7.66981C19.6248 7.88183 19.421 8.08563 19.0134 8.49321L17.26 10.2466C16.4336 11.073 16.0202 11.4864 16.0202 11.9999C16.0202 12.5134 16.4334 12.9266 17.2598 13.7529L19.0133 15.5065C19.4209 15.9141 19.6248 16.1179 19.7472 16.3299C20.3628 17.3963 19.7518 18.2746 19.0133 19.013C18.2749 19.7516 17.3965 20.3626 16.3302 19.7469C16.1182 19.6246 15.9143 19.4208 15.5067 19.013L13.7534 17.2598L13.7533 17.2597C12.9272 16.4336 12.5136 16.02 12.0001 16.02C11.4867 16.02 11.073 16.4336 10.2469 17.2598L10.2469 17.2598L8.49353 19.013C8.0859 19.4208 7.88208 19.6246 7.67005 19.7469C6.60377 20.3626 5.72534 19.7516 4.98693 19.013C4.2484 18.2746 3.63744 17.3963 4.25307 16.3299C4.37549 16.1179 4.5793 15.9141 4.98693 15.5065L6.74044 13.7529C7.56681 12.9266 7.98 12.5134 7.98 11.9999C7.98 11.4864 7.5666 11.073 6.74022 10.2466L4.98685 8.49321C4.57928 8.08563 4.37548 7.88183 4.25307 7.66981C3.63741 6.60345 4.24845 5.72518 4.98693 4.98669C5.72542 4.24821 6.60369 3.63716 7.67005 4.25283C7.88207 4.37524 8.08593 4.5791 8.49352 4.98668L8.49353 4.98669L10.2471 6.7402Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    
    
    
    </>
  )
}

export default CartSlideIn
