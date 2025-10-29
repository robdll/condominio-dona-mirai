import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Check for admin secret key
    const authHeader = request.headers.get('authorization');
    const adminSecretKey = process.env.ADMIN_SECRET_KEY;
    
    if (!adminSecretKey) {
      return NextResponse.json(
        { error: 'Admin secret key not configured' },
        { status: 500 }
      );
    }

    if (!authHeader || authHeader !== `Bearer ${adminSecretKey}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get form data
    const formData = await request.formData();
    const file = formData.get('file');
    const name = formData.get('name');
    const description = formData.get('description');
    const date = formData.get('date');

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    if (!name || !description || !date) {
      return NextResponse.json(
        { error: 'Name, description, and date are required' },
        { status: 400 }
      );
    }

    // Generate unique filename
    const timestamp = Date.now();
    const fileExtension = file.name.split('.').pop();
    const filename = `${name.replace(/[^a-zA-Z0-9]/g, '_')}_${timestamp}.${fileExtension}`;

    // Upload to Vercel Blob
    const blob = await put(filename, file, {
      access: 'public',
    });

    return NextResponse.json({
      success: true,
      url: blob.url,
      filename: filename,
      name: name,
      description: description,
      date: date
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    );
  }
}
