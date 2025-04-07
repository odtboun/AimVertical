// This script creates the user_profiles table in Supabase
import { supabase } from './supabase';

export async function createTable() {
  const { error } = await supabase.rpc('create_table');
  if (error) {
    console.error('Error creating table:', error);
    throw error;
  }
  console.log('Table created successfully');
} 