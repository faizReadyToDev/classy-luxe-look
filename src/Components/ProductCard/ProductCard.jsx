import React, { useEffect, useRef, useState } from 'react'
import FilterSideBar from '../FilterSideBar/FilterSideBar';
import { useSharedState } from '../ContextApi/ContextApi';
import { NavLink } from 'react-router-dom';

function ProductCard() {
    const initialItems = [
        {
            Image: "img/lower-1.webp",
            Price: "499.00",
            Name: "Berlink lounge side slit swaeatpants",
            Rating: 4,
            Mrp: " 999",
            colour: "White",
            category: "Lowers",
            sizes: ["S", "XL"],
             
        },
        {
            Image: "img/lower-2.webp",
            Price: "999.00",
            Name: "Irish Track Pants (Mid Rise Regular Fit)",
            Rating: 2,
            Mrp: " 1,499",
            colour: "Red",
            category: "Lowers",
            sizes: ["M", "L"],
             
        },
        {
            Image: "img/lower-3.webp",
            Price: "1,499.00",
            Name: "HRX Men's Regular Fit Track Pants",
            Rating: 0,
            Mrp: " 1,999",
            colour: "Red" ,
            category: "Lowers",
            sizes: ["S","M","L","XL"],
             
        },
        {
            Image: "img/Hoodie-1.jpg",
            Price: "499.00",
            Name: "Black : Classy Heavyweight Baggy Hoodie",
            Rating: 5,
            Mrp: " 999",
            colour: "Black" ,
            category: "Hoodies",
            sizes: ["S","M","L","XL"],
           
        },
        {
            Image: "img/Hoodie-2.webp",
            Price: "999.00",
            Name: "Straight Outta Nothopole Heavyweight Baggy Hoodie",
            Rating: 5,
            Mrp: " 1,499",
            colour: "Red" ,
            category: "Hoodies",
            sizes: ["S","M","L","XL"],
          
        },
        {
            Image: "img/Hoodie-3.webp",
            Price: "1,499.00",
            Name: "Conspiracy : Heavyweight Baggy Hoodie (Black String)",
            Rating: 5,
            Mrp: " 1,999",
            colour: "White" ,
            category: "Hoodies",
            sizes: ["S","M","L","XL"],
          
        },
        {
            Image: "img/Tshirt-1.webp",
            Price: "499.00",
            Name: "Round Neck Regular Tee",
            Rating: 5,
            Mrp: " 999",
            colour: "Black" ,
            category: "T-shirts",
            sizes: ["S","M","L","XL"],
          
        },
        {
            Image: "img/Tshirt-2.webp",
            Price: "999.00",
            Name: "Classy Luxe Oversized Tee ",
            Rating: 5,
            Mrp: " 1,499",
            colour: "Black" ,
            category: "T-shirts",
            sizes: ["S","M","L","XL"],
          
        },
        {
            Image: "img/Tshirt-3.webp",
            Price: "1,499.00",
            Name: "Offical Nasa Merchandise",
            Rating: 5,
            Mrp: " 1,999",
            colour: "Red" ,
            category: "T-shirts",   
            sizes: ["S","M","L","XL"],
          
        },
        

    ]

    const [showColorDiv, setShowColorDiv] = useState(null);
    const [filteredItems, setFilteredItems] = useState(initialItems);
    const { sharedState, setSharedState } = useSharedState();
    

    const handleFilter = (filters) => {
        let filtered = [...initialItems];

        if (filters.categories.length > 0 && !filters.categories.includes('All')) {
            filtered = filtered.filter(item => 
                filters.categories.includes(item.category)
            );
        }

        if (filters.prices.length > 0) {
            filtered = filtered.filter(item => {
                return filters.prices.some(range => {
                    const [min, max] = range.split('-').map(Number);
                    return item.Price >= min && item.Price <= max;
                });
            });
        }

        if (filters.colors.length > 0) {
            filtered = filtered.filter(item => 
                filters.colors.includes(item.colour.toLowerCase())
            );
        }

        setFilteredItems(filtered);
    };

   const handlerOnClick = (item) => {
    setSharedState([item]);
    
   }

  return (
    <>
        <div className='flex justify-evenly'>
        <FilterSideBar onFilter={handleFilter}/>
        <div className='grid grid-cols-3 justify-items-center w-[60vw] mx-auto max-sm:grid-cols-1 max-sm:w-[100vw]'>
            {
                filteredItems.map((item,index)=>(
                    <NavLink key={index} to= "/product-collections">
                        
                    
                    <div onClick={()=> handlerOnClick(item)} key={index} onMouseMove={() => setShowColorDiv(index)} onMouseLeave={() => setShowColorDiv(true)} className={`w-[20vw] p-10 relative hover:shadow-2xl productCard-${index} max-sm:w-[98vw]`}>
                    <img className='rounded-md overflow-hidden w-[20vw] h-[40vh] max-sm:w-[98vw] max-sm:h-[40vh]' src={item.Image} alt="" />
                    <div>
                        <div className={`flex gap-2 absolute top-65 bg-white w-[14.8vw] h-[12vh] opacity-90 sm:${showColorDiv === index? 'flex' : 'hidden'} max-sm:w-[80vw] max-sm:flex`}></div>
                        <div className={`flex gap-2 absolute top-68  left-12.5 sm:${showColorDiv === index? 'flex' : 'hidden'} colors-ani max-sm:left-18 max-sm:gap-5 max-sm:flex`}>
                            <span className='flex justify-center p-4 border border-gray-400 w-[3vw] max-sm:w-[10vw]   font-bold'>XL</span>
                            <span className='flex justify-center p-4 border border-gray-400 w-[3vw] max-sm:w-[10vw]   font-bold'>L</span>
                            <span className='flex justify-center p-4 border border-gray-400 w-[3vw] max-sm:w-[10vw]   font-bold'>M</span>
                            <span className='flex justify-center p-4 border border-gray-400 w-[3vw] max-sm:w-[10vw]   font-bold'>S</span>
                        </div>
                    </div>
                    
                    <span className='absolute top-15 left-49 bg-[var(--color-lightblack)] text-xs text-white px-4 py-1 rounded-xl font-extrabold max-sm:left-60 max-sm:top-18'>SALE</span>
                    <p className='font-bold mt-5'>{item.Name}</p>
                    <p><strike className='text-[var(--color-price)]'> ₹{item.Mrp}</strike> <span className='font-bold text-[var(--color-price-1)]'>₹{item.Price}</span></p>
                    <div className={` gap-2 sm:${showColorDiv === index? 'flex' : 'hidden' } flex colors-ani`}>
                      <span className='bg-red-800 h-[2vh] w-[1vw] max-sm:w-[6vw] max-sm:h-[3vh]  rounded-full'></span>
                      <span className='bg-white h-[2vh] w-[1vw] max-sm:w-[6vw] max-sm:h-[3vh]  rounded-full border'></span>
                      <span className='bg-black h-[2vh] w-[1vw] max-sm:w-[6vw] max-sm:h-[3vh]  rounded-full'></span>
                    </div>
                    <tt className={`font-extrabold text-[var(--color-lightblack)] ${showColorDiv === index ? 'hidden' : 'flex'} color-ani-out max-sm:hidden` }>Available in 3 colors</tt>
                    <div>
                        <div  className='flex w-[1vw] mt-2 mb-3 max-sm:w-[5vw]'>
                        {
                            [...Array(5)].map((_,i)=>(
                            <img key={i} src="img/star.png" alt=""  
                            className={` ${i < Math.round(item.Rating) ? 'opacity-100' : 'opacity-30'}`}

                            />
                            
                            ))
                        }
                        </div>
                        <button className='border-2 text-bg py-2 w-full text-center font-extrabold'>
                            Add to Cart
                        </button>
                    </div>
                </div>
                </NavLink>
                ))
            }
          
            
            
            
           
        </div>
        </div>
        

    </>
  )
}

export default ProductCard
