const pool = require('../src/lib/db');

async function testConnection() {
  try {
    console.log('Testing database connection...');
    
    // Test basic connection
    const client = await pool.connect();
    console.log('✅ Database connection successful!');
    
    // Test table existence
    const tableCheck = await client.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'residents'
      );
    `);
    
    if (tableCheck.rows[0].exists) {
      console.log('✅ Residents table exists');
      
      // Check current data
      const countResult = await client.query('SELECT COUNT(*) FROM residents');
      console.log(`📊 Current residents count: ${countResult.rows[0].count}`);
      
      // Show sample data
      const sampleData = await client.query(`
        SELECT apartment_number, block_number, num_referrals, referral_code 
        FROM residents 
        LIMIT 5
      `);
      
      if (sampleData.rows.length > 0) {
        console.log('📋 Sample data:');
        sampleData.rows.forEach(row => {
          console.log(`  Apartment ${row.apartment_number}, Block ${row.block_number}: ${row.num_referrals} referrals (${row.referral_code})`);
        });
      } else {
        console.log('📋 No data found in residents table');
      }
      
    } else {
      console.log('❌ Residents table does not exist');
      console.log('Please run the CREATE TABLE statement in your Neon database');
    }
    
    client.release();
    
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    console.error('Make sure to:');
    console.error('1. Update your .env.local file with correct database credentials');
    console.error('2. Create the residents table in your Neon database');
    console.error('3. Check your network connection');
  } finally {
    await pool.end();
  }
}

// Run the test
testConnection();
