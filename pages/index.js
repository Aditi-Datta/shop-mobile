import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
   <>
   <div className='bg-teal-950'>
   
   
   <Navbar/>
   <h1 className='text-yellow-500'>Hello from Online Shop in Bangladesh</h1>
   
   </div>
   </>
  )
}
