import React, { useState,useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close'
import "../Styles/Gallery.css"
import img1 from "../Images/1.jpg"
import img2 from "../Images/2.jpg"
import img3 from "../Images/3.jpg"
import img4 from "../Images/4.jpg"
import img5 from "../Images/5.jpg"
import img6 from "../Images/6.jpg"
import img7 from "../Images/7.jpg"
import img8 from "../Images/8.jpg"
import img9 from "../Images/9.jpg"
import img10 from "../Images/10.jpg"
import img11 from "../Images/11.jpg"
import img12 from "../Images/12.jpg"
import img13 from "../Images/13.jpg"
import img14 from "../Images/14.jpg"
import img15 from "../Images/15.jpg"
import img16 from "../Images/16.jpg"
import img17 from "../Images/17.jpg"
import img18 from "../Images/18.jpg"
import img19 from "../Images/19.jpg"
import img20 from "../Images/20.jpg"
import img21 from "../Images/21.jpg"
import img22 from "../Images/22.jpg"
import img23 from "../Images/23.jpg"
import img24 from "../Images/24.jpg"
import img25 from "../Images/25.jpg"
import img26 from "../Images/26.jpg"


export const Gallery = () =>{
  useEffect(()=>{
    window.scroll(0,0);
  },[]);
 let data =[
  {
    id:1,
    imgSrc:img1,
  },
  {
    id:2,
    imgSrc:img2,
  },
  {
    id:3,
    imgSrc:img3,
  },
  {
    id:4,
    imgSrc:img4,
  },
  {
    id:5,
    imgSrc:img5,
  },
  {
    id:6,
    imgSrc:img6,
  },
  {
    id:7,
    imgSrc:img7,
  },
  {
    id:8,
    imgSrc:img8,
  },
  {
    id:9,
    imgSrc:img9,
  },
  {
    id:10,
    imgSrc:img10,
  },
  {
    id:11,
    imgSrc:img11,
  },
  {
    id:12,
    imgSrc:img12,
  },
  {
    id:13,
    imgSrc:img13,
  },
{
    id:14,
    imgSrc:img14,
  },
  {
    id:15,
    imgSrc:img15,
  },
  {
    id:16,
    imgSrc:img16,
  },
  {
    id:17,
    imgSrc:img17,
  },
  {
    id:18,
    imgSrc:img18,
  },
  {
    id:19,
    imgSrc:img19,
  },
  {
    id:20,
    imgSrc:img20,
  },
  {
    id:21,
    imgSrc:img21,
  },
  {
    id:22,
    imgSrc:img22,
  },
  {
    id:23,
    imgSrc:img23,
  },
  {
    id:24,
    imgSrc:img24,
  },
  {
    id:25,
    imgSrc:img25,
  },
  {
    id:26,
    imgSrc:img26,
  },
 ]
 const [model, setModel]= useState(false);
 const [temp,setTemp]= useState('');
const getImg = (imgSrc) =>{
    setTemp(imgSrc);
    setModel(true);
}

return (
  <section className='gal'><div className={model? "model open":"model"}>
    <img src={temp} />
    <CloseIcon onClick={() => setModel(false)} />
  </div>
   <div className='gallery'>
    {data.map((item, index)=>{
      return(
        <div className='pics' key={index} onClick={()=>getImg(item.imgSrc)}>
          <img src={item.imgSrc} style={{width:'100%'}} />
        </div>
      )

    })}

   </div>
   </section>
);
};

