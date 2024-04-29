import "./index.css";

export default function App() {
  return (
    <div className="w-[42.5rem] h-[100dvh] bg-black">
      <div className="w-[100%] h-[4rem]  flex justify-center items-center">
        <img 
        className="w-[3rem] h-[3rem]"
        src="https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0-300x300.jpg" alt="image loading" />
      </div>
      <div>
        <h1 className="text-white mt-[1rem] mb-[2rem] ml-[2.8rem]">
          <span className="text-neutral-300 font-bold text-3xl">Create your account</span>
        </h1>
        <Input />
        <Input />
        <div>
          <button
           className="outline-none text-blue-400 w-[85%] mx-[3rem] flex justify-end">
            Use email instead
           </button>
           </div>
        <div className="flex justify-center">
          <div className="w-[85%]">
          <h2><span className="text-neutral-200 font-bold">Date of birth</span></h2>
          <p className="text-neutral-400 mt-[0.5rem] mb-[1rem]">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
           <div className="">
           <div>
           <select className="w-[42%] h-[3.7rem] bg-black text-neutral-400 outline-none border border-neutral-500" name="" id="">
              <option value="jan">january</option>
              <option value="">February</option>
              <option value="">March</option>
              <option value="">April</option>
            </select>
           </div>
           <div>
           <select className="w-[21%] h-[3.7rem] bg-black text-neutral-400 outline-none border border-neutral-500" name="" id="">
              <option value="jan">january</option>
              <option value="">February</option>
              <option value="">March</option>
              <option value="">April</option>
            </select>
           </div>
            <div>
            <select className="w-[21%] h-[3.7rem] bg-black text-neutral-400 outline-none border border-neutral-500" name="" id="">
              <option value="jan">january</option>
              <option value="">February</option>
              <option value="">March</option>
              <option value="">April</option>
            </select>
            </div>
           </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        {/* submit button */}
        <button        
        className="outline-none  bg-neutral-500 w-[75%] h-[3.2rem] mx-[3rem] my-[0.5rem] rounded-3xl required:*: absolute bottom-0 ">
 hello
        </button>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div>
      <input type="text"
       placeholder="    Name" 
       className="outline-none w-[85%] h-[3.7rem] mx-[3rem] my-[1rem]  border border-neutral-700 bg-black required:*: "
       />
    </div>
  );
}
