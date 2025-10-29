const pool = require('../src/lib/db');

async function insertSampleData() {
  try {
    console.log('Inserting sample data...');
    
    const client = await pool.connect();
    
    // Sample residents data
    const sampleResidents = [
      {
        apartment: 101,
        block: 1,
        referrals: 0,
        code: '',
        phone: '+',
        email: '',
        protocol: ''
      },
    ];
    
    // Insert sample data
    for (const resident of sampleResidents) {
      try {
        await client.query(`
          INSERT INTO residents (apartment_number, block_number, phone_number, num_referrals, referral_code, protocol, email)
          VALUES ($1, $2, $3, $4, $5, $6, $7)
          ON CONFLICT (block_number, apartment_number) 
          DO UPDATE SET 
            phone_number = EXCLUDED.phone_number,
            num_referrals = EXCLUDED.num_referrals,
            referral_code = EXCLUDED.referral_code,
            protocol = EXCLUDED.protocol,
            email = EXCLUDED.email,
            updated_at = NOW()
        `, [resident.apartment, resident.block, resident.phone, resident.referrals, resident.code, resident.protocol, resident.email]);
        
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
