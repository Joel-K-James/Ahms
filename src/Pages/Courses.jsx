import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from '../Components/CourseCard';
import "../Styles/Courses.css";
import taping from "../Images/Taping-therapy.jpg";
import DRY from "../Images/Dry-Needling.jpeg";
import IASTM from "../Images/IASTM.jpg";
import CUPPING from "../Images/Cupping.webp";

export const Courses = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const courses = [
    { id: 'taping', title: 'TAPING', image: taping },
    { id: 'dry-needling', title: 'DRY NEEDLING', image: DRY },
    { id: 'iastm', title: 'IASTM', image: IASTM },
    { id: 'cupping', title: 'CUPPING', image: CUPPING },
  ];

  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <section className='seccourse'>
      <section className="courses">
        <h2 className="section-title">OUR COURSES</h2>
        <h1 className="main-title">We Offer the Best Career</h1>
        
        <div className="course-grid">
          {courses.map((course, index) => (
            <div onClick={() => handleCourseClick(course.id)} key={index}>
              <CourseCard title={course.title} image={course.image} />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};
