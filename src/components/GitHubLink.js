import {
  Link as ChakraLink,
  Button,
  Flex,
  Link
} from "@chakra-ui/react";
import {GitHubIcon} from "./GitHubIcon.js";

export const GitHubLink = () => {
    return (
      <ChakraLink href="https://github.com/Berags" flexGrow={1} mr={2}>
        <Button w={120}>
          <Flex alignItems={"center"}>
            <GitHubIcon />
            <Link ml={4}>github</Link>
          </Flex>
        </Button>
      </ChakraLink>
    );
}