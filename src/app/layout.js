"use client";
import "./globals.css";
import "../assets/css/styles.css";
import { Inter } from "next/font/google";
import Header from "../component/Header";
import { ThemeProvider } from "next-themes";
import SmoothScroll from "../component/SmoothScroll"; 
const inter = Inter({ subsets: ["latin"] }); 
// import { TweenLite } from 'gsap';

export const metadata = {
  title: "Vercel",
  description: "vercel demo next app",
}; 

export default function RootLayout({ children }) { 
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden" >
      <body className={inter.className} >
        <Header />
        {/* <div ref={jsScrollRef}> */}
        <SmoothScroll>
          <ThemeProvider enableSystem={true} attribute="class" >
            {children}
          </ThemeProvider>  
        </SmoothScroll>
        {/* </div> */}
      </body>
    </html>
  );
}