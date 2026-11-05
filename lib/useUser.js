"use client";

// Logged-in user is saved in the browser (localStorage) at login time
import { useEffect, useState } from "react";

const KEY = "campusconnect_user";

export function saveUser(user) {
  localStorage.setItem(KEY, JSON.stringify(user));
  window.dispatchEvent(new Event("user-updated"));
}

export function logoutUser() {
  localStorage.removeItem(KEY);
}

export function getInitials(name = "") {
  return name
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0].toUpperCase())
    .slice(0, 2)
    .join("");
}

export function useUser() {
  const [user, setUser] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    function load() {
      try {
        setUser(JSON.parse(localStorage.getItem(KEY)));
      } catch {
        setUser(null);
      }
      setLoaded(true);
    }
    load();
    window.addEventListener("user-updated", load);
    return () => window.removeEventListener("user-updated", load);
  }, []);

  return { user, loaded };
}
