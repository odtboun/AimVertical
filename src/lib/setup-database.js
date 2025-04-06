// This script helps set up the database in Supabase
const fs = require('fs');
const path = require('path');

// Read the SQL file
const sqlFilePath = path.join(__dirname, 'setup-database.sql');
const sqlContent = fs.readFileSync(sqlFilePath, 'utf8');

console.log(`
==================================================
SUPABASE DATABASE SETUP INSTRUCTIONS
==================================================

To create the user_profiles table in your Supabase project, follow these steps:

1. Log in to your Supabase dashboard at https://app.supabase.com/
2. Select your project
3. Go to the "SQL Editor" tab in the left sidebar
4. Create a new query and paste the following SQL:

${sqlContent}

5. Click "Run" to execute the SQL

After creating the table, you can verify it exists by:
1. Going to the "Table Editor" in the Supabase dashboard
2. You should see the user_profiles table listed
3. Click on it to view its structure and data

If you encounter any errors:
1. Check that you have the necessary permissions in your Supabase project
2. Ensure that the auth.users table exists (it should be created automatically by Supabase)
3. If you get an error about uuid_generate_v4(), you may need to enable the uuid-ossp extension:

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
`); 