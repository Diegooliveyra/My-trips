import client from 'graphql/client'
import { GET_PAGE } from 'graphql/queries'
import { useRouter } from 'next/dist/client/router'
import PageTemplate from 'templates/Pages'

export default function About() {
  const router = useRouter()

  if (router.isFallback) return null

  return <PageTemplate />
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGE, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))
  return { paths, fallback: true }
}

// export const getStaticProps = async () => {
//   console.log(pages)
//   return {
//     props: {}
//   }
// }
