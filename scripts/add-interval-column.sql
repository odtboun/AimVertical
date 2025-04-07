-- Add interval column to user_profiles table
ALTER TABLE user_profiles
ADD COLUMN IF NOT EXISTS interval VARCHAR(10);

-- Update existing rows to have a default value
UPDATE user_profiles
SET interval = 'month'
WHERE interval IS NULL; 