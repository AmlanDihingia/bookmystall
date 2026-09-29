export const revalidate = 0 // Disable caching for this route so data is always fresh

import { createClient } from '@/lib/supabase'
import { ApplicationPayload } from '@/lib/supabase'

// Optional: format the date nicely if date-fns is installed, otherwise fallback
const formatDate = (dateString: string) => {
  try {
    return new Date(dateString).toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  } catch (e) {
    return dateString
  }
}

export default async function DashboardPage() {
  const supabase = createClient()
  
  // Fetch all applications, ordered by newest first
  const { data: applications, error } = await supabase
    .from('applications')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return (
      <div className="p-8 text-red-600 bg-red-50 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Error loading dashboard</h1>
        <p>{error.message}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FFFBF4] text-[#2A1320] p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-6">
        
        <header className="flex justify-between items-end border-b border-[#EADDD3] pb-6">
          <div>
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-[#B3122A]">
              Vendor Applications
            </h1>
            <p className="text-[#6B5560] mt-1">
              Pet Puja 2026 Dashboard · Total: {applications?.length || 0}
            </p>
          </div>
        </header>

        <div className="bg-white border border-[#EADDD3] rounded-2xl shadow-sm overflow-hidden overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs uppercase bg-[#FCEBEE] text-[#7A0C1E] border-b border-[#EADDD3]">
              <tr>
                <th className="px-4 py-4 font-semibold rounded-tl-2xl">Date</th>
                <th className="px-4 py-4 font-semibold">Brand & Contact</th>
                <th className="px-4 py-4 font-semibold">Stall / Tier</th>
                <th className="px-4 py-4 font-semibold">Menu / Category</th>
                <th className="px-4 py-4 font-semibold">FSSAI & Capacity</th>
                <th className="px-4 py-4 font-semibold rounded-tr-2xl">WhatsApp</th>
              </tr>
            </thead>
            <tbody>
              {applications && applications.length > 0 ? (
                applications.map((app: ApplicationPayload) => (
                  <tr key={app.id} className="border-b border-[#EADDD3] hover:bg-[#FFFBF4] transition-colors">
                    <td className="px-4 py-4 text-[#6B5560] whitespace-nowrap">
                      {formatDate(app.created_at || '')}
                    </td>
                    <td className="px-4 py-4">
                      <div className="font-bold text-[#2A1320] text-base">{app.brand_name}</div>
                      <div className="text-[#6B5560]">{app.contact_name}</div>
                      {app.instagram_handle && (
                        <div className="text-[#EE6B1F] text-xs mt-1">{app.instagram_handle}</div>
                      )}
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-md bg-[#F2A900]/20 text-[#2A1320] font-medium text-xs mb-1">
                        {app.stall_tier}
                      </span>
                      <div className="text-[#6B5560] text-xs">{app.kitchen_type}</div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="font-medium text-[#159A92]">{app.category}</div>
                      <div className="text-xs text-[#6B5560] mt-1 max-w-[200px] truncate" title={app.hero_dishes}>
                        {app.hero_dishes}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="text-[#2A1320]">{app.fssai_status}</div>
                      <div className="text-xs text-[#6B5560] mt-1">{app.daily_capacity} plates/night</div>
                    </td>
                    <td className="px-4 py-4">
                      <a 
                        href={`https://wa.me/91${app.whatsapp_number}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-3 py-1.5 bg-[#1F9D55] hover:bg-[#188044] text-white rounded-lg text-xs font-semibold transition-colors"
                      >
                        Chat
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-[#6B5560]">
                    No applications received yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
