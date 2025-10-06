import { groq } from 'next-sanity'

export const POSTS_QUERY = groq`*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  "category": category->title,
  backgroundColor,
  featured,
  spotlight,
  mainImage {
    asset->,
    alt
  }
}`

export const POST_QUERY = groq`*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  "category": category->title,
  backgroundColor,
  featured,
  spotlight,
  body,
  mainImage {
    asset->,
    alt
  }
}`

export const SPOTLIGHT_POST_QUERY = groq`*[_type == "blogPost" && spotlight == true][0] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  "category": category->title,
  backgroundColor,
  spotlight,
  mainImage {
    asset->,
    alt
  }
}`

export const FEATURED_POSTS_QUERY = groq`*[_type == "blogPost" && featured == true] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  "category": category->title,
  backgroundColor,
  featured,
  mainImage {
    asset->,
    alt
  }
}`

export const CATEGORIES_QUERY = groq`*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug
}`
