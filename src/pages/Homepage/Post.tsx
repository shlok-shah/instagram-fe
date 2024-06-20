import {
	Avatar,
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Flex,
	Heading,
	IconButton,
	Text,
	Image,
	Input,
	Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { BiChat, BiImageAdd, BiLike, BiSend, BiShare } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CustomToast } from "../../components/toast";
import { userApi } from "../../utils/axios";

const Post = (props: any) => {
	const { userDetails } = props;
	const { addToast } = CustomToast();

	let [value, setValue] = useState("");

	let handleInputChange = (e: any) => {
		let inputValue = e.target.value;
		setValue(inputValue);
	};

	let handlePost = async (value: string) => {
		try {
			const res = await userApi.post("/post", { type: "text", textBody: value });
			addToast({ message: res.data.message, type: "success" });
		} catch (err: any) {
			addToast({ message: err.message, type: "error" });
			console.log(err);
		}
	};

	return (
		<>
			<Box bg="white" height="100%" width="100%" padding="20px">
				<Text
					fontSize="2xl"
					fontWeight="600"
					textDecoration="underline"
					textUnderlineOffset="5px"
				>
					New Post
				</Text>
				<Card margin="10px" width="50%">
					<CardHeader>
						<Flex>
							<Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
								<Avatar name={userDetails.firstName} src={userDetails.photoUrl} />

								<Box>
									<Heading size="sm">
										{userDetails.firstName} {userDetails.lastName}
									</Heading>
									<Text>@{userDetails.username}</Text>
								</Box>
							</Flex>
							<IconButton
								variant="ghost"
								colorScheme="gray"
								aria-label="See menu"
								icon={<BsThreeDotsVertical />}
							/>
						</Flex>
					</CardHeader>
					{/* <Image
						objectFit="cover"
						src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
						alt="Chakra UI"
					/> */}
					<CardBody>
						<Textarea
							placeholder="Write over here"
							onChange={handleInputChange}
							value={value}
						></Textarea>
					</CardBody>

					<CardFooter
						justify="space-between"
						flexWrap="wrap"
						sx={{
							"& > button": {
								minW: "136px",
							},
						}}
					>
						<Button flex="1" variant="ghost" leftIcon={<BiImageAdd />}>
							Add Image
						</Button>
						<Button
							flex="1"
							variant="ghost"
							leftIcon={<BiSend />}
							onClick={() => handlePost(value)}
						>
							Post
						</Button>
					</CardFooter>
				</Card>
			</Box>
		</>
	);
};

export default Post;
