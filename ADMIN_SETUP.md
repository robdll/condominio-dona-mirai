# Admin Document Upload Setup

## Environment Variables Required

Create a `.env.local` file in your project root with the following variables:

```env
# Vercel Blob Configuration
BLOB_READ_WRITE_TOKEN=your_vercel_blob_token_here

# Admin Authentication
ADMIN_SECRET_KEY=your_secure_secret_key_here

# For development (optional)
NEXT_PUBLIC_ADMIN_SECRET_KEY=admin123
```

## Getting Started

1. **Get Vercel Blob Token:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Navigate to your project settings
   - Go to the "Storage" tab
   - Create a new Blob store and copy the `BLOB_READ_WRITE_TOKEN`

2. **Set Admin Secret Key:**
   - Choose a secure secret key for admin authentication
   - Add it to both `ADMIN_SECRET_KEY` and `NEXT_PUBLIC_ADMIN_SECRET_KEY` in your `.env.local`

3. **Access Admin Panel:**
   - Navigate to `/admin/documentos` in your application
   - Enter your secret key to access the upload interface

## How to Use

1. **Upload Documents:**
   - Go to `/admin/documentos`
   - Enter your secret key
   - Fill in document name, description, and select file
   - Click "Upload Document"

2. **Update Document URLs:**
   - After uploading, copy the returned URL
   - Manually update the `url` field in `src/components/Documentos/documentos.constant.js`
   - Replace the empty string with the actual blob URL

3. **View Documents:**
   - Users can view and download documents at `/documentos`
   - Documents with URLs will show as clickable download links
   - Documents without URLs will show as "Not Available"

## Security Notes

- The admin secret key is required for all uploads
- Files are stored securely in Vercel Blob
- Only you can upload documents (no user management system)
- Consider changing the default secret key in production
