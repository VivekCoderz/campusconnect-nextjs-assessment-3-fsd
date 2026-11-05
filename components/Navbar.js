"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useUser, logoutUser, getInitials } from "@/lib/useUser";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/courses", label: "Courses" },
  { href: "/students", label: "Students" },
  { href: "/assignments", label: "Assignments" },
  { href: "/settings", label: "Settings" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const [open, setOpen] = useState(false);

  function handleLogout() {
    logoutUser();
    router.push("/login");
  }

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link href="/dashboard" className="logo">
          Campus<span>Connect</span>
        </Link>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
          ☰
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={pathname.startsWith(link.href) ? "active" : ""}
            >
              {link.label}
            </Link>
          ))}

          <div className="nav-user">
            <Link href="/profile" className="nav-profile" onClick={() => setOpen(false)}>
              <span className="avatar">{getInitials(user?.name)}</span>
              <span>{user?.name}</span>
            </Link>
            <button className="btn-logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
