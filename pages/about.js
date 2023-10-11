import Navbar from "../components/Navbar"
import Footer from "../components/footer"
import backgroundImage from "../public/about-banner2.png"
function about() {
  return (
    <>
    <Navbar/>
    <div style={{
      backgroundImage: `url(${backgroundImage.src})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      
      width: "100vw",
      height: "100vh",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'rgba(70,100,19, 0.7)',
      
    }}
    
    
    >
    
    </div>
    <h1>Hello from about page</h1>
    <Footer/>
    </>
  )
}

export default about