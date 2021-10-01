import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'

import { Content, Heading, Body } from './styles'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} aria-label="Close" />
    </LinkWrapper>

    <Heading>{heading}</Heading>

    <Body>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </Body>
  </Content>
)

export default PageTemplate
