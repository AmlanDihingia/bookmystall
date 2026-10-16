import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase'
import { saveLocalApplication } from '@/lib/storage'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Minimum required fields
    const brandName = (body.brand_name || body.brand || '').trim()
    const contactName = (body.contact_name || body.contact || '').trim()
    const rawPhone = (body.whatsapp_number || body.phone || '').toString()
    const phoneDigits = rawPhone.replace(/\D/g, '').slice(-10)

    if (!brandName) {
      return NextResponse.json(
        { error: 'Missing required field: brand_name' },
        { status: 400 }
      )
    }

    if (!contactName) {
      return NextResponse.json(
        { error: 'Missing required field: contact_name' },
        { status: 400 }
      )
    }

    if (phoneDigits.length < 10) {
      return NextResponse.json(
        { error: 'Valid 10-digit whatsapp_number is required' },
        { status: 400 }
      )
    }

    const payload = {
      brand_name: brandName,
      contact_name: contactName,
      whatsapp_number: phoneDigits,
      instagram_handle: (body.instagram_handle || body.instagram || '').trim() || null,
      kitchen_type: (body.kitchen_type || body.type || 'Vendor / Retail').trim(),
      category: (body.category || 'General Space Enquiry').trim(),
      hero_dishes: (body.hero_dishes || body.dishes || 'Space & Stall Enquiry').trim(),
      stall_tier: (body.stall_tier || body.tier || 'Standard').trim(),
      daily_capacity: (body.daily_capacity || body.capacity || 'Standard').trim(),
      fssai_status: (body.fssai_status || body.fssai || 'N/A').trim(),
      location_area: (body.location_area || body.area || '').trim() || null,
      additional_notes: (body.additional_notes || body.notes || '').trim() || null,
      source: (body.source || 'direct').trim(),
      status: 'pending' as const,
    }

    // 1. Always save locally first (ensures zero data loss)
    const savedLocal = await saveLocalApplication(payload)

    // 2. Attempt Supabase insert if URL is configured
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    let supabaseSaved = false

    if (supabaseUrl && !supabaseUrl.includes('placeholder.supabase.co')) {
      try {
        const supabase = createClient()
        const { error } = await supabase
          .from('applications')
          .insert([payload])

        if (!error) {
          supabaseSaved = true
        } else {
          console.warn('Supabase DB Insert Warning:', error.message)
        }
      } catch (sbErr: any) {
        console.warn('Supabase Connection Notice:', sbErr?.message || sbErr)
      }
    }

    // 3. Optional Google Apps Script / Webhook endpoint fallback
    const sheetEndpoint = process.env.NEXT_PUBLIC_SHEET_ENDPOINT
    if (sheetEndpoint && sheetEndpoint.startsWith('https://')) {
      try {
        await fetch(sheetEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      } catch (sheetErr) {
        console.warn('Sheet Endpoint Notice:', sheetErr)
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Application submitted and saved successfully',
      stored: {
        local: true,
        supabase: supabaseSaved,
      },
      data: savedLocal,
    })
  } catch (err: any) {
    console.error('API /api/apply Error:', err)
    return NextResponse.json(
      { error: err?.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
