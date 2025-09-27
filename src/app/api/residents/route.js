import pool from '../../../lib/db';

export async function GET() {
  try {
    // Query to fetch residents data
    const query = `
      SELECT 
        apartment_number,
        block_number,
        num_referrals,
        referral_code
      FROM residents 
      ORDER BY num_referrals DESC, apartment_number ASC
    `;
    
    const result = await pool.query(query);
    
    // Transform the data to match the frontend format
    const residents = result.rows.map(row => ({
      apartamento: row.apartment_number.toString(),
      bloco: row.block_number.toString(),
      indicacoes: row.num_referrals,
      codigoReferencia: row.referral_code
    }));
    
    return Response.json({
      success: true,
      data: residents,
      count: residents.length
    });
    
  } catch (error) {
    console.error('Database query error:', error);
    
    return Response.json({
      success: false,
      error: 'Failed to fetch residents data',
      message: error.message
    }, { status: 500 });
  }
}
