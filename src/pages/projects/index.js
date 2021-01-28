import { Link, Button, Center, Text, List, ListItem } from "@chakra-ui/react";
import { Container } from "../../components/Container";
import { Hero } from "../../components/Hero";
import { Main } from "../../components/Main";
import { DarkModeSwitch } from "../../components/DarkModeSwitch";
import { Footer } from "../../components/Footer";

const Index = () => {
  return (
    <Container height="100vh">
      <Hero title={"projects"} />
      <Main>
        <br />
        <List spacing={3} my={0} mt={4}>
          <ListItem>
            <Link href="/">
              <Button variant="link">tuney</Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/">
              <Button variant="link">sorting visualization</Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/">
              <Button variant="link">pathfinding alogorithm</Button>
            </Link>
          </ListItem>
        </List>
        <Center>
          <Link href="/">
            <Button variant="link">home</Button>
          </Link>
        </Center>
      </Main>

      <DarkModeSwitch />
      <Footer>
        <Text>jacopo beragnoli - &copy; 2021</Text>
      </Footer>
    </Container>
  );
};

export default Index;
