// This script creates the user_profiles table in Supabase
import { createClient } from '@supabase/supabase-js';

// Supabase credentials from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

async function createUserProfilesTable() {
  try {
    // SQL to create the user_profiles table
    const { data, error } = await supabase.rpc('create_user_profiles_table');
    
    if (error) {
      console.error('Error creating table:', error);
      return;
    }
    
    console.log('Table created successfully:', data);
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

// Execute the function
createUserProfilesTable(); 