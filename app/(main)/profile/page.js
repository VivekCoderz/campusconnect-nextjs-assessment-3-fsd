"use client";

import Link from "next/link";
import { courses } from "@/lib/data";
import { useUser, getInitials } from "@/lib/useUser";

export default function ProfilePage() {
  const { user } = useUser();

  const info = [
    ["Full Name", user?.name],
    ["Email", user?.email],
    ["Roll No", user?.rollNo],
    ["Department", user?.department],
    ["Year", user?.year],
    ["Phone", user?.phone],
  ];

  return (
    <div>
      <h1 className="page-title">My Profile</h1>

      <div className="card profile-header">
        <span className="avatar big">{getInitials(user?.name)}</span>
        <div>
          <h2>{user?.name}</h2>
          <p className="muted">{user?.email}</p>
        </div>
        <Link href="/settings" className="btn push-right">
          Edit Profile
        </Link>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3>Personal Information</h3>
          <ul className="simple-list">
            {info.map(([label, value]) => (
              <li key={label}>
                <span className="muted">{label}</span>
                <span>{value || "Not added"}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3>Enrolled Courses</h3>
          <ul className="simple-list">
            {courses.map((c) => (
              <li key={c.id}>
                <Link href={`/courses/${c.id}`} className="link">
                  {c.name}
                </Link>
                <span className="muted">{c.credits} credits</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
