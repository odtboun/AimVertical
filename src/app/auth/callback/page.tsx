'use client';

import { useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const handleAuthCallback = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error) {
        console.error('Error during auth callback:', error.message);
        router.push('/signup?error=auth-callback-failed');
        return;
      }

      if (session) {
        // Successfully authenticated
        router.push('/signup/success');
      } else {
        // No session found
        router.push('/signup?error=no-session');
      }
    };

    handleAuthCallback();
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Completing sign up...
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please wait while we verify your email.
          </p>
        </div>
      </div>
    </div>
  );
} 