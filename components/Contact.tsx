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
    <div id="contact">
      {/* ===== MOBILE CONTACT (< md) ===== */}
      <section
        className="md:hidden px-5 py-8 bg-[#f9f9f9] flex flex-col relative overflow-hidden"
        aria-labelledby="contact-title-mobile"
      >
        {/* Section header */}
        <div className="mb-6">

          <h2
            id="contact-title-mobile"
            className="font-headline-terminal text-[28px] text-[#1a1c1c] uppercase tracking-tighter font-black leading-[1.1] mb-3"
          >
            Leave A<br />Request
          </h2>
          <p className="font-body-terminal text-[13px] text-[#1a1c1c]/60 leading-relaxed border-l-2 border-[#1a1c1c]/20 pl-4 mb-5">
            Initiate an agritech deployment dialogue. Provide your operational parameters below.
          </p>
          {/* Contact info */}
          <div className="flex flex-col gap-2 border-t border-[#1a1c1c]/10 pt-4">
            <a
              href="mailto:hello@noxusdynamics.com"
              className="font-mono-terminal text-[10px] tracking-widest text-[#1a1c1c]/70 hover:text-[#e2241f] transition-colors uppercase flex items-center gap-2 min-h-[36px]"
              aria-label="Email NoxusDynamics"
            >
              <span className="font-bold text-[#e2241f]">✉</span> hello@noxusdynamics.com
            </a>
            <a
              href="tel:+919562375601"
              className="font-mono-terminal text-[10px] tracking-widest text-[#1a1c1c]/70 hover:text-[#e2241f] transition-colors uppercase flex items-center gap-2 min-h-[36px]"
              aria-label="Call NoxusDynamics"
            >
              <span className="font-bold text-[#e2241f]">✆</span> +91 95623 75601
            </a>
          </div>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="border border-[#1a1c1c]/20 bg-white p-5 flex flex-col gap-5 relative"
          noValidate
          suppressHydrationWarning
        >
          {/* Success overlay */}
          {formState === "success" && (
            <div className="absolute inset-0 bg-white/95 z-20 flex flex-col items-center justify-center gap-4 animate-in fade-in" role="status" aria-live="polite">
              <CheckCircle className="w-12 h-12 text-green-600 stroke-[1.5]" aria-hidden="true" />
              <p className="font-headline-terminal text-lg font-bold tracking-tight text-center">Request Transmitted</p>
              <p className="font-mono-terminal text-[9px] tracking-widest uppercase text-[#1a1c1c]/50">We&apos;ll respond within 24 hours</p>
            </div>
          )}

          {/* Error toast */}
          {formState === "error" && errors.form && (
            <div
              className="absolute -top-10 left-0 right-0 bg-[#e2241f] text-white px-4 py-2 text-[10px] font-mono-terminal text-center z-10 animate-in slide-in-from-top-2"
              role="alert"
              aria-live="assertive"
            >
              {errors.form}
            </div>
          )}

          <div className="relative">
            <label htmlFor="name-mobile" className="block font-mono-terminal text-[9px] font-bold tracking-widest uppercase mb-2 text-[#1a1c1c]/50">
              Identifier [Name]
            </label>
            <input
              id="name-mobile"
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                setErrors((prev) => ({ ...prev, name: "" }));
              }}
              placeholder="ENTER YOUR FULL NAME"
              className={`w-full border-b-2 ${errors.name ? "border-[#e2241f]" : "border-[#1a1c1c]/20"} bg-transparent py-2.5 text-[13px] outline-none focus:border-[#e2241f] transition-colors placeholder:text-[#1a1c1c]/15 font-bold uppercase font-body-terminal`}
              disabled={formState === "submitting" || csrfLoading}
              autoComplete="name"
              required
              aria-required="true"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error-mobile" : undefined}
            />
            {errors.name && (
              <span id="name-error-mobile" className="text-[#e2241f] font-mono-terminal text-[9px] mt-1 block" role="alert">
                {errors.name}
              </span>
            )}
          </div>

          <div className="relative">
            <label htmlFor="email-mobile" className="block font-mono-terminal text-[9px] font-bold tracking-widest uppercase mb-2 text-[#1a1c1c]/50">
              Comm Channel [Email]
            </label>
            <input
              id="email-mobile"
              type="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                setErrors((prev) => ({ ...prev, email: "" }));
              }}
              placeholder="ENTER YOUR EMAIL ADDRESS"
              className={`w-full border-b-2 ${errors.email ? "border-[#e2241f]" : "border-[#1a1c1c]/20"} bg-transparent py-2.5 text-[13px] outline-none focus:border-[#e2241f] transition-colors placeholder:text-[#1a1c1c]/15 font-bold uppercase font-body-terminal`}
              disabled={formState === "submitting" || csrfLoading}
              autoComplete="email"
              required
              aria-required="true"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error-mobile" : undefined}
              data-lpignore="true"
              data-1p-ignore="true"
            />
            {errors.email && (
              <span id="email-error-mobile" className="text-[#e2241f] font-mono-terminal text-[9px] mt-1 block" role="alert">
                {errors.email}
              </span>
            )}
          </div>

          <div className="relative">
            <label htmlFor="company-mobile" className="block font-mono-terminal text-[9px] font-bold tracking-widest uppercase mb-2 text-[#1a1c1c]/50">
              Entity [Company] — Optional
            </label>
            <input
              id="company-mobile"
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="ENTER YOUR COMPANY NAME"
              className="w-full border-b-2 border-[#1a1c1c]/20 bg-transparent py-2.5 text-[13px] outline-none focus:border-[#e2241f] transition-colors placeholder:text-[#1a1c1c]/15 font-bold uppercase font-body-terminal"
              disabled={formState === "submitting" || csrfLoading}
              autoComplete="organization"
              aria-describedby={errors.company ? "company-error-mobile" : undefined}
            />
            {errors.company && (
              <span id="company-error-mobile" className="text-[#e2241f] font-mono-terminal text-[9px] mt-1 block" role="alert">
                {errors.company}
              </span>
            )}
          </div>

          <div className="relative">
            <label htmlFor="message-mobile" className="block font-mono-terminal text-[9px] font-bold tracking-widest uppercase mb-2 text-[#1a1c1c]/50">
              Payload [Message]
            </label>
            <textarea
              id="message-mobile"
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                setErrors((prev) => ({ ...prev, message: "" }));
              }}
              placeholder="DESCRIBE YOUR OBJECTIVES..."
              rows={4}
              className={`w-full border ${errors.message ? "border-[#e2241f]" : "border-[#1a1c1c]/20"} bg-transparent p-3 text-[13px] outline-none focus:border-[#e2241f] transition-colors placeholder:text-[#1a1c1c]/15 font-bold uppercase resize-none mt-1 font-body-terminal`}
              disabled={formState === "submitting" || csrfLoading}
              required
              aria-required="true"
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "message-error-mobile" : undefined}
            ></textarea>
            {errors.message && (
              <span id="message-error-mobile" className="text-[#e2241f] font-mono-terminal text-[9px] mt-1 block" role="alert">
                {errors.message}
              </span>
            )}
          </div>

          {/* Honeypot fields */}
          <div style={{ display: 'none' }} aria-hidden="true">
            <input type="text" name="hp_field" tabIndex={-1} autoComplete="off" />
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <button
            type="submit"
            disabled={formState === "submitting" || csrfLoading}
            className="bg-[#e2241f] text-white py-3 mt-2 font-mono-terminal text-[10px] tracking-widest hover:bg-[#1a1c1c] transition-all duration-300 uppercase w-full flex items-center justify-center gap-3 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed send-button"
          >
            {formState === "submitting" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                Sending...
              </>
            ) : (
              "[ SEND ]"
            )}
          </button>
        </form>
      </section>

      {/* ===== DESKTOP CONTACT (md:+) ===== */}
      <section
        className="hidden md:flex px-4 sm:px-6 md:px-12 py-16 sm:py-24 md:py-32 bg-[#f0f0f0] flex-col xl:flex-row justify-between relative overflow-hidden gap-10 sm:gap-16 xl:gap-8"
        aria-labelledby="contact-title"
      >
        <div className="max-w-screen-2xl mx-auto w-full flex flex-col xl:flex-row justify-between gap-10 sm:gap-16 xl:gap-8">
        <div className="xl:w-5/12 relative z-10 flex flex-col">
          <h2
            id="contact-title"
            className="font-bold tracking-tighter leading-[0.8] mb-8 sm:mb-12 uppercase flex flex-col items-start"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 8rem)' }}
          >
            <div className="flex items-center">
              <span className="w-4 h-8 sm:w-8 sm:h-16 bg-[#e2241f] mr-3 sm:mr-6 shrink-0 inline-block" aria-hidden="true"></span>
              Leave A
            </div>
            <div>Request</div>
          </h2>
          <p className="text-base sm:text-xl max-w-lg opacity-80 leading-relaxed mb-8 sm:mb-12 font-medium pl-7 sm:pl-14">
            Initiate an agritech deployment dialogue. Provide your operational parameters below and our systems will align an integration strategy.
          </p>
          {/* Direct contact info */}
          <div className="pl-7 sm:pl-14 flex flex-col gap-3 border-t border-[#1a1c1c]/10 pt-6">
            <p className="text-[10px] font-mono tracking-widest uppercase opacity-50 font-bold">Direct Contact</p>
            <a
              href="mailto:hello@noxusdynamics.com"
              className="text-sm font-bold hover:text-[#e2241f] transition-colors flex items-center gap-3 min-h-[44px]"
              aria-label="Email NoxusDynamics"
            >
              <span className="text-[#e2241f] text-base">✉</span>
              hello@noxusdynamics.com
            </a>
            <a
              href="tel:+919562375601"
              className="text-sm font-bold hover:text-[#e2241f] transition-colors flex items-center gap-3 min-h-[44px]"
              aria-label="Call NoxusDynamics"
            >
              <span className="text-[#e2241f] text-base">✆</span>
              +91 95623 75601
            </a>
          </div>
        </div>

        <div className="xl:w-1/2 relative z-10 w-full max-w-3xl xl:max-w-none self-end xl:self-auto">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="border-2 sm:border-4 border-[#1a1c1c] bg-[#f0f0f0] p-5 sm:p-8 md:p-16 flex flex-col gap-6 sm:gap-10 relative"
            noValidate
            suppressHydrationWarning
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
              <div>
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
                  data-lpignore="true"
                  data-1p-ignore="true"
                />
              </div>
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
              <div>
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
                  data-lpignore="true"
                  data-1p-ignore="true"
                />
              </div>
              {errors.email && (
                <span id="email-error" className="text-[#e2241f] text-xs font-mono mt-2 block" role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="relative group">
              <label htmlFor="company" className="block text-xs font-bold font-mono tracking-widest uppercase mb-4 opacity-70">
                Entity [Company] — Optional
              </label>
              <div>
                <input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="ENTER YOUR COMPANY NAME"
                  className="w-full border-b-2 sm:border-b-4 border-[#1a1c1c] bg-transparent py-3 sm:py-4 text-sm sm:text-lg outline-none focus:border-[#e2241f] transition-colors placeholder:text-[#1a1c1c]/20 font-bold uppercase"
                  disabled={formState === "submitting" || csrfLoading}
                  autoComplete="organization"
                  aria-describedby={errors.company ? "company-error" : undefined}
                  data-lpignore="true"
                  data-1p-ignore="true"
                />
              </div>
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
              className="bg-[#e2241f] text-white py-4 sm:py-6 mt-4 sm:mt-6 font-bold tracking-widest text-sm sm:text-base hover:bg-white hover:text-[#e2241f] transition-all duration-300 uppercase w-full sm:w-fit sm:px-12 self-start flex items-center justify-center gap-4 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e2241f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f0f0f0] send-button"
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

        </div>{/* end max-w-screen-2xl */}
      </section>
    </div>
  );
}