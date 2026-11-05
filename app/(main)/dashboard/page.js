"use client";

import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import { assignments, courses, recentActivities, getCourse } from "@/lib/data";
import { useUser } from "@/lib/useUser";

export default function DashboardPage() {
  const { user } = useUser();
  const pending = assignments.filter((a) => a.status === "Pending");
  const completed = assignments.filter((a) => a.status !== "Pending");

  const stats = [
    { label: "Total Courses", value: courses.length, color: "blue" },
    { label: "Pending Assignments", value: pending.length, color: "orange" },
    { label: "Completed Assignments", value: completed.length, color: "green" },
    { label: "Attendance", value: "87%", color: "purple" },
  ];

  return (
    <div>
      <div className="welcome">
        <h1>Welcome, {user?.name} 👋</h1>
        <p className="muted">Let&apos;s keep learning and achieve more together!</p>
      </div>

      <div className="grid grid-4">
        {stats.map((s) => (
          <div key={s.label} className={`card stat ${s.color}`}>
            <p className="muted">{s.label}</p>
            <h2>{s.value}</h2>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="card-header">
          <h3>Recent Assignments</h3>
          <Link href="/assignments" className="link">
            View All →
          </Link>
        </div>
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
              {assignments.slice(0, 4).map((a) => (
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

      <div className="grid grid-2">
        <div className="card">
          <h3>Upcoming Deadlines</h3>
          <ul className="simple-list">
            {pending.map((a) => (
              <li key={a.id}>
                <span>
                  {a.title}
                  <br />
                  <small className="muted">{a.dueDate}</small>
                </span>
                <StatusBadge text={a.priority} />
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3>Recent Activities</h3>
          <ul className="simple-list">
            {recentActivities.map((act, i) => (
              <li key={i}>
                <span>{act.text}</span>
                <small className="muted">{act.time}</small>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
