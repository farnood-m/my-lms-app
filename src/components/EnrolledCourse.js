const EnrolledCourse = ({ course, onDrop }) => {
  const { id, name, duration } = course;
  const creditHours = parseInt(duration.match(/^\d+/)?.[0], 10) || 0;

  return (
    <tr className="enrolled-course" id={id}>
      <td>
        <h3>{name}</h3>
        <p>Credit Hours: {creditHours}</p>
        <button className="drop-button" onClick={() => onDrop(id)}>
          Drop Course
        </button>
      </td>
    </tr>
  );
};

export default EnrolledCourse;
