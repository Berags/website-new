import { Box, Anchor } from "grommet";
import { LinkPrevious } from "grommet-icons";

export default function Home() {
  return (
    <>
      <Box align="center" margin={{ top: "large" }}>
        work in progress
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
