import { Box, Heading, Text, Button } from "grommet";
import { Github, Projects, Linkedin, DocumentPdf } from "grommet-icons";

const Home = () => {
  return (
    <>
      <Box align="center" margin="large" animation="fadeIn">
        <Box animation={{ type: "pulse", size: "xsmall" }}>
          <Heading responsive={true} size={"xlarge"}>
            jacopo beragnoli
          </Heading>
        </Box>
        <Text margin="none" responsive={true} size={"large"}>
          full stack developer, software developer, software architect.
        </Text>
      </Box>
      <Box align="center" animation="fadeIn" responsive={true}>
        <Box width="small">
          <Button
            primary
            label="projects"
            margin="small"
            href="/projects"
            icon={<Projects color="white" />}
          />
        </Box>
        <Box width="small">
          <Button
            primary
            margin="small"
            href="/CV.pdf"
            icon={<DocumentPdf color="white" />}
            label="resume"
            download
          />
        </Box>
        <Box width="small">
          <Button
            primary
            margin="small"
            href="https://github.com/Berags"
            icon={<Github color="white" />}
            label="github"
          />
        </Box>
        <Box width="small">
          <Button
            primary
            label="linkedin"
            margin="small"
            href="https://www.linkedin.com/in/jacopoberagnoli/"
            icon={<Linkedin color="white" />}
          />
        </Box>
      </Box>
    </>
  );
}

export default Home;