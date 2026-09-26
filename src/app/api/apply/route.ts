import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Server-side validation
    const requiredFields = [
      'brand_name',
      'contact_name',
      'whatsapp_number',
      'kitchen_type',
      'category',
      'hero_dishes',
      'stall_tier',
      'daily_capacity',
      'fssai_status'
    ]

    for (const field of requiredFields) {
      if (!body[field] || typeof body[field] !== 'string' || !body[field].trim()) {
        return NextResponse.json(
          { error: `Missing or invalid required field: ${field}` },
          { status: 400 }
        )
      }
    }

    const payload = {
      brand_name: body.brand_name.trim(),
      contact_name: body.contact_name.trim(),
      whatsapp_number: body.whatsapp_number.replace(/\D/g, '').slice(-10),
      instagram_handle: body.instagram_handle?.trim() || null,
      kitchen_type: body.kitchen_type.trim(),
      category: body.category.trim(),
      hero_dishes: body.hero_dishes.trim(),
      stall_tier: body.stall_tier.trim(),
      daily_capacity: body.daily_capacity.trim(),
      fssai_status: body.fssai_status.trim(),
      location_area: body.location_area?.trim() || null,
      additional_notes: body.additional_notes?.trim() || null,
      source: body.source?.trim() || 'direct',
      status: 'pending'
    }

    // Insert into Supabase if configured
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    let supabaseResult = null

    if (supabaseUrl && !supabaseUrl.includes('placeholder.supabase.co')) {
      const supabase = createClient()
      const { data, error } = await supabase
        .from('applications')
        .insert([payload])
        .select()

      if (error) {
        console.error('Supabase Error:', error)
      } else {
        supabaseResult = data
      }
    }

    // Google Apps Script endpoint fallback if configured
    const sheetEndpoint = process.env.NEXT_PUBLIC_SHEET_ENDPOINT
    if (sheetEndpoint && sheetEndpoint.startsWith('https://')) {
      try {
        await fetch(sheetEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      } catch (sheetErr) {
        console.error('Sheet Endpoint Error:', sheetErr)
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
      data: supabaseResult ? supabaseResult[0] : payload
    })
  } catch (err: any) {
    console.error('API Error:', err)
    return NextResponse.json(
      { error: err?.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
