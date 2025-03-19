import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseCatalog from "./components/CourseCatalog";
import EnrollmentList from "./components/EnrollmentList";
import courses from "./data/courses";
import { useState, useEffect } from "react";

const CoursesPage = () => {
  const [availableCourses, setAvailableCourses] = useState(() => {
    const storedCourses = localStorage.getItem("availableCourses");
    return storedCourses ? JSON.parse(storedCourses) : courses;
  });

  const [enrolledCourses, setEnrolledCourses] = useState(() => {
    const storedEnrolled = localStorage.getItem("enrolledCourses");
    return storedEnrolled ? JSON.parse(storedEnrolled) : [];
  });

  useEffect(() => {
    localStorage.setItem("availableCourses", JSON.stringify(availableCourses));
  }, [availableCourses]);

  useEffect(() => {
    localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  const handleEnrollCourse = (course) => {
    setAvailableCourses((prev) => prev.filter((c) => c.id !== course.id));
    setEnrolledCourses((prev) => [...prev, course]);
  };

  const handleDropCourse = (courseId) => {
    const droppedCourse = enrolledCourses.find((c) => c.id === courseId);
    setEnrolledCourses((prev) => prev.filter((c) => c.id !== courseId));
    setAvailableCourses((prev) => [...prev, droppedCourse]);
  };

  return (
    <div className="courses-page">
      <Header />
      <div className="content index">
        <CourseCatalog
          courses={availableCourses}
          onEnroll={handleEnrollCourse}
        />
        <EnrollmentList
          enrolledCourses={enrolledCourses}
          onDropCourse={handleDropCourse}
        />
      </div>
      <Footer />
    </div>
  );
};
export default CoursesPage;
