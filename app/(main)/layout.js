"use client";

// Layout for all pages after login: navbar + page + footer
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { useUser } from "@/lib/useUser";

export default function MainLayout({ children }) {
  const router = useRouter();
  const { user, loaded } = useUser();

  // Not logged in -> go to login page
  useEffect(() => {
    if (loaded && !user) router.replace("/login");
  }, [loaded, user, router]);

  if (!loaded || !user) return null;

  return (
    <>
      <Navbar />
      <main className="container">{children}</main>
      <footer className="footer">© 2026 CampusConnect. All rights reserved.</footer>
    </>
  );
}
