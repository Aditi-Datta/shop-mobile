import Link from "next/link"

function Navbar() {
    return (
        <>
        <div className="navbar bg-teal-950 " style={{color:'white'}}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52" style={{color:'black'}}>
              <li>
              <Link href="/">
              Home
              </Link>
              </li>
              <li>
              <Link href="/about">
                About</Link> 
              </li>
              <li><Link href="/products">Products</Link> </li>
              <li>
              <Link href="/contact">Contact</Link></li>
              <li><Link href="/signIn">SignIn</Link> </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">shopMobile</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/">Home</Link> </li>       
            <li><Link href="/about">About</Link> </li>
            <li><Link href="/products">Products</Link> </li>
            <li><Link href="/contact">Contact</Link> </li>
            <li><Link href="/signIn">SignIn</Link> </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">signout</a>
        </div>
      </div>


        </>
    )
}

export default Navbar