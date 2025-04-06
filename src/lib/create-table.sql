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

-- Create a function to create the user_profiles table
CREATE OR REPLACE FUNCTION create_user_profiles_table()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
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
END;
$$; 