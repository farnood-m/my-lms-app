import React, { useContext, useEffect } from "react";
import EnrolledCourse from "./EnrolledCourse";
import { CoursesContext } from "../CoursesPage";

const EnrollmentList = () => {
  const { enrolledCourses, setEnrolledCourses } = useContext(CoursesContext);

  useEffect(() => {
    const storedEnrolled = localStorage.getItem("enrolledCourses");
    if (storedEnrolled) {
      setEnrolledCourses(JSON.parse(storedEnrolled));
    }
  }, [setEnrolledCourses]);

  useEffect(() => {
    if (enrolledCourses.length > 0) {
      localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
    } else {
      localStorage.removeItem("enrolledCourses"); 
    }
  }, [enrolledCourses]);

  const totalCreditHours = enrolledCourses.reduce((total, course) => {
    const creditHours = parseInt(course.duration.match(/^\d+/)?.[0], 10) || 0;
    return total + creditHours * course.count;
  }, 0);

  const handleDropCourse = (courseId) => {
    setEnrolledCourses((prev) => {
      const existingCourse = prev.find((c) => c.id === courseId);
      if (existingCourse && existingCourse.count > 1) {
        return prev.map((c) =>
          c.id === courseId ? { ...c, count: c.count - 1 } : c
        );
      } else {
        return prev.filter((c) => c.id !== courseId);
      }
    });
  };

  return (
    <div className="enrollment-list">
      <h2 className="enrollment-title text-left">Enrolled Courses :</h2>
      <h3 className="enrollment-total text-left">
        Total Credit Hours :{totalCreditHours}
      </h3>
      <div className="enrolled-courses">
        {enrolledCourses.map((course) => (
          <div className="enrolled-course-item" key={course.id}>
            <EnrolledCourse
              course={course}
              onDrop={() => handleDropCourse(course.id)}
            />
            <p className="course-count">Count: {course.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrollmentList;
