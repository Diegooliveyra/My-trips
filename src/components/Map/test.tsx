import { render, screen } from '@testing-library/react'
import Map from './Map'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)
    // screen.logTestingPlaygroundURL() gera uma Url para acesso ao playground
    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })
  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Petropolis',
      slug: 'petropolis',
      location: {
        latitude: 25,
        longitude: 75
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Roma',
      slug: 'roma',
      location: {
        latitude: 125,
        longitude: -75
      }
    }
    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/petropolis/i)).toBeInTheDocument()
    expect(screen.getByTitle(/roma/i)).toBeInTheDocument()
  })
})
