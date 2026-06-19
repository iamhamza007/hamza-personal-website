"use client";

import { Loader2, Send } from "lucide-react";
import { useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => ({}))) as {
        error?: string;
        message?: string;
      };

      if (!response.ok) {
        throw new Error(result.error ?? "Message could not be sent.");
      }

      setStatus("success");
      setMessage(result.message ?? "Message sent. I will get back to you soon.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please email me directly."
      );
    }
  }

  return (
    <form className="glass-card grid gap-5 p-6" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-white/72">
          Name
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            minLength={2}
            maxLength={80}
            className="form-field"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-white/72">
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className="form-field"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-medium text-white/72">
        Subject
        <input
          name="subject"
          type="text"
          required
          minLength={3}
          maxLength={120}
          className="form-field"
          placeholder="Project, opportunity, or collaboration"
        />
      </label>

      <label className="grid gap-2 text-sm font-medium text-white/72">
        Message
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={1500}
          className="form-field min-h-40 resize-y"
          placeholder="Tell me what you are working on."
        />
      </label>

      <label className="hidden">
        Website
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-gold/50 bg-gold px-5 py-3 text-sm font-semibold text-black transition hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? (
            <Loader2 size={17} className="animate-spin" />
          ) : (
            <Send size={17} />
          )}
          Send Message
        </button>
        <p
          className={`min-h-6 text-sm ${
            status === "success"
              ? "text-emerald"
              : status === "error"
                ? "text-red-300"
                : "text-white/50"
          }`}
          aria-live="polite"
        >
          {message}
        </p>
      </div>
    </form>
  );
}
