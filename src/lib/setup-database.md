# Setting Up the User Profiles Table in Supabase

To create the `user_profiles` table in your Supabase project, follow these steps:

## Option 1: Using the Supabase Dashboard (Recommended)

1. Log in to your Supabase dashboard at https://app.supabase.com/
2. Select your project
3. Go to the "SQL Editor" tab in the left sidebar
4. Create a new query and paste the following SQL:

```sql
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
CREATE POLICY IF NOT EXISTS "Users can read their own profile" 
  ON public.user_profiles 
  FOR SELECT 
  USING (auth.uid() = user_id);

-- Create a policy that allows users to update their own profile
CREATE POLICY IF NOT EXISTS "Users can update their own profile" 
  ON public.user_profiles 
  FOR UPDATE 
  USING (auth.uid() = user_id);

-- Create a policy that allows the service role to insert profiles
CREATE POLICY IF NOT EXISTS "Service role can insert profiles" 
  ON public.user_profiles 
  FOR INSERT 
  WITH CHECK (true);
```

5. Click "Run" to execute the SQL

## Option 2: Using the Supabase CLI

If you have the Supabase CLI installed, you can run:

```bash
supabase db push
```

This will apply any migrations in your project.

## Verifying the Table Creation

After creating the table, you can verify it exists by:

1. Going to the "Table Editor" in the Supabase dashboard
2. You should see the `user_profiles` table listed
3. Click on it to view its structure and data

## Troubleshooting

If you encounter any errors:

1. Check that you have the necessary permissions in your Supabase project
2. Ensure that the `auth.users` table exists (it should be created automatically by Supabase)
3. If you get an error about `uuid_generate_v4()`, you may need to enable the `uuid-ossp` extension:

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
``` 