'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase, createUserProfile } from '@/lib/supabase';

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Error during auth callback:', error.message);
          router.push('/signup?error=auth-callback-failed');
          return;
        }

        if (session?.user) {
          // Get the selected plan from localStorage
          const selectedPlan = localStorage.getItem('selected_plan') || 'basic';
          
          try {
            // Create user profile
            const result = await createUserProfile(
              session.user.id,
              session.user.email!,
              selectedPlan
            );

            // Check if the profile was created successfully
            if (!result.success) {
              console.error('Error creating user profile');
              // Even if profile creation fails, we'll still redirect to success
              // since the user is authenticated
            }

            // Clear the selected plan from localStorage
            localStorage.removeItem('selected_plan');

            // Successfully authenticated
            router.push('/signup/success');
          } catch (error) {
            console.error('Error in profile creation:', error);
            // Still redirect to success since auth worked
            router.push('/signup/success');
          }
        } else {
          // No session found
          router.push('/signup?error=no-session');
        }
      } catch (error) {
        console.error('Unexpected error during auth callback:', error);
        router.push('/signup?error=unexpected');
      }
    };

    handleAuthCallback();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Completing your signup...
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please wait while we set up your account.
          </p>
        </div>
      </div>
    </div>
  );
} 