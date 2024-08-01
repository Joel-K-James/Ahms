import React, { useState, useEffect, useRef } from 'react';
import "../Styles/Count.css";
import CountUp from 'react-countup';
import Ab from "../Images/About2.jpg";

export const Count = () => {
    const [isVisible, setIsVisible] = useState(false);
    const countSectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    // Disconnect observer when element is visible, so it doesn't re-observe
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }  // Trigger when at least 50% of the element is visible
        );

        if (countSectionRef.current) {
            observer.observe(countSectionRef.current);
        }

        return () => {
            if (countSectionRef.current) {
                observer.unobserve(countSectionRef.current);
            }
        };
    }, []);

    return (
        <div className="statistics-section" ref={countSectionRef}>
            <h2 className="title">Statistics</h2>
            <h3 className="subtitle">We have over 4 years Experience</h3>
            <div className="stats-container">
                <div className="stat-item">
                    <div className="stat-circle"></div>
                    {isVisible && <CountUp end={1500} duration={2} />}
                    <p>Total Students</p>
                </div>
                <div className="stat-item">
                    <div className="stat-circle"></div>
                    {isVisible && <CountUp end={10} duration={2} />}
                    <p>Total Faculties</p>
                </div>
                <div className="stat-item">
                    <div className="stat-circle"></div>
                    {isVisible && <CountUp end={30} duration={2} />}
                    <p>Courses</p>
                </div>
            </div>
        </div> 
    );
};

