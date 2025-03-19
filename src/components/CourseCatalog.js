import CourseItem from "./CourseItem";

const CourseCatalog = ({ courses, onEnroll }) => {
  

  const rows = courses.reduce((acc, course, index) => {
    const rowIndex = Math.floor(index / 3);
    if (!acc[rowIndex]) acc[rowIndex] = [];
    acc[rowIndex].push(course);
    return acc;
  }, []);

  return (
    <>
      <h2>Course Catalog</h2>
      <table className="cv">
        <tbody>
          {rows.map((row, i) => (
            <tr className="cv-row" key={i}>
              {row.map((course) => (
                <CourseItem
                  course={course}
                  onEnroll={onEnroll}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CourseCatalog;
