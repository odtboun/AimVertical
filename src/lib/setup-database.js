// This script sets up the database in Supabase
import { supabase } from './supabase';
import { createTable } from './create-table';
import { executeSQL } from './execute-sql';

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