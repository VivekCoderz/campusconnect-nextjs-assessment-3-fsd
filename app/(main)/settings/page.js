"use client";

import { useEffect, useState } from "react";
import { useUser, saveUser } from "@/lib/useUser";

const empty = { name: "", email: "", rollNo: "", department: "", year: "", phone: "" };

export default function SettingsPage() {
  const { user } = useUser();
  const [form, setForm] = useState(empty);
  const [emailNotif, setEmailNotif] = useState(true);
  const [message, setMessage] = useState("");

  // Fill the form with the logged-in user's details
  useEffect(() => {
    if (user) setForm({ ...empty, ...user });
  }, [user]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSave(e) {
    e.preventDefault();
    if (!form.name.trim()) {
      setMessage("");
      return;
    }
    saveUser(form);
    setMessage("Profile saved successfully!");
    setTimeout(() => setMessage(""), 2500);
  }

  return (
    <div>
      <h1 className="page-title">Settings</h1>

      {message && <p className="success">{message}</p>}

      <form onSubmit={handleSave} className="grid grid-2">
        <div className="card form">
          <h3>Profile Details</h3>
          <label>Full Name</label>
          <input name="name" value={form.name} onChange={handleChange} required />
          <label>Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} />
          <label>Roll No</label>
          <input name="rollNo" value={form.rollNo} onChange={handleChange} />
          <label>Department</label>
          <input name="department" value={form.department} onChange={handleChange} />
          <label>Year</label>
          <input name="year" value={form.year} onChange={handleChange} />
          <label>Phone</label>
          <input name="phone" value={form.phone} onChange={handleChange} />
        </div>

        <div>
          <div className="card form">
            <h3>Preferences</h3>
            <label className="checkbox">
              <input type="checkbox" checked={emailNotif} onChange={() => setEmailNotif(!emailNotif)} />
              Email notifications
            </label>
          </div>

          <div className="card form">
            <h3>Change Password</h3>
            <label>Current Password</label>
            <input type="password" />
            <label>New Password</label>
            <input type="password" />
          </div>

          <button type="submit" className="btn full">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
