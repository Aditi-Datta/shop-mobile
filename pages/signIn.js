import Image from "next/image"
import Navbar from "../components/Navbar"
import backgroundImage from "../public/signInbg1.jpg";
function signIn() {
  return (
    <>
      <Navbar />
      <div style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>


        <div className="
        max-w-2xl mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl"
          style={{
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",



          }}
        >
          <div class="md:flex">
            <div class="md:shrink-0">
              <h1 style={{ color: 'white', fontSize: '70px', fontWeight: 'bold', }} className="p-8">Welcome!</h1>
            </div>

            <div className=" mx-5 py-12">
              <div>
                <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '20px',  textAlign: 'center' }}>SignIn</h1>
              </div>
              <form>
                <label class="block">
                  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700" style={{color: 'white',}}>
                    User Name
                  </span>
                  <input type="text" name="name" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none 
             focus:border-sky-500 focus:ring-sky-500 block
             w-full rounded-md sm:text-sm focus:ring-1" placeholder="your name" />
                  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700" style={{color: 'white',}}>
                    Password
                  </span>
                  <input type="text" name="name" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none 
             focus:border-sky-500 focus:ring-sky-500 block
             w-full rounded-md sm:text-sm focus:ring-1" placeholder="your name" />
                </label>
                <button className="btn btn-sm bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-24 mt-4">Submit</button>

              </form>
            </div>
          </div>
        </div>


      </div>
    </>

  )
}

export default signIn