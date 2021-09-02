import client from 'graphql/client'
import { GET_PAGE } from 'graphql/queries'
import AboutTamplate from 'templates/About'

export default function About() {
  return <AboutTamplate />
}

export const getStaticProps = async () => {
  const { pages } = await client.request(GET_PAGE)
  console.log(pages)
  return {
    props: {}
  }
}
