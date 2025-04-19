import React, { useEffect, useState } from 'react'
import { useSharedState } from '../ContextApi/ContextApi';

function ProductDetail() {
    const items = [
        {
            Image: "img/lower-1.webp",
            Price: "499.00",
            Name: "Berlink lounge side slit swaeatpants",
            Rating: 4,
            Mrp: " 999",
            colour: "White",
            category: "Lowers",
            sizes: ["S", "XL"] 
        },
        {
            Image: "img/lower-2.webp",
            Price: "999.00",
            Name: "Irish Track Pants (Mid Rise Regular Fit)",
            Rating: 2,
            Mrp: " 1,499",
            colour: "Red",
            category: "Lowers",
            sizes: ["M", "L"]
        },
        {
            Image: "img/lower-3.webp",
            Price: "1,499.00",
            Name: "HRX Men's Regular Fit Track Pants",
            Rating: 0,
            Mrp: " 1,999",
            colour: "Red" ,
            category: "Lowers",
            sizes: ["S","M","L","XL"]
        },
        {
            Image: "img/Hoodie-1.jpg",
            Price: "499.00",
            Name: "Black : Classy Heavyweight Baggy Hoodie",
            Rating: 5,
            Mrp: " 999",
            colour: "Black" ,
            category: "Hoodies",
            sizes: ["S","M","L","XL"]
        },
        {
            Image: "img/Hoodie-2.webp",
            Price: "999.00",
            Name: "Straight Outta Nothopole Heavyweight Baggy Hoodie",
            Rating: 5,
            Mrp: " 1,499",
            colour: "Red" ,
            category: "Hoodies",
            sizes: ["S","M","L","XL"]
        },
        {
            Image: "img/Hoodie-3.webp",
            Price: "1,499.00",
            Name: "Conspiracy : Heavyweight Baggy Hoodie (Black String)",
            Rating: 5,
            Mrp: " 1,999",
            colour: "White" ,
            category: "Hoodies",
            sizes: ["S","M","L","XL"]
        },
        {
            Image: "img/Tshirt-1.webp",
            Price: "499.00",
            Name: "Round Neck Regular Tee",
            Rating: 5,
            Mrp: " 999",
            colour: "Black" ,
            category: "T-shirts",
            sizes: ["S","M","L","XL"]
        },
        {
            Image: "img/Tshirt-2.webp",
            Price: "999.00",
            Name: "Classy Luxe Oversized Tee ",
            Rating: 5,
            Mrp: " 1,499",
            colour: "Black" ,
            category: "T-shirts",
            sizes: ["S","M","L","XL"]
        },
        {
            Image: "img/Tshirt-3.webp",
            Price: "1,499.00",
            Name: "Offical Nasa Merchandise",
            Rating: 5,
            Mrp: " 1,999",
            colour: "Red" ,
            category: "T-shirts",
            sizes: ["S","M","L","XL"]
        },
        

    ]
    const sortedItem = []

    const [count,setCount] = useState(0);
    const { sharedState } = useSharedState();

    useEffect(() => {
        
        console.log(sharedState);
        
    })


  return (
    <>

{
sharedState.map((item,index)=>(
    <div className='flex gap-5 w-[90vw] mx-auto mb-10'> 
        <div className='w-[40vw] '>
            <div className='grid grid-cols-2 gap-2 pt-5 '>
                <img className='w-[20vw]' src={item.Image} alt="" />
                <img className='w-[20vw]' src={item.Image} alt="" />
                <img className='w-[20vw]' src={item.Image} alt="" />
                <img className='w-[20vw]' src={item.Image} alt="" />
            </div>
        </div>

        <div className=' w-[45vw] mx-auto p-10'>
            <div className=''>
                <p className='font-extrabold text-start mt-20 text-[var(--color-price)]'>Classy luxe look</p>
                
                
                    <div key={index}  className={`items-center productCard-${index}`}>
                    <p className='font-bold text-4xl'>{item.Name}</p>
                   
                
                  <div className='flex gap-5 items-center'>

                    <p><strike className='text-[var(--color-price)] text-xl'> ₹{item.Mrp}</strike> <span className='font-bold text-[var(--color-price-1)] text-xl'>₹{item.Price}</span></p>
                    <span className=' bg-[var(--color-lightblack)] text-xs text-white px-4 py-1 rounded-xl font-extrabold mt-1'>SALE</span>
                  </div>
                  <div  className='flex w-[1vw] mt-2 mb-10'>
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
                        <span className='p-4 border border-gray-400 w-[3vw] items-center  font-bold hover:border-gray-600'>XL</span>
                        <span className='p-4 border border-gray-400 w-[3vw] items-center  font-bold hover:border-gray-600'>L</span>
                        <span className='p-4 border border-gray-400 w-[3vw] items-center  font-bold hover:border-gray-600'>M</span>
                        <span className='p-4 border border-gray-400 w-[3vw] items-center  font-bold hover:border-gray-600'>S</span>
                    </div>
                </div>
                    <div className={`grid grid-cols-3 mb-10 gap-10 mt-3 w-[5vw] cursor-pointer`}>
                            <span className='bg-red-800 h-[4vh] w-[2vw] rounded-full hover:bg-red-400'></span>
                            <span className='bg-white h-[4vh] w-[2vw] rounded-full border hover:bg-yellow-100'></span>
                            <span className='bg-black h-[4vh] w-[2vw] rounded-full hover:bg-[var(--color-lightblack)]'></span>
                    </div>
                    <div>
                        <div className='border flex items-center w-[6vw] justify-center mb-1'>
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
                        <button className='border-2 text-bg py-2 w-full text-center font-extrabold rounded-md hover:bg-black hover:text-white cursor-pointer'>
                            Add to Cart
                        </button>
                        <button className='border-2 mt-1 text-bg py-2 w-full text-center font-extrabold cursor-pointer bg-black text-white'>
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
