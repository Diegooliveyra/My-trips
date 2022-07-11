import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'

const PageTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size="32" />
    </LinkWrapper>
    <S.Heading>My Trips</S.Heading>
    <S.Body>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel animi
        consequatur, neque rem accusantium consequuntur quisquam nam eum?
        Aliquid qui neque, provident enim aliquam nemo ratione quisquam suscipit
        laudantium sint!
      </p>
    </S.Body>
  </S.Content>
)

export default PageTemplate
