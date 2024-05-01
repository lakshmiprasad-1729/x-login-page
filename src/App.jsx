/* eslint-disable react/prop-types */
import { useState } from "react";
import "./index.css";

export default function App() {
  const [input,setinput]=useState("  Mobile Number");
  const [email,setEmail]=useState("Email");
  function ModeOfCommunication(){
     if(email==="Email"){
      setEmail("Mobile Number")
      setinput("   Email");
     }
     else{
      setEmail("Email");
      setinput("     Mobile Number")
     }
  }
  
  const months=["January","February","March","April","May","June","July","August","September","october","November","December"];
  return (
    <div className="max-w-[42.5rem] h-[100dvh] bg-black md:max-w-[35rem] md:h-[90dvh] md:m-auto md:mt-[2.5rem] md:rounded-xl ">
      <div className="w-[100%] h-[4rem]  flex justify-center items-center">
        <img 
        className="w-[3rem] h-[3rem]"
        src="https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0-300x300.jpg" alt="image loading" />
      </div>
      <div>
        <h1 className="text-white mt-[1rem] mb-[2rem] ml-[2.8rem]">
          <span className="text-neutral-300 font-bold text-3xl">Create your account</span>
        </h1>
        <Input InName="    Name"  />
        <Input InName={input} />
        <div>
          <button
           onClick={ModeOfCommunication}
           className="outline-none text-blue-400 w-[85%] mx-[3rem] flex justify-end">
            Use  {email} instead
           </button>
           </div>
      </div>
        <div className="ml-[2.7rem]">
          <div className="w-[85%]">
            <h2><span className="text-neutral-200 font-bold">Date of birth</span></h2>
            <p className="text-neutral-400 mt-[0.5rem] mb-[1rem]">
              This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
          </div>
          <div className=" w-[90%] flex justify-between">
           <select className="w-[42%] h-[3.7rem] bg-black text-neutral-400 outline-none border border-neutral-500" name="" id="">
           {months.map((month) => (
                            <option key={month} value={month}>
                            {month}
                            </option>
                        ))} 
            </select>
           <select className="w-[26%] h-[3.7rem] bg-black text-neutral-400 outline-none border border-neutral-500" name="" id="">
           
            </select>
            <select className="w-[26%] h-[3.7rem] bg-black text-neutral-400 outline-none border border-neutral-500" name="" id="">
             
            </select>
           </div>
        </div>
      <div className="flex justify-center">
        {/* submit button */}
        <button        
        className="outline-none  bg-blue-500  min-w-[15rem]  h-[3.2rem] mx-[3rem] my-[0.5rem] rounded-3xl required:*: absolute bottom-0 md:bottom-[2.5rem] ">
        <span className="text-neutral-200">Sign Up</span>
        </button>
      </div>
    </div>
  );
}

function Input({InName}) {
  return (
    <div>
      <input type="text"
       placeholder={InName}
       className="outline-none w-[85%] h-[3.7rem] mx-[3rem] my-[1rem]  border border-neutral-700 bg-black required:*: text-white "
       />
    </div>
  );
}
