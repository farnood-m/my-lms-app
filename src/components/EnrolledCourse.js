const EnrolledCourse = ({ course, onDrop }) => {
  const { id, name, duration } = course;
  const creditHours = parseInt(duration.match(/^\d+/)?.[0], 10) || 0;

  return (
    <div className="enrolled-course" id={id}>
      <h3 className="course-name">{name}</h3>
      <p className="course-credit-hours">Credit Hours: {creditHours}</p>
      <button className="drop-button" onClick={() => onDrop(id)}>
        Drop Course
      </button>
    </div>
  );
};

export default EnrolledCourse;
