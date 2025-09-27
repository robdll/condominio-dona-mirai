const pool = require('../src/lib/db');

async function insertSampleData() {
  try {
    console.log('Inserting sample data...');
    
    const client = await pool.connect();
    
    // Sample residents data
    const sampleResidents = [
      { apartment: 101, block: 1, referrals: 5, code: '101-1', phone: '+55 11 99999-1001' },
      { apartment: 102, block: 1, referrals: 3, code: '102-1', phone: '+55 11 99999-1002' },
      { apartment: 201, block: 1, referrals: 7, code: '201-1', phone: '+55 11 99999-1003' },
      { apartment: 301, block: 1, referrals: 2, code: '301-1', phone: '+55 11 99999-1004' },
      { apartment: 101, block: 2, referrals: 4, code: '101-2', phone: '+55 11 99999-1005' },
      { apartment: 102, block: 2, referrals: 6, code: '102-2', phone: '+55 11 99999-1006' },
      { apartment: 201, block: 2, referrals: 1, code: '201-2', phone: '+55 11 99999-1007' },
      { apartment: 301, block: 2, referrals: 8, code: '301-2', phone: '+55 11 99999-1008' },
      { apartment: 101, block: 3, referrals: 3, code: '101-3', phone: '+55 11 99999-1009' },
      { apartment: 102, block: 3, referrals: 5, code: '102-3', phone: '+55 11 99999-1010' },
    ];
    
    // Insert sample data
    for (const resident of sampleResidents) {
      try {
        await client.query(`
          INSERT INTO residents (apartment_number, block_number, phone_number, num_referrals, referral_code)
          VALUES ($1, $2, $3, $4, $5)
          ON CONFLICT (block_number, apartment_number) 
          DO UPDATE SET 
            phone_number = EXCLUDED.phone_number,
            num_referrals = EXCLUDED.num_referrals,
            referral_code = EXCLUDED.referral_code,
            updated_at = NOW()
        `, [resident.apartment, resident.block, resident.phone, resident.referrals, resident.code]);
        
        console.log(`✅ Inserted/Updated: Apartment ${resident.apartment}, Block ${resident.block}`);
      } catch (error) {
        console.error(`❌ Failed to insert apartment ${resident.apartment}, block ${resident.block}:`, error.message);
      }
    }
    
    // Show final count
    const countResult = await client.query('SELECT COUNT(*) FROM residents');
    console.log(`📊 Total residents in database: ${countResult.rows[0].count}`);
    
    client.release();
    
  } catch (error) {
    console.error('❌ Failed to insert sample data:', error.message);
  } finally {
    await pool.end();
  }
}

// Run the insertion
insertSampleData();
