import Header from "./components/Header";
import Footer from "./components/Footer";
const CoursesPage = () => {
  return (
    <div className="courses-page">
      <Header />
      <div className="content">
        <p>this is courses</p>
        {/* <CourseCatalog />
        <EnrollmentList /> implement*/}
      </div>
      <Footer />
    </div>
  );
};
export default CoursesPage;
