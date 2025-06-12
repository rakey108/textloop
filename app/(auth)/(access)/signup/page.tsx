import TextField from '@/app/components/ui/Form';
import Link from 'next/link';
import Button from '@/app/components/ui/Button';

export default function SignupPage() {
  return (
    <>
      <div>
        <h2>
          Create your account
        </h2>
        <p className="mt-2 text-center md:text-left text-sm text-gray-300">
          Already have an account?{' '}
          <Link href="/signin" className="font-medium text-accent hover:underline">
            Sign in
          </Link>
        </p>
      </div>
      <form className="mt-8 space-y-6" action="#">
        <div className="space-y-4 rounded-md">

          <TextField
            label="Full Name"
            id="name"
            name="name"
            type="text"
            size="lg"
            autoComplete="name"
            required
            placeholder="Full name"
          />

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
            placeholder='Password'
            autoComplete="new-password"
            required
          />

          <TextField
            label="Confirm Password"
            id="confirm-password"
            name="confirm-password"
            type="password"
            size="lg"
            placeholder='Confirm Password'
            autoComplete="new-password"
            required
          />
        </div>
        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            required
            className="h-4 w-4 rounded border-gray-500 text-accent focus:ring-accent bg-transparent"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
            I agree to the{' '}
            <a href="#" className="font-medium text-accent hover:underline">
              Terms and Conditions
            </a>
          </label>
        </div>
        <div>
          <Button type="submit" variant="primary" size='lg'>
            Create account
          </Button>
        </div>
      </form>
    </>
  );
}
