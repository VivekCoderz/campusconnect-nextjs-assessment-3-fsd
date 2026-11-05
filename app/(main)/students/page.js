"use client";

import Link from "next/link";
import { useState } from "react";
import { students, departments } from "@/lib/data";

export default function StudentsPage() {
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("All");

  const filtered = students.filter((s) => {
    const matchSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.rollNo.toLowerCase().includes(search.toLowerCase());
    const matchDept = dept === "All" || s.department === dept;
    return matchSearch && matchDept;
  });

  return (
    <div>
      <h1 className="page-title">Students</h1>

      <div className="toolbar">
        <input
          type="text"
          placeholder="Search by name or roll no..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={dept} onChange={(e) => setDept(e.target.value)}>
          {departments.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>
      </div>

      <p className="muted">{filtered.length} student(s) found</p>

      <div className="grid grid-3">
        {filtered.map((s) => (
          <div className="card student-card" key={s.id}>
            <span className="avatar big">
              {s.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
            <h3>{s.name}</h3>
            <p className="muted">{s.rollNo}</p>
            <p>{s.department}</p>
            <p className="muted">{s.year}</p>
            <Link href={`/students/${s.id}`} className="btn">
              View Details
            </Link>
          </div>
        ))}
      </div>

      {filtered.length === 0 && <p className="card">No students match your search.</p>}
    </div>
  );
}
