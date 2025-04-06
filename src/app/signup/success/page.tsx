"use client";

import Link from "next/link";
import { CheckCircle } from 'lucide-react';

export default function SignUpSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Thank you for signing up!
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We've sent you a confirmation email. Please check your inbox to verify your account.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Our team will reach out to you shortly for onboarding. In the meantime, feel free to explore our website.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 