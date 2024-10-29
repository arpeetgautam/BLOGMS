import React, { useState } from "react";

const Form = ({type,onSubmit}) => {
   const [data,setData]=useState({
    title:'',
    subtitle:'',
    description:'',
    category:'',
    image:'',
   })

   const handleChange=(e)=>{
    const {name,value} = e.target 
    setData({
     ...data,
     [name] : name==='image'?e.target.files[0]: value
    })
   console.log(data)
   }
   const handleSubmit=(e)=>{
       e.preventDefault()
       onSubmit(data)
   }
   
  return (
    <div>
      <div className="flex items-center justify-center p-12 ">
        {/* <!-- Author: FormBold Team -->
  <!-- Learn More: https://formbold.com --> */}

        <div className="mx-auto w-full max-w-[550px] ">
          
            <div className="mb-5">
              <p className="text-lg font-extrabold bg-blue-950 mb-6">
                {type} Blog
              </p></div>
              <form onSubmit={handleSubmit}>
            <div>  <label className="mb-3 block text-base font-medium text-[#07074D]">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              required/>
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Choose file
              </label>
              <input
                type="file"
                name="image"
                id="image"
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Subtitle
              </label>
              <input
                type="text"
                name="subtitle"
                id="subtitle"
                placeholder="Enter your subtitle"
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
             required />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Category
              </label>
              <input
                type="text"
                name="category"
                id="category"
                placeholder="Enter your category"
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
             required />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Description
              </label>
              <textarea
                rows="4"
                name="description"
                id="description"
                placeholder="Type your message"
                onChange={handleChange}
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              required></textarea>
            </div>
            <div>
              <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
