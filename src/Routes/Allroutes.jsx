import React from "react";
import {Route,Routes} from "react-router-dom"
import { Home } from "../Pages/Home";
import { Aboutus } from "../Pages/Aboutus";
import { Contactus } from "../Pages/Contactus";
import { Verification } from "../Pages/Verification";
import { Gallery } from "../Pages/Gallery";
import { Courses } from "../Pages/Courses";
import CourseDetail from "../Components/CourseDetail";

export const Allroutes = () =>{
    return(
        <Routes>
        <Route path='/' element={<Home/>}/>
       <Route path="/Aboutus" element={<Aboutus/>}/>
       <Route path='/Contactus' element={<Contactus/>}/>
       <Route path='/Courses' element={<Courses/>}/>
       <Route path='/verify' element={<Verification/>}/>
       <Route path='/Gallery' element={<Gallery/>}/>
       <Route path="/course/:courseId" element={<CourseDetail />} />
        </Routes>

    )

}