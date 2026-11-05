import Link from "next/link";
import { notFound } from "next/navigation";
import ProgressBar from "@/components/ProgressBar";
import StatusBadge from "@/components/StatusBadge";
import { getCourse, assignments, students } from "@/lib/data";

export default async function CourseDetailsPage({ params }) {
  const { id } = await params;
  const course = getCourse(id);
  if (!course) notFound();

  const courseAssignments = assignments.filter((a) => a.courseId === course.id);
  const enrolledCount = students.filter((s) => s.courses.includes(course.id)).length;

  return (
    <div>
      <Link href="/courses" className="link">
        ← Back to Courses
      </Link>

      <div className="welcome">
        <div>
          <span className="tag">{course.code}</span>
          <h1>{course.name}</h1>
          <p>{course.description}</p>
        </div>
      </div>

      <div className="grid grid-3">
        <div className="card">
          <p className="muted">Faculty</p>
          <h3>{course.faculty}</h3>
        </div>
        <div className="card">
          <p className="muted">Credits</p>
          <h3>{course.credits}</h3>
        </div>
        <div className="card">
          <p className="muted">Enrolled Students</p>
          <h3>{enrolledCount}</h3>
        </div>
      </div>

      <div className="card">
        <h3>Course Progress – {course.progress}%</h3>
        <ProgressBar value={course.progress} />
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3>Modules</h3>
          <ol className="simple-list">
            {course.modules.map((m, i) => (
              <li key={m}>
                <span>{m}</span>
                <span className="muted">{(i + 1) * 20 <= course.progress ? "Done" : "Upcoming"}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="card">
          <h3>Assignments</h3>
          {courseAssignments.length === 0 && <p className="muted">No assignments yet.</p>}
          <ul className="simple-list">
            {courseAssignments.map((a) => (
              <li key={a.id}>
                <span>
                  {a.title}
                  <br />
                  <small className="muted">Due {a.dueDate}</small>
                </span>
                <StatusBadge text={a.status} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
