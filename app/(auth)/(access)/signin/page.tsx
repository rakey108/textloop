import Link from 'next/link';
import Button from '@/app/components/ui/Button';
import { TextField } from '@/app/components/ui/Form';

export default function LoginPage() {
  return (
    <>
      <h2>Login</h2>
      <form className="mt-8 space-y-6">
        <div className="space-y-4 rounded-md">
          <TextField
            label="Email"
            id="email"
            name="email"
            type="email"
            size="lg"
            autoComplete="email"
            required
            placeholder="Email"
          />
          <TextField
            label="Password"
            id="password"
            name="password"
            type="password"
            size="lg"
            autoComplete="current-password"
            required
            placeholder="••••••••" />

        </div>
        <div className="flex justify-between">
          <Link href="/reset-password" className="font-medium text-accent hover:underline">
            Forgot Password?
          </Link>
          <Link href="/verify" className="font-medium text-accent hover:underline">
            Verify Account
          </Link>
        </div>
        <Button size="lg" variant="primary">Login</Button>
      </form>
      <p className="mt-4 text-center md:text-left text-sm text-gray-300">
        Don't have an account ?{' '}
        <Link href="/signup" className="font-medium text-accent hover:underline">
          Signup
        </Link>
      </p>
    </>
  );
}
