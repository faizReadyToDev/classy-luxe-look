import React from 'react'


const data = [
    {
        heading: 'About Us',
        details: 'Welcome to Classy Luxe Look, where sophistication meets streetwear. We specialize in crafting premium lowers, t-shirts, and hoodies that redefine everyday fashion.'
    },
    {
        heading: 'Our Philosophy',
        details: "At Classy Luxe Look, we believe that luxury isn't about opulence—it's about quality, comfort, and confidence. Our designs are tailored for those who appreciate the finer details in minimalist fashion."
    },
    {
        heading: 'What We Offer',
        details: `"
Lowers: Experience unparalleled comfort with our range of stylish lowers, designed for both relaxation and flair.​

T-Shirts: Our t-shirts combine classic cuts with contemporary designs, making them perfect for any occasion.​

Hoodies: Stay cozy and chic with our collection of hoodies, blending warmth with modern aesthetics."`
    },
    {
        heading: 'Why Choose Us?',
        details: `"Every piece we offer is a testament to our commitment to quality and style. We focus on creating versatile clothing that seamlessly fits into your lifestyle, ensuring you look and feel your best.​

        Join us in embracing a new era of fashion—where class meets comfort, and every outfit tells a story."`}
]
function AboutUs() {
  return (
    <>
    <div>

        {data.map((item,index)=>(
                <div key={index} className='w-[60vw] mx-auto border rounded-3xl border-[var(--color-price-1)] bg-gray-100 mt-5 mb-10 p-10'>
                <h1 className='text-3xl font-extrabold text-start pt-5 mb-3 text-[var(--color-lightblack)]'>{item.heading}</h1>
                <p className='text-start mb-5 text-[var(--color-lightblack)]'>{item.details}</p>
            </div>
            ))}
    </div>
   </>
  )
}

export default AboutUs
