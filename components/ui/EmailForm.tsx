"use client";

import { useState } from "react";

export default function EmailForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "", honeypot: ""});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });
  };

  return (
    <div className="EmailForm mt-5">
      <form className="flex flex-col gap-4 w-110" onSubmit={handleSubmit}>
        <div>
          <p>Name</p>
          <input
            className="bg-lighter border-2 border-light mt-2 px-3 py-2 w-full text-[14px] font-mono tracking-wide"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          ></input>
        </div>
        <div>
          <p>E-mail</p>
          <input
            className="bg-lighter border-2 border-light mt-2 px-3 py-2 w-full text-[14px] font-mono tracking-wide"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          ></input>
        </div>
        <div>
          <p>Message</p>
        <textarea
          className="bg-lighter w-full border-2 border-light mt-2 px-3 py-2 h-40 text-[14px] font-mono tracking-wide"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Write your message to me..."
        ></textarea>
        </div>
        <input className="honeypot hidden" onChange={(e) => setForm({ ...form, honeypot: e.target.value })}></input>
        <button
          className="flex gap-3 w-full items-center justify-center bg-accent uppercase text-xs tracking-widest font-sans py-3 px-5 border-2 border-accent hover:text-dark transition-all"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
