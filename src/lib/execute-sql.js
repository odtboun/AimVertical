// This script executes SQL directly in Supabase
import { supabase } from './supabase';

export async function executeSQL(sql) {
  const { error } = await supabase.rpc('execute_sql', { sql_query: sql });
  if (error) {
    console.error('Error executing SQL:', error);
    throw error;
  }
  console.log('SQL executed successfully');
}

// Execute the function
executeSQL(); 