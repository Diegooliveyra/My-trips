import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map/Map'), { ssr: false })

const Main = () => <Map />

export default Main
