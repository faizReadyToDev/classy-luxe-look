import React, { useState , useRef} from 'react'
import { SnackbarProvider, enqueueSnackbar } from 'notistack'

function CustomOrder() {
    const [fileName, setFileName] = useState('No file selected');
    const fileInputRef = useRef(null);
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setFileName(file ? file.name : 'No file selected');
    };
    const submitHandler = (e) => {
        e.preventDefault();
        enqueueSnackbar('Successfully Submited', { variant: 'success' });
      };

  return (
    <>
    
        <form >
            <div className='w-[40vw] mx-auto mt-10 mb-20 max-sm:w-[90vw]'>

               <div className='flex max-sm:flex-col'>
                   
                        <input type="text" placeholder='Your Email/Number' className='w-full p-3 border border-gray-400 rounded-md mr-2 mb-2' />
                        <input type="text" placeholder='Your Name' className='w-full p-3 border border-gray-400 rounded-md mr-2 mb-2' />
               </div>
               <div className='flex justify-between max-sm:flex-col'>
                <div className="file-upload">
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                        accept="image/*"
                    />
                    <button
                        type="button"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-300 cursor-pointer"
                        onClick={() => fileInputRef.current.click()}
                    >
                        Choose File
                    </button>
                    <span className="file-name">{fileName}</span>
                    </div>
                <div className='items-center flex justify-center p-4 gap-1 max-sm:justify-start max-sm:px-0 max-sm:py-2'>
                <label className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-300 cursor-pointer' for="countries">Choose a size:</label>
                <select className='cursor-pointer text-gray-500' name="countries" id="countries">
                    <option value="">Please select a size</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large"> Large</option>
                    <option value="Extra Large">Extra Large</option>
                </select>
                </div>
               </div>
               <div className='flex'>
                   
                        <input type="text" placeholder='Colour Preference' className='w-full p-3 border border-gray-400 rounded-md mr-2 mb-2' />
                        <input type="text" placeholder='Your Address' className='w-full p-3 border border-gray-400 rounded-md mr-2 mb-2' />
               </div>

               <textarea className='border w-[39.5vw] max-sm:w-[90vw] rounded border-gray-400 px-4 pb-25' placeholder='Special Instructions' name="message" id="">
                
               </textarea>
               <SnackbarProvider
                autoHideDuration={1000}
               />
                <button onClick={(e) => submitHandler(e)} className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-300 cursor-pointer'>Submit</button>
                  


            </div>

        </form>
        
    
    
    
    
    
    </>
  )
}

export default CustomOrder
