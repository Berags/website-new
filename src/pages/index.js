import {
  Link as ChakraLink,
  Heading,
  Text,
  List,
  Center,
  Flex,
  ListItem,
} from "@chakra-ui/react";
import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import { GitHubLink } from "../components/GitHubLink";
import { LinkedinLink } from "../components/LinkedinLink";
import { ProjectLink } from "../components/ProjectLink";
import { useWindowSize } from "../utils/size";
import { MotionBox } from "../components/MotionBox";

const Index = () => {
  const size = useWindowSize();
  
  if (size.width <= 1700 && size.height >= 387 && size.height <= 826) {
    return (
      <Container height="100vh">
        <Flex justifyContent="center" alignItems="center" height="100vh" mb={8}>
          <Heading fontSize={60}>jacopo beragnoli</Heading>
        </Flex>
        <br />
        <br />
        <Main>
          <Center fontSize={"120%"}>
            full stack developer, software developer, software architect.
          </Center>
          <List spacing={3} my={0} mt={4}>
            <ListItem>
              <ProjectLink />
            </ListItem>
            <ListItem>
              <GitHubLink />
            </ListItem>
            <ListItem>
              <LinkedinLink />
            </ListItem>
          </List>
        </Main>

        <DarkModeSwitch />
        <Footer>
          <Text>jacopo beragnoli - &copy; 2021</Text>
        </Footer>
      </Container>
    );
  }
  return (
    <Container height="100vh">
      <Hero />
      <Main>
        <Center fontSize={"150%"}>
          full stack developer, software developer, software architect.
        </Center>
        <List spacing={3} my={0}>
          <ListItem>
            <ProjectLink />
          </ListItem>
          <ListItem>
            <GitHubLink />
          </ListItem>
          <ListItem>
            <LinkedinLink />
          </ListItem>
        </List>
      </Main>

      <DarkModeSwitch />
      <Footer>
        <Text>jacopo beragnoli - &copy; 2021</Text>
      </Footer>
    </Container>
  );
};

export default Index;
