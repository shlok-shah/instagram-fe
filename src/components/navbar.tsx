import { Box, Flex, Text } from "@chakra-ui/react";

export const Navbar = () => {
	return (
		<Flex
			bg="gray.200"
			width="100%"
			height="10vh"
			position="sticky"
			top="0"
			borderBottom="2px black solid"
			alignItems="center"
		>
			<Text fontSize="2xl" padding="20px">
				Winstagram
			</Text>
		</Flex>
	);
};
