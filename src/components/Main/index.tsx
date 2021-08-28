import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map/Map'), { ssr: false })

const Main = () => (
  <Map
    places={[
      {
        id: '2',
        name: 'Roma',
        slug: 'roma',
        location: {
          latitude: -20,
          longitude: -50
        }
      }
    ]}
  />
)

export default Main
