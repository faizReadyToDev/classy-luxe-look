import React from 'react'

const items  = [
    {
        Image: "img/bxs_phone-call.png",
        Text: "+1012 3456 789",
    },
    {
        Image: "img/ic_sharp-email.png",
        Text: "demo@gmail.com",
    },
    {
        Image: "img/carbon_location-filled.png",
        Text: "132 Dartmouth Street Boston, Massachusetts 02156 United States",
    }


]
function ContactUs() {
  return (
    <>
        <div  className='flex mt-10 w-[80vw] mx-auto gap-10 shadow-2xl p-10 rounded-lg mb-20'>
            <div className='bg-black w-[30vw] h-[70vh] relative overflow-hidden rounded-lg'>
                <h1 className='text-3xl font-bold text-white text-center mt-10'>Contact Information</h1>
                <p className='text-[var(--color-price)] text-center'>Say something to start a live chat!</p>

            {
                items.map((item,index)=>(
                    <div key={index} className='flex gap-5 pl-10 pr-10 pt-10 items-center'>
                    <img className='w-[1.5vw] h-[3vh]' src={item.Image} alt="" />
                    <p className='text-[var(--color-price)] '>{item.Text}</p>
                </div>
                ))
            }

            <div className='flex gap-5 justify-start items-center absolute bottom-10 left-10'>
                <img src="img/twitter-contact.png" alt="" />
                <img src="img/insta-contact.png" alt="" />
                <img src="img/discord.png" alt="" />
            </div>
            <img className='absolute top-50 opacity-50' src="img/point.jpg" alt="" />
            <img className='absolute bottom-5 left-26' src="img/hand.png" alt="" />
                <img className='absolute bottom-[-50px] right-[-80px] w-[15vw]' src="img/Ellipse 794.png" alt="" />
                <img className='absolute bottom-18 right-14 z-10' src="img/Ellipse 794.png" alt="" />
            </div>
            <div className=''>
                <div className='w-[40vw] mx-auto'>
                    <h1 className='text-3xl font-bold text-center mt-10'>Contact Us</h1>
                    <p className='text-[var(--color-lightblack)] text-center'>We are here to help you</p>
                    <div className='flex justify-center mt-10 '>
                    <iframe className='border' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27972.283659901957!2d79.00423173526015!3d28.79311308041306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a8d3389e519a1%3A0x2678f83d0c9909c0!2sRaza%20Library!5e0!3m2!1sen!2sin!4v1745080902355!5m2!1sen!2sin" width="400" height="300" ></iframe>
                    </div>
                </div>
            </div>
        </div>
       
    
    </>
  )
}

export default ContactUs
