import React from 'react'
import Image from "next/image";
import Friedman from '../assets/images/natfriedman-1.png'
import jordanwalke from '../assets/images/jordanwalke-2.png'
import navalravikant from '../assets/images/navalravikant-3.png'
import jessiefrazelle from '../assets/images/jessiefrazelle-4.png'
import ilyasukhar from '../assets/images/ilyasukhar-6.png'
import davidcramer from '../assets/images/davidcramer-6.png'
import anthonycasalena from '../assets/images/anthonycasalena-7.png'
import soleiocuervo from '../assets/images/soleiocuervo-8.png'
import matiaswoloski from '../assets/images/matiaswoloski-9.png'
import michaelstoppelman from '../assets/images/michaelstoppelman-10.png'
import petehunt from '../assets/images/petehunt-11.png'
import brendaneich from '../assets/images/brendaneich-12.png'
import sahillavingia from '../assets/images/sahillavingia-13.png'
import rasmusanderson from '../assets/images/rasmusanderson-14.png'
import benjamindecock from '../assets/images/benjamindecock-15.png'
import alexandrwang from '../assets/images/alexandrwang-16.png'
import karrisaarinen from '../assets/images/karrisaarinen-17.png'

const IndividualInvestors = () => {
    return (
        <div className='max-w-[1248px] w-full mx-auto mb-20'>
            <h2 className='lg:text-[40px] text-3xl font-bold text-center xl:mb-20 lg:mb-20 mb-12'>Individual Investors</h2>
            <div className='flex flex-wrap justify-center gap-2'>
                <div className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={Friedman}
                        alt=""
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>Nat Friedman</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>Former CEO of <a className='font-bold investirs-sec relative' href="#0">GitHub</a></p>
                </div>
                <div className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={jordanwalke}
                        alt=""
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>Jordan Walke</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>Creator of<a className='font-bold investirs-sec relative' href="#0"> React</a> </p>
                </div>
                <div className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={navalravikant}
                        alt=""
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>Naval Ravikant</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>Founder of<a className='font-bold investirs-sec relative' href="#0"> AngelList</a> </p>
                </div>
                <div className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={jessiefrazelle}
                        alt=""
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>Jessie Frazelle</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>Founder & CPO of<a className='font-bold investirs-sec relative' href="#0"> Oxide</a></p>
                </div>
                <div className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={ilyasukhar}
                        alt=""
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>Ilya Sukhar</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>Former Partner at<a className='font-bold investirs-sec relative' href="#0"> YC</a> </p>
                    <p className='text-sm font-normal'>Founder of <a className='font-bold investirs-sec relative' href="#0">Parse</a> </p>
                </div>
                <div className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={davidcramer}
                        alt=""
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>David Cramer</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>Founder and CEO of <a className='font-bold investirs-sec relative' href="#0"> Sentry</a> </p>
                </div>
                <div className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={anthonycasalena}
                        alt=""
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>Anthony Casalena</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>CEO of <a className='font-bold investirs-sec relative' href="#0">Squarespace</a> </p>
                </div>
                <div className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={soleiocuervo}
                        alt=""
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>Soleio Cuervo</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>Early design at <a className='font-bold investirs-sec relative' href="#0"> Facebook</a>and <a className='font-bold investirs-sec relative' href="#0">Dropbox</a></p>
                </div>
                <div className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={matiaswoloski}
                        alt=""
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>Matias Woloski</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>Founder & CTO of<a className='font-bold investirs-sec relative' href="#0"> Auth0</a> </p>
                </div>
                <div className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={michaelstoppelman}
                        alt=""
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>Michael Stoppelman</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>Former SVP at<a className='font-bold investirs-sec relative' href="#0"> Yelp </a>and <a href="#0" className='font-bold investirs-sec relative'>Google </a>engineer</p>
                </div>
                <div className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={petehunt}
                        alt=""
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>Pete Hunt</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>ormer Founder of Smyte and <a className='font-bold investirs-sec relative' href="#0"> Facebook </a>engineer</p>
                </div>
                <div className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={brendaneich}
                        alt=""
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>Brendan Eich</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>CEO of<a className='font-bold investirs-sec relative' href="#0"> Brave. </a>Co-founded Mozilla & Firefox. Created JavaScript.</p>
                </div>
                <div className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={sahillavingia}
                        alt=""
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>Sahil Lavingia</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>Founder & CEO of <a className='font-bold investirs-sec relative' href="#0"> Gumroad</a> </p>
                </div>
                <div className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={rasmusanderson}
                        alt=""
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>Rasmus Anderson</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>Early design at<a className='font-bold investirs-sec relative' href="#0"> Spotify </a>and <a href="#0" className='investirs-sec relative font-bold'>Figma.</a>Creator of Inter.</p>
                </div>
                <div className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={benjamindecock}
                        alt=""
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold whitespace-nowrap mt-4'>Benjamin De Cock</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>Early design at<a className='font-bold investirs-sec relative' href="#0"> Stripe</a> </p>
                </div>
                <div className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={alexandrwang}
                        alt=""
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>Alexandr Wang</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>CEO of<a className='font-bold investirs-sec relative' href="#0"> Scale</a> </p>
                </div>
                <div className='text-center my-4 max-w-[200px] w-full'>
                    <Image
                        src={karrisaarinen}
                        alt=""
                        className='w-[108px] grayscale-[1] mx-auto'
                    />
                    <h4 className='text-xl font-semibold tracking-[1.2px] whitespace-nowrap mt-4'>Karri Saarinen</h4>
                    <p className='text-sm font-normal mt-3 tracking-[1.1px]'>Founder & CEO of<a className='font-bold investirs-sec relative' href="#0"> Linear</a>Early design at <a href="#0"> Airbnb</a>and <a href="#0">Coinbase</a></p>
                </div>
            </div>
            
        </div>
    )
}

export default IndividualInvestors;