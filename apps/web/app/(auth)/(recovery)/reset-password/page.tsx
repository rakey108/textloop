"use client";
import { useState } from "react";
import Button from '@/app/components/ui/Button';
import { TextField } from '@/app/components/ui/Form';
import Link from "next/link";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate async request
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <>
      {/* <div> */}
      <h2>Reset Password</h2>
      <p className="mb-6 text-center md:text-left text-sm text-gray-300">Enter your email address to receive a OTP to reset password.</p>
      {/* </div> */}
      {submitted ? (
        <div className="text-green-600 text-center font-semibold">If an account exists, a reset link has been sent to your email.</div>
      ) : (
        <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
          <TextField
            label="Email Address"
            id="email"
            name="email"
            type="email"
            size="lg"
            required
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            size="lg"
            variant="primary"
            loading={submitting}
            disabled={!email || submitting}
            className="w-full"
          >
            Get OTP
          </Button>
          <p className="mt-4 text-center md:text-left text-sm text-gray-300">
            Already have OTP ?{' '}
            <Link href="/verify" className="font-medium text-accent hover:underline">
              Verify here
            </Link>
          </p>
        </form>
      )}
    </>
  );
}
