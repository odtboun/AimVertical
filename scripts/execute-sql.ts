import { supabase } from '../src/lib/supabase';

export async function executeSQL(sql: string) {
  try {
    // Execute the SQL
    const { data, error } = await supabase.rpc('exec_sql', { sql_query: sql });
    
    if (error) {
      console.error('Error executing SQL:', error);
      throw error;
    }
    
    console.log('SQL executed successfully:', data);
    return data;
  } catch (error) {
    console.error('Unexpected error:', error);
    throw error;
  }
} 