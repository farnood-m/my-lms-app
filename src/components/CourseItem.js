import React, { useState } from "react";
import course1 from "../images/course1.jpg";

const CourseItem = ({ course, onEnroll }) => {
  const { id, name, instructor, description, duration } = course;
  const [showDescription, setShowDescription] = useState(false);

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
        <button className="enroll-button" onClick={() => onEnroll(course)}>
          Enroll Now
        </button>
      </div>
    </td>
  );
};

export default CourseItem;
