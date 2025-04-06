// This script sets up the database in Supabase
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';

// Supabase credentials from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

async function setupDatabase() {
  try {
    // Read the SQL file
    const sql = readFileSync('./setup-database.sql', 'utf8');
    
    // Execute the SQL
    const { data, error } = await supabase.rpc('exec_sql', { sql_query: sql });
    
    if (error) {
      console.error('Error executing SQL:', error);
      return;
    }
    
    console.log('Database setup completed successfully:', data);
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

// Execute the function
setupDatabase(); 