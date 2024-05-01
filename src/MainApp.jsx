import "./index.css";
import App from "./App";


export default function MainApp (){
     return(
        <div className="bg-black w-[100dvw] h-[46rem] lg:flex ">
             <div className=" h-[4rem] ml-[7dvw] md:ml-[21dvw] lg:ml-[5dvw] lg:max-w-[40dvw] lg:h-[45rem] lg:flex lg:items-center ">
               <img 
               className="w-[5rem] h-[5rem] lg:hidden"
               src="https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0-300x300.jpg" alt="image loading" />
               <img className="hidden lg:inline-block  "
                src="https://www.bolnews.com/wp-content/uploads/2023/08/FotoJet-15-635x430.jpg" alt="" />
             </div>
          <div className="ml-[9dvw] md:ml-[23dvw] lg:ml-[10dvw] ">
                <div className="mt-[4rem] text-neutral-300 text-7xl  w-[25rem] font-[700] lg:mt-[4rem] lg:w-[40rem] ">
                       <span>
                          Happening 
                          now
                       </span>
                  </div>
                  <div className=" mt-[4rem] text-neutral-300 text-4xl font-bold">
                      <span>
                          Join today .
                      </span>
                  </div>
                  <div className="mt-[2rem]">
                    <button 
                    className="w-[18rem] h-[2.5rem] bg-neutral-100 rounded-3xl font-semibold flex justify-center items-center" >
                     <img className="w-[1.5rem] mr-[0.5rem]" src="https://p7.hiclipart.com/preview/543/934/536/google-logo-g-suite-google-thumbnail.jpg" alt="" />
                     <span>Sign up with google</span>
                    </button>
                    <button 
                    className="w-[18rem] h-[2.5rem] mt-[0.5rem] bg-neutral-100 rounded-3xl font-semibold flex justify-center items-center" >
                     <img className="w-[1.8rem] mr-[0.5rem]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1HLu1bWUv4RV-IlX9XQ1K3aw8QStU3umivJN-zCk_xw&s" alt="" />
                     <span>Sign up with apple</span>
                    </button>
                    <div className="w-[18rem] h-[2rem] flex items-center">
                        <div className="w-[18rem] h-[1px] bg-neutral-700"></div>
                    </div>
                    <button 
                    // onClick={createAccount}
                    className="w-[18rem] h-[2.5rem] text-white  bg-blue-500 rounded-3xl font-bold text-[1.1rem] flex justify-center items-center" >
                     <span>Create account</span>
                    </button>
                  </div>
                  <div className="w-[19rem] text-neutral-400 mt-[0.4rem] text-[0.7rem]">
                    <span>By signing up, you agree to the <span className="text-blue-500">Terms of Service</span> and <span className="text-blue-500">Privacy Policy</span>, including <span className="text-blue-500">Cookie Use.</span></span>
                  </div>
                  <div className="mt-[3rem]">
                      <h1 className=" text-neutral-300 font-bold text-lg"><span> Already have an account?</span></h1>
                      <button
                      className="w-[18rem] rounded-2xl mt-[1rem] h-[2.5rem] outline-none border border-neutral-600 bg-black flex justify-center items-center">
                     <span className="text-blue-500">Sign in</span>
                      </button>
                  </div>
          </div>
          {/* <App/> */}
        </div>
     )
}

