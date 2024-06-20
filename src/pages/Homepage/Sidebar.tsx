import {
	Box,
	Button,
	Center,
	Checkbox,
	Flex,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Link,
	Spacer,
	Image,
	Text,
	calc,
	Stack,
	Avatar,
} from "@chakra-ui/react";
import { MdBuild, MdCall, MdChat, MdFeed, MdLogout, MdPeople, MdPostAdd } from "react-icons/md";
import { CustomToast } from "../../components/toast";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Sidebar = (props: any) => {
	const { addToast } = CustomToast();
	const [cookies, removeCookie] = useCookies(["token"]);
	const navigate = useNavigate();

	const Logout = () => {
		removeCookie("token", { path: "/" });
		addToast({ message: "Successfully Logged Out", type: "success" });
		navigate("/login");
	};

	return (
		<>
			<Box bg="gray.100" width="20%" height="100%">
				<Flex width="100%" height="100%" flexDirection="column" alignItems="center">
					<Avatar
						border="4px black solid"
						boxSize="150px"
						margin="40px"
						size="2xl"
						name={props.userDetails.firstName + " " + props.userDetails.lastName}
						src={props.userDetails.photoUrl}
					/>
					<Text fontSize="2xl">Welcome {props.userDetails.firstName} !</Text>
					<Text>Username: {props.userDetails.username}</Text>
					<Spacer />
					<Stack direction="column" spacing={0} width="100%">
						<Button
							borderRadius="0"
							leftIcon={<MdFeed />}
							colorScheme="gray"
							variant="solid"
							height="60px"
							onClick={() => {
								navigate("/profile");
							}}
						>
							My Profile
						</Button>
						<Button
							borderRadius="0"
							leftIcon={<MdPostAdd />}
							colorScheme="gray"
							variant="solid"
							height="60px"
							onClick={() => {
								navigate("/post");
							}}
						>
							Post
						</Button>
						<Button
							borderRadius="0"
							leftIcon={<MdChat />}
							colorScheme="gray"
							variant="solid"
							height="60px"
						>
							Chat
						</Button>
						<Button
							borderRadius="0"
							leftIcon={<MdPeople />}
							colorScheme="gray"
							variant="solid"
							height="60px"
						>
							Find People
						</Button>
						<Button
							borderRadius="0"
							leftIcon={<MdLogout />}
							colorScheme="gray"
							variant="solid"
							height="60px"
							onClick={Logout}
						>
							Logout
						</Button>
					</Stack>
				</Flex>
			</Box>
		</>
	);
};

export default Sidebar;
