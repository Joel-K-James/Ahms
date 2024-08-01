import React from 'react';
import { useParams } from 'react-router-dom';
import coursesData from '../Components/CoursesData.js';
import '../Styles/CourseDetail.css'; 

const CourseDetail = () => {
    const { courseId } = useParams();
    const course = coursesData.find(c => c.id === courseId);

    if (!course) {
        return <div>Course not found</div>;
    }

    
    const whatsappUrl = `https://wa.me/9656216164?text=I'm%20interested%20in%20${encodeURIComponent(course.title)}`;

    return (
        <section className='detail'>
        <div className="course-detail-container">
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-info">
                <h1>{course.title}</h1>
                <p>{course.description}</p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="enquire-button">
                    Enquire Now
                </a>
            </div>
        </div>
        </section>
    );
};

export default CourseDetail;



