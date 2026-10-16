import fs from 'fs/promises'
import path from 'path'
import { ApplicationPayload } from './supabase'

const DATA_FILE = path.join(process.cwd(), 'data', 'applications.json')

export async function getLocalApplications(): Promise<ApplicationPayload[]> {
  try {
    const fileContent = await fs.readFile(DATA_FILE, 'utf-8')
    const list = JSON.parse(fileContent)
    return Array.isArray(list) ? list : []
  } catch (err: any) {
    if (err.code === 'ENOENT') {
      return []
    }
    console.error('Error reading local applications:', err)
    return []
  }
}

export async function saveLocalApplication(app: ApplicationPayload): Promise<ApplicationPayload> {
  try {
    const dir = path.dirname(DATA_FILE)
    await fs.mkdir(dir, { recursive: true })

    const list = await getLocalApplications()
    const entry: ApplicationPayload = {
      ...app,
      id: app.id || `local_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      created_at: app.created_at || new Date().toISOString(),
      status: app.status || 'pending',
    }

    list.unshift(entry)
    await fs.writeFile(DATA_FILE, JSON.stringify(list, null, 2), 'utf-8')
    return entry
  } catch (err) {
    console.error('Error saving local application:', err)
    return app
  }
}
