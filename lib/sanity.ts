import { client } from '@/sanity/lib/client'
import { POSTS_QUERY, POST_QUERY, SPOTLIGHT_POST_QUERY, FEATURED_POSTS_QUERY, CATEGORIES_QUERY } from '@/sanity/lib/queries'

export interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  publishedAt: string
  category?: string
  backgroundColor?: string
  featured?: boolean
  spotlight?: boolean
  mainImage?: {
    asset: {
      _ref: string
      _type: string
    }
    alt?: string
  }
  body?: any
}

export interface Category {
  _id: string
  title: string
  slug: { current: string }
}

export async function getPosts(): Promise<BlogPost[]> {
  return await client.fetch(POSTS_QUERY)
}

export async function getPost(slug: string): Promise<BlogPost> {
  return await client.fetch(POST_QUERY, { slug })
}

export async function getSpotlightPost(): Promise<BlogPost | null> {
  return await client.fetch(SPOTLIGHT_POST_QUERY)
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  return await client.fetch(FEATURED_POSTS_QUERY)
}

export async function getCategories(): Promise<Category[]> {
  return await client.fetch(CATEGORIES_QUERY)
}
