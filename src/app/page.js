"use client"
import React from 'react'
import "../assets/css/styles.css";
import Vercel from "../component/Vercel-Journey";
import Vercelway from "../component/vercel-way";
import Frameworks from "../component/Frameworks";
import Preview from "../component/Preview";
import Ship from "../component/ship";
import Scroll from "../component/scroll";
import Footer from "../component/Footer";
import Hero from "../component/Hero";  

const Home = () => { 
  
   return (
    <main className="scroll-smooth pt-[70px]"> 
      <Hero />
      <Vercelway />
      <Frameworks />
      <Preview />
      <Ship />
      <Scroll />
      <Vercel />
      <Footer /> 
    </main>
  )
}

export default Home 
