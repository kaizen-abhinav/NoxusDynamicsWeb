"use client";

import { Loader2, CheckCircle } from "lucide-react";
import { useState, useRef, FormEvent, useCallback } from "react";
import { useCSRFToken, withCSRFToken } from "@/hooks/use-csrf-token";

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  form?: string;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export function Contact() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const { csrfToken, loading: csrfLoading, refreshToken } = useCSRFToken();

  const validate = useCallback(() => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.trim().length > 100) newErrors.name = "Name must be less than 100 characters";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email";
    else if (formData.email.length > 254) newErrors.email = "Email too long";

    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters";
    else if (formData.message.trim().length > 5000) newErrors.message = "Message must be less than 5000 characters";

    if (formData.company && formData.company.length > 100) newErrors.company = "Company name too long";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (csrfLoading || !csrfToken) {
      await refreshToken();
      return;
    }

    setFormState("submitting");

    // Add honeypot fields (hidden from users, filled by bots)
    const formDataWithHoneypot = {
      ...formData,
      hp_field: "",
      website: "",
    };

    try {
      const response = await fetch('/api/contact', {
        ...withCSRFToken(csrfToken),
        method: 'POST',
        body: JSON.stringify(formDataWithHoneypot),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.details ? JSON.stringify(data.details) : 'Submission failed');
      }

      setFormState("success");
      setFormData({ name: "", email: "", company: "", message: "" });
      setTimeout(() => setFormState("idle"), 4000);
    } catch (error) {
      console.error('Contact form error:', error);
      setFormState("error");
      setErrors({ form: error instanceof Error ? error.message : 'Failed to send. Please try again.' });
      setTimeout(() => setFormState("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="px-4 sm:px-6 md:px-12 py-16 sm:py-24 md:py-32 bg-[#f0f0f0] flex flex-col xl:flex-row justify-between relative overflow-hidden gap-10 sm:gap-16 xl:gap-8"
      aria-labelledby="contact-title"
    >
      <div className="xl:w-5/12 relative z-10 flex flex-col">
        <h2
          id="contact-title"
          className="text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold tracking-tighter leading-[0.8] mb-8 sm:mb-12 uppercase flex flex-col items-start"
        >
          <div className="flex items-center">
            <span className="w-4 h-8 sm:w-8 sm:h-16 bg-[#1a1c1c] mr-3 sm:mr-6 shrink-0 inline-block" aria-hidden="true"></span>
            Leave A
          </div>
          <div>Request</div>
        </h2>
        <p className="text-base sm:text-xl max-w-lg opacity-80 leading-relaxed mb-10 sm:mb-16 font-medium pl-7 sm:pl-14">
          Initiate an agritech deployment dialogue. Provide your operational parameters below and our systems will align an integration strategy.
        </p>
      </div>

      <div className="xl:w-1/2 relative z-10 w-full max-w-3xl xl:max-w-none self-end xl:self-auto">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="border-2 sm:border-4 border-[#1a1c1c] bg-[#f0f0f0] p-5 sm:p-8 md:p-16 flex flex-col gap-6 sm:gap-10 relative"
          noValidate
        >
          {/* Success overlay */}
          {formState === "success" && (
            <div className="absolute inset-0 bg-[#f0f0f0]/95 z-20 flex flex-col items-center justify-center gap-6 animate-in fade-in" role="status" aria-live="polite">
              <CheckCircle className="w-16 h-16 text-green-600 stroke-[1.5]" aria-hidden="true" />
              <p className="text-2xl font-bold tracking-tight text-center">Request Transmitted</p>
              <p className="text-sm font-mono tracking-widest uppercase opacity-60">We&apos;ll respond within 24 hours</p>
            </div>
          )}

          {/* Error toast */}
          {formState === "error" && errors.form && (
            <div
              className="absolute -top-12 left-0 right-0 bg-[#e2241f] text-white px-4 py-3 text-sm font-mono text-center z-10 animate-in slide-in-from-top-2"
              role="alert"
              aria-live="assertive"
            >
              {errors.form}
            </div>
          )}

          <div className="relative group">
            <label htmlFor="name" className="block text-xs font-bold font-mono tracking-widest uppercase mb-4 opacity-70">
              Identifier [Name]
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                setErrors((prev) => ({ ...prev, name: "" }));
              }}
              placeholder="ENTER YOUR FULL NAME"
              className={`w-full border-b-2 sm:border-b-4 ${errors.name ? "border-[#e2241f]" : "border-[#1a1c1c]"} bg-transparent py-3 sm:py-4 text-sm sm:text-lg outline-none focus:border-[#e2241f] transition-colors placeholder:text-[#1a1c1c]/20 font-bold uppercase`}
              disabled={formState === "submitting" || csrfLoading}
              autoComplete="name"
              required
              aria-required="true"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <span id="name-error" className="text-[#e2241f] text-xs font-mono mt-2 block" role="alert">
                {errors.name}
              </span>
            )}
          </div>

          <div className="relative group">
            <label htmlFor="email" className="block text-xs font-bold font-mono tracking-widest uppercase mb-4 opacity-70">
              Comm Channel [Email]
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                setErrors((prev) => ({ ...prev, email: "" }));
              }}
              placeholder="ENTER YOUR EMAIL ADDRESS"
              className={`w-full border-b-2 sm:border-b-4 ${errors.email ? "border-[#e2241f]" : "border-[#1a1c1c]"} bg-transparent py-3 sm:py-4 text-sm sm:text-lg outline-none focus:border-[#e2241f] transition-colors placeholder:text-[#1a1c1c]/20 font-bold uppercase`}
              disabled={formState === "submitting" || csrfLoading}
              autoComplete="email"
              required
              aria-required="true"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <span id="email-error" className="text-[#e2241f] text-xs font-mono mt-2 block" role="alert">
                {errors.email}
              </span>
            )}
          </div>

          <div className="relative group">
            <label htmlFor="company" className="block text-xs font-bold font-mono tracking-widest uppercase mb-4 opacity-70">
              Entity [Company]
            </label>
            <input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="OPTIONAL"
              className="w-full border-b-2 sm:border-b-4 border-[#1a1c1c] bg-transparent py-3 sm:py-4 text-sm sm:text-lg outline-none focus:border-[#e2241f] transition-colors placeholder:text-[#1a1c1c]/20 font-bold uppercase"
              disabled={formState === "submitting" || csrfLoading}
              autoComplete="organization"
              aria-describedby={errors.company ? "company-error" : undefined}
            />
            {errors.company && (
              <span id="company-error" className="text-[#e2241f] text-xs font-mono mt-2 block" role="alert">
                {errors.company}
              </span>
            )}
          </div>

          <div className="relative group">
            <label htmlFor="message" className="block text-xs font-bold font-mono tracking-widest uppercase mb-4 opacity-70">
              Payload [Message]
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                setErrors((prev) => ({ ...prev, message: "" }));
              }}
              placeholder="DESCRIBE YOUR OBJECTIVES..."
              rows={5}
              className={`w-full border-2 sm:border-4 ${errors.message ? "border-[#e2241f]" : "border-[#1a1c1c]"} bg-transparent p-4 sm:p-6 text-sm sm:text-lg outline-none focus:border-[#e2241f] transition-colors placeholder:text-[#1a1c1c]/20 font-bold uppercase resize-none mt-2`}
              disabled={formState === "submitting" || csrfLoading}
              required
              aria-required="true"
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "message-error" : undefined}
            ></textarea>
            {errors.message && (
              <span id="message-error" className="text-[#e2241f] text-xs font-mono mt-2 block" role="alert">
                {errors.message}
              </span>
            )}
          </div>

          {/* Honeypot fields - hidden from users via CSS */}
          <div style={{ display: 'none' }} aria-hidden="true">
            <input type="text" name="hp_field" tabIndex={-1} autoComplete="off" />
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <button
            type="submit"
            disabled={formState === "submitting" || csrfLoading}
            className="bg-[#000000] text-white py-4 sm:py-6 mt-4 sm:mt-6 font-bold tracking-widest text-sm sm:text-base hover:bg-[#e2241f] transition-all duration-300 uppercase w-full sm:w-fit sm:px-12 self-start flex items-center justify-center gap-4 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e2241f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f0f0f0] send-button"
          >
            {formState === "submitting" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                Sending...
              </>
            ) : (
              "[ SEND ]"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}