import React, { useEffect, useState } from 'react'
import { useSharedState } from '../ContextApi/ContextApi';
import CartSlideIn from '../CartSlideIn/CartSlideIn';

function ProductDetail() {
    

    const [count,setCount] = useState(0);
    const { sharedState } = useSharedState();
    const [showCartSlideIn,setShowCartSlideIn] = useState(false);



  return (
    <>

{
sharedState.map((item,index)=>(
    <div key={index} className='flex gap-5 w-[90vw] mx-auto mb-10 max-sm:flex-col'> 
        <div className='w-[40vw] max-sm:w-[80vw] max-sm:mx-auto'>
           
            <div className='grid grid-cols-2 gap-2 pt-5 '>
                <img className='w-[20vw] max-sm:w-[40vw]' src={item.Image} alt="" />
                <img className='w-[20vw] max-sm:w-[40vw]' src={item.Image} alt="" />
                <img className='w-[20vw] max-sm:w-[40vw]' src={item.Image} alt="" />
                <img className='w-[20vw] max-sm:w-[40vw]' src={item.Image} alt="" />
            </div>
        </div>

        <div className=' w-[45vw] mx-auto p-10 max-sm:w-[80vw] max-sm:mx-auto max-sm:p-4'>
            <div className='relative'>
                <CartSlideIn item={item} count={count} setCount={setCount} showCartSlideIn={showCartSlideIn} setShowCartSlideIn={setShowCartSlideIn}/>
                <p className='font-extrabold text-start mt-20 text-[var(--color-price)] max-sm:text-xs max-sm:mt-5'>Classy luxe look</p>
                
                
                    <div key={index}  className={`items-center productCard-${index}`}>
                    <p className='font-bold text-4xl max-sm:text-2xl'>{item.Name}</p>
                   
                
                  <div className='flex gap-5 items-center'>

                    <p><strike className='text-[var(--color-price)] text-xl'> ₹{item.Mrp}</strike> <span className='font-bold text-[var(--color-price-1)] text-xl'>₹{item.Price}</span></p>
                    <span className=' bg-[var(--color-lightblack)] text-xs text-white px-4 py-1 rounded-xl font-extrabold mt-1'>SALE</span>
                  </div>
                  <div  className='flex w-[1vw] mt-2 mb-10 max-sm:w-[5vw]'>
                        {
                            [...Array(5)].map((_,i)=>(
                            <img key={i} src="img/star.png" alt=""  
                            className={` ${i < Math.round(item.Rating) ? 'opacity-100' : 'opacity-30'}`}

                            />
                            
                            ))
                        }   
                           
                        </div>
                  <div>
                    
                    <div className={`flex gap-2 mt-2 mb-10 cursor-pointer`}>
                        <span className='p-4 border border-gray-400 w-[3vw] flex justify-center items-center  font-bold hover:border-gray-600'>XL</span>
                        <span className='p-4 border border-gray-400 w-[3vw] flex justify-center items-center  font-bold hover:border-gray-600'>L</span>
                        <span className='p-4 border border-gray-400 w-[3vw] flex justify-center items-center  font-bold hover:border-gray-600'>M</span>
                        <span className='p-4 border border-gray-400 w-[3vw] flex justify-center items-center  font-bold hover:border-gray-600'>S</span>
                    </div>
                </div>
                    <div className={`grid grid-cols-3 mb-10 gap-10 mt-3 w-[5vw] cursor-pointer`}>
                            <span className='bg-red-800 h-[4vh] w-[2vw] max-sm:w-[6vw] max-sm:h-[3vh] rounded-full hover:bg-red-400'></span>
                            <span className='bg-white h-[4vh] w-[2vw] max-sm:w-[6vw] max-sm:h-[3vh] rounded-full border hover:bg-yellow-100'></span>
                            <span className='bg-black h-[4vh] w-[2vw] max-sm:w-[6vw] max-sm:h-[3vh] rounded-full hover:bg-[var(--color-lightblack)]'></span>
                    </div>
                    <div className=''>
                        <div className='border flex items-center w-[6vw] justify-center mb-1 max-sm:w-[25vw]'>
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
                        <button onClick={()=>setShowCartSlideIn(true)} className='border-2 text-bg py-2 w-full text-center font-extrabold rounded-md hover:bg-black hover:text-white cursor-pointer'>
                            Add to Cart
                        </button>
                        <button onClick={()=>setShowCartSlideIn(true)} className='border-2 mt-1 text-bg py-2 w-full text-center font-extrabold cursor-pointer bg-black text-white'>
                            BUY NOW
                        </button>
                    </div>
                </div> 
           
             
            </div>   
        </div>
    </div>
       ))
    }
    
    </>
  )
}

export default ProductDetail
