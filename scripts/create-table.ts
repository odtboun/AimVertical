import { supabase } from '../src/lib/supabase';

export async function createUserProfilesTable() {
  try {
    // SQL to create the user_profiles table
    const { data, error } = await supabase.rpc('create_user_profiles_table');
    
    if (error) {
      console.error('Error creating table:', error);
      throw error;
    }
    
    console.log('Table created successfully:', data);
    return data;
  } catch (error) {
    console.error('Unexpected error:', error);
    throw error;
  }
} 