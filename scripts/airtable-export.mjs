// Usage (in CI): node scripts/airtable-export.mjs
// Requires env: AIRTABLE_TOKEN, AIRTABLE_BASE_ID, AIRTABLE_TABLE
import { writeFile } from 'node:fs/promises'

const {
  AIRTABLE_TOKEN,
  AIRTABLE_BASE_ID,
  AIRTABLE_TABLE = 'Submission',
} = process.env

if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE) {
  console.error('Missing Airtable env variables')
  process.exit(1)
}

const endpoint = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(
  AIRTABLE_TABLE
)}?filterByFormula=${encodeURIComponent(`{Status} = 'Approved'`)}`

const res = await fetch(endpoint, {
  headers: { Authorization: `Bearer ${AIRTABLE_TOKEN}` },
})
if (!res.ok) {
  console.error('Airtable fetch failed:', res.status, await res.text())
  process.exit(1)
}
const json = await res.json()

const projects = (json.records || []).map((r) => {
  const f = r.fields || {}
  return {
    id: r.id,
    name: f['Name'] || '',
    category: f['Category'] || '',
    description: f['Description'] || '',
    valueProposition: f['Value Proposition'] || '',
    website: f['Website'] || '',
    twitter: f['Twitter'] || '',
    github: f['GitHub'] || '',
    chains: f['Chains'] || [],
    logoUrl: f['Logo URL'] || '',
    approvedAt: f['Approved At'] || null,
  }
})

await writeFile('lib/projects.generated.json', JSON.stringify(projects, null, 2))
console.log('Exported', projects.length, 'projects to lib/projects.generated.json')
