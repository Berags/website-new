import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }) => (
  <Flex justifyContent="center" alignItems="center" height="100vh" mb={8}>
    <Heading fontSize="10vw">{title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'jacopo beragnoli',
}
