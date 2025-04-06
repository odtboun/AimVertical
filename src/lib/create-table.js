// This script creates the user_profiles table in Supabase
const { createClient } = require('@supabase/supabase-js');

// Supabase credentials
const supabaseUrl = 'https://shchuffeoricigiospeu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNoY2h1ZmZlb3JpY2lnaW9zcGV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM5MzkxNjEsImV4cCI6MjA1OTUxNTE2MX0.-22An7VIQdNe0hAzKeTAPM5hDf3ZEjtgkpj9DFe-mI8';

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