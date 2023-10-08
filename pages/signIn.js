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


        <h1 style={{color:'white'}}>Please SignIn here</h1>
      </div>
    </>

  )
}

export default signIn