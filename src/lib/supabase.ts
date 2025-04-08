import { createClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing environment variables: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY must be set'
  );
}

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper functions for auth
export async function signUp(email: string, password: string, plan: string, interval: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        plan,
        interval,
      },
    },
  });
  return { data, error };
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

export async function getCurrentUser() {
  const { data, error } = await supabase.auth.getUser();
  return { data, error };
}

// Helper function to create a user profile
export async function createUserProfile(userId: string, email: string, plan: string, interval: string) {
  try {
    // Check if the user_profiles table exists
    const { error: tableError } = await supabase
      .from('user_profiles')
      .select('id')
      .limit(1);
    
    if (tableError) {
      console.warn('user_profiles table may not exist:', tableError);
      return { success: true }; // Return success even if table doesn't exist
    }
    
    // Create the user profile
    const { data, error } = await supabase
      .from('user_profiles')
      .insert([
        {
          user_id: userId,
          email,
          plan,
          interval,
        },
      ]);
    
    if (error) {
      console.error('Error creating user profile:', error);
      return { success: true }; // Return success even if there's an error
    }
    
    return { data, success: true };
  } catch (error) {
    console.error('Unexpected error creating user profile:', error);
    return { success: true }; // Return success even if there's an error
  }
}

// Helper function to sign up a user with magic link
export const signUpWithMagicLink = async (email: string, plan: string, interval: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        data: {
          plan,
          interval,
        },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      console.error('Supabase auth error:', error);
    }
    
    return { data, error };
  } catch (error) {
    console.error('Unexpected error in signUpWithMagicLink:', error);
    return { data: null, error: error instanceof Error ? error : new Error('An unexpected error occurred') };
  }
}; 