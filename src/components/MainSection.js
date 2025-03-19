import { useEffect, useState } from "react";
import courses from "../data/courses";
import course1 from "../images/course1.jpg";
import testimonials from "../data/testimonials";

const MainSection = () => {
  const [shuffledCourses, setShuffledCourses] = useState([]);
  const [shuffledTestimonials, setShuffledTestimonials] = useState([]);

  useEffect(() => {
    const shuffleArray = (array, count) => {
      return array.sort(() => Math.random() - 0.5).slice(0, count);
    };

    setShuffledCourses(shuffleArray([...courses], 3));
    setShuffledTestimonials(shuffleArray([...testimonials], 2));
  }, []);

  return (
    <main className="index">
      <section id="about">
        <h2>About LMS</h2>
        <p>
          The Learning Management System (LMS) helps students and instructors
          manage courses, quizzes, and track performance efficiently.
        </p>
      </section>
      <h2>Available Courses</h2>
      <table className="cv">
        <tr className="cv-row-enrolled">
          {shuffledCourses.map((course) => (
            <td className="cv-item" key={course.id}>
              <div>
                <img src={course1} alt={course.name} />
                <p>{course.name}</p>
                <p className="text-left">Instructor: {course.instructor}</p>
                <p className="text-left">Duration: {course.duration}</p>
                <p className="text-left">Description: {course.description}</p>
                <p className="text-left">Course Code: {course.id}</p>
              </div>
            </td>
          ))}
        </tr>
      </table>
      <h2>Student Testimonials</h2>
      <div className="testimonials-container">
        {shuffledTestimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={`testimonial-${index}`}>
            <p className="testimonial-student">
              <strong>Student Name:</strong> {testimonial.studentName}
            </p>
            <p className="testimonial-course">
              <strong>Course Name:</strong> {testimonial.courseName}
            </p>
            <p className="testimonial-review">
              <strong>Review:</strong> {testimonial.review}
            </p>
            <p className="testimonial-rating">
              <strong>Rating:</strong>{" "}
              <span>{"★".repeat(testimonial.rating)}</span>
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainSection;
