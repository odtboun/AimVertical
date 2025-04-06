"use client";

import Link from "next/link";

export default function SignUpSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            You&apos;re Almost Ready!
          </h2>
          <p className="mt-2 text-base text-gray-700">
            We are working on a big update to the AimVertical Dashboard. We&apos;ll follow up with the next steps when it&apos;s ready. You&apos;ll not be charged until then, and we&apos;ll apply a special discount for signing up during this period ❤️
          </p>
          <p className="mt-4 text-sm text-gray-600">
            Thanks for joining!
          </p>
        </div>
        <div>
          <Link
            href="/"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 