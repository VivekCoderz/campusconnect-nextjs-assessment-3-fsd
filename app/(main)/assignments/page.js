"use client";

import { useState } from "react";
import StatusBadge from "@/components/StatusBadge";
import { assignments as initialAssignments, getCourse } from "@/lib/data";

export default function AssignmentsPage() {
  const [list, setList] = useState(initialAssignments);
  const [filter, setFilter] = useState("All");

  function handleSubmit(id) {
    setList(list.map((a) => (a.id === id ? { ...a, status: "Submitted" } : a)));
    alert("Assignment submitted successfully!");
  }

  const shown = filter === "All" ? list : list.filter((a) => a.status === filter);

  return (
    <div>
      <h1 className="page-title">Assignments</h1>

      <div className="tabs">
        {["All", "Pending", "Submitted", "Completed"].map((f) => (
          <button key={f} className={filter === f ? "tab active" : "tab"} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>

      <div className="card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Assignment Title</th>
                <th>Course</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {shown.map((a) => (
                <tr key={a.id}>
                  <td>{a.title}</td>
                  <td>{getCourse(a.courseId).name}</td>
                  <td>{a.dueDate}</td>
                  <td>
                    <StatusBadge text={a.status} />
                  </td>
                  <td>
                    {a.status === "Pending" ? (
                      <button className="btn-small" onClick={() => handleSubmit(a.id)}>
                        Submit
                      </button>
                    ) : (
                      <span className="muted">Done</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {shown.length === 0 && <p className="muted">No assignments here.</p>}
      </div>
    </div>
  );
}
