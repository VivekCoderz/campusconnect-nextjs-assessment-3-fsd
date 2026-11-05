import Link from "next/link";
import ProgressBar from "@/components/ProgressBar";
import { courses } from "@/lib/data";

export default function CoursesPage() {
  return (
    <div>
      <h1 className="page-title">My Courses</h1>

      <div className="grid grid-3">
        {courses.map((c) => (
          <div className="card course-card" key={c.id}>
            <span className="tag">{c.code}</span>
            <h3>{c.name}</h3>
            <p className="muted">{c.faculty}</p>
            <p>Credits: {c.credits}</p>
            <div className="row-between">
              <small>Progress</small>
              <small>{c.progress}%</small>
            </div>
            <ProgressBar value={c.progress} />
            <Link href={`/courses/${c.id}`} className="btn">
              View Course
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
