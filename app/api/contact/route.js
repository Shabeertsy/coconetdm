import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        console.log('📨 Contact API: Request received');
        const body = await req.json();
        console.log('📝 Contact API: Body parsed:', { name: body.name, email: body.email });

        // Validate required fields
        if (!body.name || !body.email || !body.phone || !body.message) {
            console.log('❌ Contact API: Missing required fields');
            return NextResponse.json(
                { success: false, message: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Validate environment variables
        console.log('🔍 Contact API: Checking environment variables');
        console.log('GAS_URL exists:', !!process.env.GAS_URL);
        console.log('GAS_SECRET exists:', !!process.env.GAS_SECRET);

        if (!process.env.GAS_URL || !process.env.GAS_SECRET) {
            console.error('❌ Missing GAS_URL or GAS_SECRET environment variables');
            return NextResponse.json(
                { success: false, message: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Forward to Google Apps Script with API key
        console.log('🚀 Contact API: Forwarding to Google Apps Script');
        const payload = {
            ...body,
            apiKey: process.env.GAS_SECRET,
            timestamp: new Date().toISOString(),
        };
        console.log('📦 Payload (without apiKey):', { ...payload, apiKey: '***' });

        const res = await fetch(process.env.GAS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        console.log('📡 Response status:', res.status);
        const result = await res.json();
        console.log('📥 Response data:', result);

        if (!result.success) {
            console.log('❌ Google Apps Script returned error:', result.message);
            return NextResponse.json(
                { success: false, message: result.message || 'Failed to send message' },
                { status: 400 }
            );
        }

        console.log('✅ Contact API: Success!');
        return NextResponse.json(
            { success: true, message: 'Message sent successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('💥 Contact API error:', error);
        console.error('Error stack:', error.stack);
        return NextResponse.json(
            { success: false, message: 'Internal server error' },
            { status: 500 }
        );
    }
}

// Handle OPTIONS for CORS
export async function OPTIONS(req) {
    return NextResponse.json(
        { success: true },
        {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            }
        }
    );
}
