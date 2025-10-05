import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name, category, description, valueProposition, website, twitter, github, chains, logoUrl } =
      await req.json()

    if (!name || !category || !description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const token = process.env.AIRTABLE_TOKEN
    const baseId = process.env.AIRTABLE_BASE_ID
    const table = process.env.AIRTABLE_TABLE || "Projects"

    if (!token || !baseId || !table) {
      return NextResponse.json({ error: "Airtable environment variables are not configured" }, { status: 500 })
    }

    const endpoint = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}`
    const fields: Record<string, any> = {
      Name: name,
      Category: category,
      Description: description,
      "Value Proposition": valueProposition || "",
      Website: website || "",
      Twitter: twitter || "",
      GitHub: github || "",
      Chains: Array.isArray(chains) ? chains : [],
      "Logo URL": logoUrl || "",
      Status: "Pending", // used by GitHub Action to filter approved records
    }

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields, typecast: true }),
      // Next.js server route – no need for special runtime
    })

    const data = await res.json()
    if (!res.ok) {
      return NextResponse.json({ error: data?.error?.message || "Airtable error" }, { status: 500 })
    }

    return NextResponse.json({ ok: true, id: data?.id })
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Unexpected error" }, { status: 500 })
  }
}
