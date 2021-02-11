import {
  Box,
  Heading,
  Paragraph,
  Anchor,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  InfiniteScroll,
  List,
  Markdown,
} from "grommet";
import {
  LinkPrevious,
  Projects,
  Linkedin,
  Favorite,
  Link,
} from "grommet-icons";

export default function Home() {
  return (
    <>
      <Box align="center" margin="large" animation="fadeIn">
        <Box animation={{ type: "pulse", size: "xsmall" }}>
          <Heading responsive={true} size="xlarge">
            projects
          </Heading>
        </Box>
      </Box>
      <Box align="center">
        <Box
          align="center"
          animation="fadeIn"
          responsive={true}
          direction="row"
        >
          <Card
            height="medium"
            width="medium"
            background="light-1"
            margin="small"
          >
            <CardHeader pad={{ left: "small" }}>
              <Heading level={2}>Tuney</Heading>
            </CardHeader>
            <CardBody pad={{ left: "small" }}>
              <Anchor
                href="https://tuney.it"
                label="https://tuney.it"
                size="medium"
              />
              <Heading level={3}>built with</Heading>
              <Box overflow="auto">
                <InfiniteScroll items={tuneyLanguages}>
                  {(item) => (
                    <Anchor margin="xsmall" href={item.link}>
                      {item.language}
                    </Anchor>
                  )}
                </InfiniteScroll>
              </Box>
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Button
                icon={<Favorite color="red" />}
                hoverIndicator
                href="https://github.com/TuneyApp"
              />
              <Button
                icon={<Link color="plain" />}
                hoverIndicator
                href="https://tuney.it"
              />
            </CardFooter>
          </Card>
          <Card
            height="medium"
            width="medium"
            background="light-1"
            margin="small"
          >
            <CardHeader pad={{ left: "small" }}>
              <Heading level={2}>Sorting</Heading>
            </CardHeader>
            <CardBody pad={{ left: "small" }}>
              <Anchor
                href="/projects/sorting"
                label="/projects/sorting"
                size="medium"
              />
              <Heading level={3}>built with</Heading>
              <Box overflow="auto">
                <InfiniteScroll items={sortingLanguages}>
                  {(item) => (
                    <Anchor margin="xsmall" href={item.link}>
                      {item.language}
                    </Anchor>
                  )}
                </InfiniteScroll>
              </Box>
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Button
                icon={<Favorite color="red" />}
                hoverIndicator
                href="https://github.com/TuneyApp"
              />
              <Button
                icon={<Link color="plain" />}
                hoverIndicator
                href="https://tuney.it"
              />
            </CardFooter>
          </Card>
          <Card
            height="medium"
            width="medium"
            background="light-1"
            margin="small"
          >
            <CardHeader pad={{ left: "small" }}>
              <Heading level={2}>Pathfinding</Heading>
            </CardHeader>
            <CardBody pad={{ left: "small" }}>
              <Anchor
                href="/projects/pathfinding"
                label="/projects/pathfinding"
                size="medium"
              />
              <Heading level={3}>built with</Heading>
              <Box overflow="auto">
                <InfiniteScroll items={sortingLanguages}>
                  {(item) => (
                    <Anchor margin="xsmall" href={item.link}>
                      {item.language}
                    </Anchor>
                  )}
                </InfiniteScroll>
              </Box>
            </CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Button
                icon={<Favorite color="red" />}
                hoverIndicator
                href="https://github.com/TuneyApp"
              />
              <Button
                icon={<Link color="plain" />}
                hoverIndicator
                href="https://tuney.it"
              />
            </CardFooter>
          </Card>
        </Box>
      </Box>
      <Box
        align="center"
        alignContent="center"
        animation="fadeIn"
        responsive={true}
        margin={{ top: "xlarge" }}
      >
        <Anchor href="/" label="home" size="large" icon={<LinkPrevious />} />
      </Box>
    </>
  );
}

const tuneyLanguages = [
  { language: "node.js", link: "https://nodejs.org/" },
  {
    language: "apollo server",
    link: "https://www.apollographql.com/docs/apollo-server/",
  },
  { language: "graphql", link: "https://graphql.org/" },
  {
    language: "postgresql",
    link: "https://www.postgresql.org/",
  },
  { language: "next.js", link: "https://nextjs.org/" },
  { language: "react", link: "https://reactjs.org/" },
  { language: "chakra-ui", link: "https://chakra-ui.com/" },
];

const sortingLanguages = [
  { language: "next.js", link: "https://nextjs.org/" },
  { language: "react", link: "https://reactjs.org/" },
  { language: "grommet", link: "https://v2.grommet.io/" },
];
