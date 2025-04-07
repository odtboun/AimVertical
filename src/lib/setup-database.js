// This script sets up the database in Supabase
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { createTable } from './create-table';
import { executeSQL } from './execute-sql';

// Supabase credentials from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

export async function setupDatabase() {
  try {
    // Create the table
    await createTable();

    // Execute any additional SQL setup
    const setupSQL = `
      -- Add any additional setup SQL here
      -- For example, creating indexes or setting up policies
    `;
    await executeSQL(setupSQL);

    console.log('Database setup completed successfully');
  } catch (error) {
    console.error('Error setting up database:', error);
    throw error;
  }
}

// Execute the function
setupDatabase(); 