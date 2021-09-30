import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'

import { Content, Heading, Body } from './styles'

const AboutTemplate = () => (
  <Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} aria-label="Close" />
    </LinkWrapper>

    <Heading>My Trips</Heading>

    <Body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
        aspernatur officia illo pariatur enim molestiae, sint molestias
        repudiandae inventore id, doloremque quam optio esse fuga quod porro!
        Natus, harum ipsam qui tempora quis cum magni fuga vitae architecto
        aliquid vel deleniti accusamus veritatis voluptatum commodi? Quae
        ducimus odit tenetur ea corporis doloribus accusamus quidem, maiores
        modi, numquam debitis sunt! Et consectetur a fugiat aliquid iste
        consequatur architecto asperiores nesciunt numquam excepturi officiis
        autem sequi ad ea consequuntur rem, dolore ipsum rerum distinctio
        repellendus ducimus laudantium iure ipsam. Voluptatum delectus nemo
        accusamus porro repellat et dolorum dignissimos, velit tenetur quas
        inventore.
      </p>
    </Body>
  </Content>
)

export default AboutTemplate
