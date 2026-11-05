"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveUser } from "@/lib/useUser";

export default function LoginPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !email || !password) {
      setError("Please fill all the fields.");
      return;
    }
    saveUser({ name: name.trim(), email });
    router.push("/dashboard");
  }

  return (
    <div className="login-page">
      <form className="card login-card" onSubmit={handleSubmit}>
        <Link href="/" className="logo center">
          Campus<span>Connect</span>
        </Link>
        <p className="muted center-text">Login to continue</p>

        {error && <p className="error">{error}</p>}

        <label>Full Name</label>
        <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="btn full">
          Login
        </button>
      </form>
    </div>
  );
}
