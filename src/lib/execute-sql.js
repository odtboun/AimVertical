// This script executes SQL directly in Supabase
const { createClient } = require('@supabase/supabase-js');

// Supabase credentials
const supabaseUrl = 'https://shchuffeoricigiospeu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNoY2h1ZmZlb3JpY2lnaW9zcGV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM5MzkxNjEsImV4cCI6MjA1OTUxNTE2MX0.-22An7VIQdNe0hAzKeTAPM5hDf3ZEjtgkpj9DFe-mI8';

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

async function executeSQL() {
  try {
    // SQL to create the user_profiles table
    const sql = `
      -- Create the user_profiles table
      CREATE TABLE IF NOT EXISTS public.user_profiles (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
        email TEXT NOT NULL,
        plan TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );

      -- Create an index on user_id for faster lookups
      CREATE INDEX IF NOT EXISTS user_profiles_user_id_idx ON public.user_profiles(user_id);

      -- Set up Row Level Security (RLS)
      ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

      -- Create a policy that allows users to read their own profile
      DROP POLICY IF EXISTS "Users can read their own profile" ON public.user_profiles;
      CREATE POLICY "Users can read their own profile" 
        ON public.user_profiles 
        FOR SELECT 
        USING (auth.uid() = user_id);

      -- Create a policy that allows users to update their own profile
      DROP POLICY IF EXISTS "Users can update their own profile" ON public.user_profiles;
      CREATE POLICY "Users can update their own profile" 
        ON public.user_profiles 
        FOR UPDATE 
        USING (auth.uid() = user_id);

      -- Create a policy that allows the service role to insert profiles
      DROP POLICY IF EXISTS "Service role can insert profiles" ON public.user_profiles;
      CREATE POLICY "Service role can insert profiles" 
        ON public.user_profiles 
        FOR INSERT 
        WITH CHECK (true);
    `;

    // Execute the SQL
    const { data, error } = await supabase.rpc('exec_sql', { sql_query: sql });
    
    if (error) {
      console.error('Error executing SQL:', error);
      return;
    }
    
    console.log('SQL executed successfully:', data);
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

// Execute the function
executeSQL(); 