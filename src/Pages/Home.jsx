import React, { useState,useEffect } from 'react';
import { Carousel } from '../Components/Carousel'
import { Aboutus } from './Aboutus'
import { Count } from '../Components/Count'
import { Courses } from './Courses';
import WhatsAppButton from '../Components/WhatsappButton';

export const Home = () =>{
  useEffect(()=>{
    window.scroll(0,0);
  },[]);
  return (
    <div>
    <Carousel />
    <Aboutus />
    <Courses />
    <WhatsAppButton />
    
    </div>
  )
}

