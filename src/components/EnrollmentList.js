import React from "react";
import EnrolledCourse from "./EnrolledCourse";

const EnrollmentList = ({ enrolledCourses, onDropCourse }) => {
 

  const totalCreditHours = enrolledCourses.reduce((total, course) => {
    const creditHours = parseInt(course.duration.charAt(0), 10) || 0;
    return total + creditHours;
  }, 0);


  return (
    <div className="enrollment-list">
      <h3>Total Credit Hours: {totalCreditHours}</h3>
      <h2>Enrolled Courses</h2>
      <table className="cv">
        <tbody>
          {enrolledCourses.map((course) => (
            <EnrolledCourse course={course} onDrop={onDropCourse} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnrollmentList;
