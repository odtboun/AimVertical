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
            const { error: profileError } = await createUserProfile(
              session.user.id,
              session.user.email!,
              selectedPlan
            );

            if (profileError) {
              console.error('Error creating user profile:', profileError);
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
        console.error('Unexpected error:', error);
        router.push('/signup?error=unexpected');
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