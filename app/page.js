import Link from "next/link";

export default function HomePage() {
  const features = [
    { title: "Dashboard", text: "See courses, attendance and pending work at a glance." },
    { title: "Courses", text: "Track progress, faculty and credits for every course." },
    { title: "Assignments", text: "Never miss a deadline with clear status tracking." },
    { title: "Students", text: "Search and view student profiles by department." },
  ];

  return (
    <div>
      <header className="navbar">
        <div className="nav-inner">
          <span className="logo">
            Campus<span>Connect</span>
          </span>
          <Link href="/login" className="btn">
            Login
          </Link>
        </div>
      </header>

      <section className="hero">
        <h1>Student Management, Made Simple</h1>
        <p>Manage your courses, assignments and attendance from one place.</p>
        <Link href="/login" className="btn">
          Get Started
        </Link>
      </section>

      <section className="container">
        <div className="grid grid-4">
          {features.map((f) => (
            <div className="card" key={f.title}>
              <h3>{f.title}</h3>
              <p className="muted">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">© 2026 CampusConnect. All rights reserved.</footer>
    </div>
  );
}
