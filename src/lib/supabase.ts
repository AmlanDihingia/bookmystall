import { createClient as createSupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient()

export function createClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    // Return a dummy client or throw warning when environment variables are not set yet
    console.warn('Supabase URL or Anon Key is missing. Ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set in .env.local')
  }
  return createSupabaseClient(
    supabaseUrl || 'https://placeholder.supabase.co',
    supabaseAnonKey || 'placeholder-anon-key'
  )
}

export type ApplicationPayload = {
  id?: string
  created_at?: string
  brand_name: string
  contact_name: string
  whatsapp_number: string
  instagram_handle?: string
  kitchen_type: string
  category: string
  hero_dishes: string
  stall_tier: string
  daily_capacity: string
  fssai_status: string
  location_area?: string
  additional_notes?: string
  source?: string
  status?: 'pending' | 'reviewed' | 'approved' | 'rejected'
}
