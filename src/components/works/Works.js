import ProjectExam from "./ProjectExam";
import SemesterProject from "./SemesterProject";

function Works() {
  return (
    <>
      <div className="works">
        <ProjectExam></ProjectExam>
        <SemesterProject></SemesterProject>
        <SemesterProject></SemesterProject>
      </div>
    </>
  );
}

export default Works;
