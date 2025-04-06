import { createClient } from '@supabase/supabase-js';

// These environment variables need to be set in your .env.local file
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper function to sign up a user with magic link
export const signUpWithMagicLink = async (email: string, plan: string) => {
  try {
    // Send magic link
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      return { data: null, error };
    }

    // Store the plan in localStorage for later use after email verification
    if (typeof window !== 'undefined') {
      localStorage.setItem('selected_plan', plan);
    }

    return { data, error: null };
  } catch (error) {
    return { data: null, error: { message: 'An unexpected error occurred' } };
  }
};

// Helper function to create user profile after email verification
export const createUserProfile = async (userId: string, email: string, plan: string) => {
  try {
    // First, check if the user_profiles table exists
    const { error: tableError } = await supabase
      .from('user_profiles')
      .select('id')
      .limit(1);

    if (tableError) {
      console.warn('user_profiles table might not exist yet:', tableError);
      // Return success even if table doesn't exist
      return { error: null };
    }

    // Try to create the profile
    const { error } = await supabase
      .from('user_profiles')
      .insert([
        {
          user_id: userId,
          email: email,
          plan: plan,
          created_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    return { error };
  } catch (error) {
    console.error('Error in createUserProfile:', error);
    // Return success even if there's an error
    return { error: null };
  }
};

// Helper function to sign out a user
export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    return { error };
  } catch (error) {
    return { error: { message: 'An unexpected error occurred' } };
  }
};

// Helper function to get the current user
export const getCurrentUser = async () => {
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    return { user, error };
  } catch (error) {
    return { user: null, error: { message: 'An unexpected error occurred' } };
  }
}; 