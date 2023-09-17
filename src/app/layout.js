"use client";
import "./globals.css";
import "../assets/css/styles.css";
// import { Inter } from "next/font/google";
import Header from "../component/Header";
import { ThemeProvider } from "next-themes";
import SmoothScroll from "../component/SmoothScroll"; 
// const inter = Inter({ subsets: ["latin"] }); 
// import { TweenLite } from 'gsap';

export const metaData = {
  title: "Vercel",
  description: "vercel demo next app",
}; 

export default function RootLayout({ children }) { 
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden" >
      <body>
        <Header />
        <SmoothScroll>
          <ThemeProvider theme="light" enableSystem={false} attribute="class">
            {children}
          </ThemeProvider>  
        </SmoothScroll>
      </body>
    </html>
  );
}
