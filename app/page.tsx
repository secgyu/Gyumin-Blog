import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import { redirect } from 'next/navigation'

export default async function Page() {
  redirect('/blog')
}
