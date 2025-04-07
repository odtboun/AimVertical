import { readFileSync } from 'fs';
import { createUserProfilesTable } from './create-table';
import { executeSQL } from './execute-sql';

export async function setupDatabase() {
  try {
    // Create the table
    await createUserProfilesTable();

    // Read and execute additional SQL
    const sql = readFileSync('./setup-database.sql', 'utf8');
    await executeSQL(sql);

    console.log('Database setup completed successfully');
  } catch (error) {
    console.error('Error setting up database:', error);
    throw error;
  }
} 