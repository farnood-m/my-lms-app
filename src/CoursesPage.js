import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseCatalog from "./components/CourseCatalog";
import EnrollmentList from "./components/EnrollmentList";
import { createContext, useState } from "react";

export const CoursesContext = createContext();

const CoursesPage = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  return (
    <CoursesContext.Provider
      value={{
        enrolledCourses,
        setEnrolledCourses,
      }}
    >
      <div className="courses-page">
        <Header />
        <div className="content index">
          <CourseCatalog />
          <EnrollmentList />
        </div>
        <Footer />
      </div>
    </CoursesContext.Provider>
  );
};

export default CoursesPage;
