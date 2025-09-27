# Database Setup Guide

This guide will help you connect your Next.js application to your Neon database and fetch real residents data.

## Prerequisites

- Neon database account and project
- Database credentials from Neon dashboard

## Step 1: Configure Environment Variables

1. Open the `.env.local` file in your project root
2. Replace the placeholder values with your actual Neon database credentials:

```env
# Option 1: Use the full connection string (recommended)
DATABASE_URL=postgresql://username:password@hostname:port/database_name?sslmode=require

# Option 2: Use individual parameters
DB_HOST=your-neon-host
DB_PORT=5432
DB_NAME=your-database-name
DB_USER=your-username
DB_PASSWORD=your-password
DB_SSL=true
```

### How to get your Neon credentials:

1. Go to your Neon dashboard
2. Select your project
3. Go to the "Connection Details" section
4. Copy the connection string or individual parameters

## Step 2: Create the Residents Table

Run this SQL in your Neon SQL editor:

```sql
CREATE TABLE IF NOT EXISTS residents (
  id               BIGSERIAL PRIMARY KEY,
  apartment_number INTEGER  NOT NULL,
  block_number     INTEGER  NOT NULL,
  phone_number     VARCHAR(32)  NOT NULL,
  num_referrals    INTEGER       NOT NULL DEFAULT 0,
  referral_code      VARCHAR(32)  NOT NULL,
  created_at       TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
  updated_at       TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
  -- Make each (block, apartment) appear once; drop this if duplicates are allowed
  CONSTRAINT uq_residents_block_apartment UNIQUE (block_number, apartment_number),
  CONSTRAINT chk_num_referrals_nonneg CHECK (num_referrals >= 0)
);
```

## Step 3: Test the Database Connection

Run the test script to verify your connection:

```bash
node scripts/test-db.js
```

This will:
- Test the database connection
- Check if the residents table exists
- Show current data count
- Display sample data if available

## Step 4: Insert Sample Data (Optional)

If you want to test with sample data, run:

```bash
node scripts/insert-sample-data.js
```

This will insert 10 sample residents with different referral counts.

## Step 5: Start the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000/participantes` to see the residents data from your database.

## API Endpoint

The application now includes an API endpoint at `/api/residents` that:

- Fetches all residents from the database
- Returns data in the format expected by the frontend
- Handles errors gracefully
- Sorts residents by referral count (descending)

## Troubleshooting

### Connection Issues

1. **"Database connection failed"**: Check your `.env.local` file and ensure credentials are correct
2. **"Table does not exist"**: Run the CREATE TABLE SQL in your Neon database
3. **"SSL connection error"**: Ensure `sslmode=require` is in your connection string

### No Data Showing

1. Check if the residents table has data: `SELECT COUNT(*) FROM residents;`
2. Run the sample data script if needed
3. Check the browser console for any API errors

### Environment Variables Not Loading

1. Ensure `.env.local` is in the project root
2. Restart the development server after changing environment variables
3. Check that variable names match exactly (case-sensitive)

## File Structure

```
src/
├── lib/
│   └── db.js                 # Database connection configuration
├── app/
│   ├── api/
│   │   └── residents/
│   │       └── route.js      # API endpoint for residents data
│   └── participantes/
│       └── page.js           # Updated component with real data fetching
scripts/
├── test-db.js               # Database connection test script
└── insert-sample-data.js    # Sample data insertion script
```

## Next Steps

- Add more API endpoints for CRUD operations
- Implement data validation
- Add error logging
- Set up database migrations
- Add authentication if needed
