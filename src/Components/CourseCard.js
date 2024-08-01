import React from 'react';

function CourseCard({ title, image }) {
  return (
    <div className="course-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default CourseCard;