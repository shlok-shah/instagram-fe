import { useEffect, useState } from "react";
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
	Skeleton,
	SkeletonCircle,
	SkeletonText,
	Text,
	Image,
	Textarea,
} from "@chakra-ui/react";
import { userApi } from "../../utils/axios";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { AiOutlineComment } from "react-icons/ai";

const Profile = (props: any) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [posts, setPosts] = useState<Array<any>>([]);
	const { userDetails } = props;

	useEffect(() => {
		const getPosts = async () => {
			const res = await userApi.get(`/posts?user=${userDetails._id}`);
			setPosts(res.data);
			setIsLoaded(true);
			console.log(res.data);
		};

		userDetails._id && getPosts();
	}, [userDetails]);
	return (
		<>
			<Box bg="white" height="100%" width="100%" padding="20px" overflow="auto">
				<Text
					fontSize="2xl"
					fontWeight="600"
					textDecoration="underline"
					textUnderlineOffset="5px"
				>
					Profile
				</Text>
				{posts && (
					<>
						{posts.map((post) => {
							return (
								<Card margin="10px" width="50%" key={post._id}>
									<CardHeader>
										<Flex>
											<Flex
												flex="1"
												gap="4"
												alignItems="center"
												flexWrap="wrap"
											>
												<Avatar
													name={
														post.user.firstName +
														" " +
														post.user.lastName
													}
													src={post.user.photoUrl}
												/>
												<Box>
													<Heading size="sm">
														{post.user.firstName} {post.user.lastName}
													</Heading>
													<Text>@{post.user.username}</Text>
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
									<CardBody paddingBlock={"10px"}>{post.captionText}</CardBody>
									<CardFooter
										justify="space-between"
										flexWrap="wrap"
										sx={{
											"& > button": {
												minW: "136px",
											},
										}}
									>
										<Button flex="1" variant="ghost" leftIcon={<FcLike />}>
											Like
										</Button>
										<Button
											flex="1"
											variant="ghost"
											leftIcon={<AiOutlineComment />}
										>
											Comment
										</Button>
									</CardFooter>
								</Card>
							);
						})}
					</>
				)}
			</Box>
		</>
	);
};
export default Profile;
