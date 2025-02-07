import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Form = ({type,onSubmit}) => {

  const [data,setData] = useState({
  email:'',
  username:'',
  password:'',
  });

  const handleChange=(e)=>{
   const {name,value} = e.target 
   setData({
    ...data,
    [name] : value
   })
   console.log(data);
  }
  const handleSubmit=(e)=>{
    console.log('form submission triggered');
     e.preventDefault();
     onSubmit(data);
  }
  return (
    <div>
      <div>
       <div >

{/* <!-- component --> */}
<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold">

                    {type === 'Login' ? 'Login here to continue' : 'Register here'}
                    </h1>
				</div>
        <form onSubmit={handleSubmit}>
				<div className="divide-y divide-gray-200">
					<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div className="relative">
							<input autocomplete="off" id="email" name="email" 
                            type="text"
                             class="peer placeholder-transparent h-10 w-full border-b-2
                              border-gray-300 text-gray-900 focus:outline-none 
                              focus:borer-rose-600" placeholder="Email address" onChange={handleChange} required/>
							<label for="email" class="absolute left-0 -top-3.5
                             text-gray-600 text-sm peer-placeholder-shown:text-base
                              peer-placeholder-shown:text-gray-440
                               peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5
                                peer-focus:text-gray-600 peer-focus:text-sm" >Email Address</label>
						</div>
						<div className="relative">
							<input autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" onChange={handleChange} required/>
							<label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>
                        {type=== 'Register' && (
                            <div className="relative">
							<input autocomplete="off" id="email" name="username" 
                            type="text"
                             class="peer placeholder-transparent h-10 w-full border-b-2
                              border-gray-300 text-gray-900 focus:outline-none 
                              focus:borer-rose-600" placeholder="Username" onChange={handleChange} required />
							<label for="username" class="absolute left-0 -top-3.5
                             text-gray-600 text-sm peer-placeholder-shown:text-base
                              peer-placeholder-shown:text-gray-440
                               peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5
                                peer-focus:text-gray-600 peer-focus:text-sm">Username</label>
						</div>
                        )}
						<div className="relative">
							<button className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
						</div>
					</div>
				</div>
        { type==='Register'?
        <Link to='/login' style={{color:'blue'}}>Go to Login</Link>
      :<Link to='/register' style={{color:'blue'}}>Go to Register page</Link>}
        
        </form>
			</div>
		</div>
	</div>
</div>
      {/* <!-- component --> */}
{/* <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border text-white shadow-lg shadow-pink-500/40">
    <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
      Sign In
    </h3>
  </div>
  <div className="flex flex-col gap-4 p-6">
    <div className="relative h-11 w-full min-w-[200px]">
      <input
        className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        
      />
      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        Email
      </label>
    </div>
    <div className="relative h-11 w-full min-w-[200px]">
      <input
        className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        
      />
      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        Password
      </label>
    </div>
    <div className="-ml-2.5">
      <div className="inline-flex items-center">
        <label
          className="relative flex cursor-pointer items-center rounded-full p-3"
          
          data-ripple-dark="true"
        >
          <input
            type="checkbox"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
            id="checkbox"
          />
          <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              
            >
              <path
                
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                
              ></path>
            </svg>
          </span>
        </label>
        <label
          className="mt-px cursor-pointer select-none font-light text-gray-700"
          
        >
          Remember Me
        </label>
      </div>
    </div>
  </div>
  <div className="p-6 pt-0">
    <button
      className="block w-full select-none rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      Sign In
    </button>
    <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
      Don't have an account?
      <a
        href="#signup"
        className="ml-1 block font-sans text-sm font-bold leading-normal text-pink-500 antialiased"
      >
        Sign up
      </a>
    </p>
  </div>
</div>

{/* <div className="w-full pt-5 px-4 mb-8 mx-auto ">
    <div className="text-sm text-gray-700 py-1">
        Made with <a className="text-gray-700 font-semibold" href="https://www.material-tailwind.com/docs/html/card?ref=tailwindcomponents" target="_blank">Material Tailwind</a> by <a href="https://www.creative-tim.com?ref=tailwindcomponents" class="text-gray-700 font-semibold" target="_blank"> Creative Tim</a>.
    </div>
</div> */}

{/* <!-- stylesheet --> */}
{/* <link
  rel="stylesheet"
  href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
/> */}

{/* <!-- from cdn --> */}
{/* <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script> */} */}
    </div>
    </div>
    </div>
  )
}

export default Form
