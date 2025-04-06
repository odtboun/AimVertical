import { createClient } from '@supabase/supabase-js';

// These environment variables need to be set in your .env.local file
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper function to sign up a user
export const signUp = async (email: string, password: string, plan: string) => {
  try {
    // First, sign up the user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) {
      return { data: null, error: authError };
    }

    // Then, store the plan information in a separate table
    if (authData.user) {
      const { error: profileError } = await supabase
        .from('user_profiles')
        .insert([
          {
            user_id: authData.user.id,
            email: email,
            plan: plan,
            created_at: new Date().toISOString(),
          },
        ]);

      if (profileError) {
        return { data: authData, error: profileError };
      }
    }

    return { data: authData, error: null };
  } catch (error) {
    return { data: null, error: { message: 'An unexpected error occurred' } };
  }
};

// Helper function to sign in a user
export const signIn = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  } catch (error) {
    return { data: null, error: { message: 'An unexpected error occurred' } };
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