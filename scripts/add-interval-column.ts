import { supabase } from '../src/lib/supabase';
import * as fs from 'fs';
import * as path from 'path';

async function addIntervalColumn() {
  try {
    const sql = fs.readFileSync(
      path.join(__dirname, 'add-interval-column.sql'),
      'utf8'
    );
    
    // Execute the SQL directly using Supabase's REST API
    const { error } = await supabase.from('user_profiles').alter('interval', (col) => col.type('varchar', { length: 10 }));
    
    if (error) {
      throw error;
    }
    
    // Set default values
    const { error: updateError } = await supabase
      .from('user_profiles')
      .update({ interval: 'month' })
      .is('interval', null);
      
    if (updateError) {
      throw updateError;
    }
    
    console.log('Successfully added interval column to user_profiles table');
  } catch (error) {
    console.error('Error adding interval column:', error);
    process.exit(1);
  }
}

addIntervalColumn(); 