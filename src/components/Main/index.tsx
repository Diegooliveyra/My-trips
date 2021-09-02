import dynamic from 'next/dynamic'
import LinkWrapper from 'components/LinkWrapper'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

const Map = dynamic(() => import('components/Map/Map'), { ssr: false })

const Main = () => (
  <>
    <Map />
    <LinkWrapper href="/about">
      <InfoOutline size="32" aria-label="About" />
    </LinkWrapper>
  </>
)

export default Main
