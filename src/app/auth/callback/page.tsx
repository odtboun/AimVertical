'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase, createUserProfile } from '@/lib/supabase';

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
        // Get the selected plan from localStorage
        const selectedPlan = localStorage.getItem('selected_plan') || 'basic';
        
        // Create user profile
        const { error: profileError } = await createUserProfile(
          session.user.id,
          session.user.email!,
          selectedPlan
        );

        if (profileError) {
          console.error('Error creating user profile:', profileError.message);
          router.push('/signup?error=profile-creation-failed');
          return;
        }

        // Clear the selected plan from localStorage
        localStorage.removeItem('selected_plan');

        // Successfully authenticated and profile created
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