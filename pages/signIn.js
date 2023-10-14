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
        rounded-xl shadow-md overflow-hidden  max-w-2xl mx-auto md:max-w-2xl "
          style={{
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",



          }}
        >
          <div class="md:flex">
            
            <div class="md:shrink-0">
              <h1 style={{ color: 'white', fontSize: '70px', fontWeight: 'bold', }} className="px-8 pt-8">Welcome!</h1>
              <p style={{color: 'white', paddingLeft: '12%', 
              
              
              }}>Discover a world of limitless possibilities <br></br> in our online store. 🌟 We're thrilled to have <br></br> you here, and we can't wait to help you <br></br> find exactly what you're looking for.</p>
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
                <button className="btn btn-block bg-teal-950 hover:bg-teal-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-24 mt-4" style={{color:'#c7e32d'}}>Submit</button>

              </form>
            </div>
          </div>
        </div>


      </div>
    </>

  )
}

export default signIn