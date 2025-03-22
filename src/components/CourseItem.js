import React, { useState, useContext } from "react";
import course1 from "../images/course1.jpg";
import { CoursesContext } from "../CoursesPage";

const CourseItem = ({ course }) => {
  const { id, name, instructor, description, duration } = course;
  const [showDescription, setShowDescription] = useState(false);
  const {setEnrolledCourses } = useContext(CoursesContext);

  const handleEnroll = () => {
    setEnrolledCourses((prev) => {
      const existingCourse = prev.find((c) => c.id === id);
      if (existingCourse) {
        return prev.map((c) =>
          c.id === id ? { ...c, count: c.count + 1 } : c
        );
      } else {
        return [...prev, { ...course, count: 1 }];
      }
    });
  };

  return (
    <td className="cv-item" id={id}>
      <div
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
      >
        <h3>Course Name: {name}</h3>
        <img src={course1} alt="course" />
        <p className="text-left">Instructor: {instructor}</p>
        <p className="text-left">Duration: {duration}</p>
        <p className="text-left">Course Code: {id}</p>
        {showDescription && (
          <p className="text-left">Description: {description}</p>
        )}
        <button className="enroll-button" onClick={handleEnroll}>
          Enroll Now
        </button>
      </div>
    </td>
  );
};

export default CourseItem;
