import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
const App = () => {
    const [play, setPlay] = useState(false);


  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>  
        <Title subTitle='Our Program' title='What We Offer'/>
        <Programs/>
        <About setPlay={setPlay}/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='Testimonials' title='What Students Say'/>
        <Testimonials/>
        <Title subTitle='Contact US' title='Get In Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer play={play} setPlay={setPlay}/>
    </div>
  )
}

export default App