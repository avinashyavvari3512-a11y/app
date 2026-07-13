import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, company } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Store in MongoDB
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME || 'portfolio_db');
    
    const result = await db.collection('contacts').insertOne({
      name,
      email,
      subject: subject || 'No subject',
      message,
      company: company || 'Not provided',
      createdAt: new Date(),
      status: 'new'
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        id: result.insertedId.toString()
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving contact:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  return NextResponse.json(
    { message: 'Contact API is working' },
    { status: 200 }
  );
}
