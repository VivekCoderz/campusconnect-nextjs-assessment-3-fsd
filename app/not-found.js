import Link from "next/link";

export default function NotFound() {
  return (
    <div className="login-page">
      <div className="card login-card center-text">
        <h1>404</h1>
        <p className="muted">Page not found.</p>
        <Link href="/dashboard" className="btn">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
