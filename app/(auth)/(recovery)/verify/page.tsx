"use client";
import { useState } from "react";
import OTPInput from "react-otp-input";
import Button from '@/app/components/ui/Button';
import { TextField } from "@/app/components/ui/Form";
import Link from "next/link";

export default function VerifyOtpPage() {
  const [otp, setOtp] = useState("");
  const [verifying, setVerifying] = useState(false);

  // Handle OTP change
  const handleChange = (value: string) => {
    if (/^\d{0,6}$/.test(value)) {
      setOtp(value);
      if (value.length === 6) {
        handleVerify(value);
      }
    }
  };

  // Handle verify
  const handleVerify = (code: string) => {
    setVerifying(true);
    // Simulate async verify
    setTimeout(() => {
      alert(`Verifying OTP: ${code}`);
      setVerifying(false);
    }, 1000);
  };


  return (
    <>
      <h2>Verify OTP</h2>
      <p className="mb-8 text-white">Enter the 6-digit code sent to your email/phone.</p>
      <form
        className="flex flex-col items-center gap-6 w-full"
        onSubmit={e => {
          e.preventDefault();
          if (otp.length === 6) handleVerify(otp);
        }}
      >
        <OTPInput
          value={otp}
          onChange={handleChange}
          numInputs={6}
          inputType="tel"
          shouldAutoFocus
          containerStyle="flex gap-2 justify-center"
          // inputStyle={inputStyle}
          renderInput={(props) => <TextField {...props} size="lg" className="px-5" autoComplete="one-time-code" style={{}} />} // for mobile autofill and focus styling
        />
        <Button
          type="submit"
          size="lg"
          variant="primary"
          loading={verifying}
          disabled={otp.length !== 6 || verifying}
        >
          Verify
        </Button>
        <p className="mt-4 text-center md:text-left text-sm text-gray-300">
          Already verified ?{' '}
          <Link href="/signin" className="font-medium text-accent hover:underline">
            login here
          </Link>
        </p>
      </form>
    </>
  );
}
