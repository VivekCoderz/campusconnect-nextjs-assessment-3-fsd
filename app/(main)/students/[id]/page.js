import Link from "next/link";
import { notFound } from "next/navigation";
import ProgressBar from "@/components/ProgressBar";
import StatusBadge from "@/components/StatusBadge";
import { getStudent, getCourse, assignments } from "@/lib/data";

export default async function StudentDetailsPage({ params }) {
  const { id } = await params;
  const student = getStudent(id);
  if (!student) notFound();

  const enrolled = student.courses.map((cid) => getCourse(cid));
  const studentAssignments = assignments.filter((a) => student.courses.includes(a.courseId));

  return (
    <div>
      <Link href="/students" className="link">
        ← Back to Students
      </Link>

      <div className="card profile-header">
        <span className="avatar big">
          {student.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </span>
        <div>
          <h1>{student.name}</h1>
          <p className="muted">
            {student.rollNo} • {student.department} • {student.year}
          </p>
          <p>{student.email}</p>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3>Skills</h3>
          <div className="tags">
            {student.skills.map((skill) => (
              <span className="tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="card">
          <h3>Attendance</h3>
          <h2>{student.attendance}%</h2>
          <ProgressBar value={student.attendance} />
          <p className="muted">{student.attendance >= 75 ? "Good standing" : "Below 75% – needs improvement"}</p>
        </div>
      </div>

      <div className="card">
        <h3>Enrolled Courses</h3>
        <ul className="simple-list">
          {enrolled.map((c) => (
            <li key={c.id}>
              <Link href={`/courses/${c.id}`} className="link">
                {c.code} – {c.name}
              </Link>
              <span className="muted">{c.faculty}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h3>Assignment Status</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Assignment</th>
                <th>Course</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {studentAssignments.map((a) => (
                <tr key={a.id}>
                  <td>{a.title}</td>
                  <td>{getCourse(a.courseId).name}</td>
                  <td>{a.dueDate}</td>
                  <td>
                    <StatusBadge text={a.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
