import Navbar from "../components/Navbar"
import Footer from "../components/footer"
import backgroundImage from "../public/about-banner2.png"
function about() {
  return (
    <>
      <Navbar />
      <div style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",

        width: "100vw",
        height: "100vh",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(70,100,19, 0.7)',

      }}
      >

      <div style={{textAlign:'left', marginLeft:'-620px'}}>
      <h1 style={{fontSize: '40px', fontWeight: 'bold',}}>Get to Know Us</h1>
          <h3 >"This is crucial for establishing trust, building <br></br> brand identity, and providing essential information <br></br> about your business to potential customers" </h3>
          <button className="btn btn-outline btn-wide bg-teal-950 " style={{color:'#c7e32d' ,marginTop:'5%'}}>Learn More</button>
        </div>
       
      </div>
     
      <Footer />
    </>
  )
}

export default about