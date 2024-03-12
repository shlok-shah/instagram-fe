import {
	Box,
	Button,
	Center,
	Flex,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	Link,
	Spacer,
	Text,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { MdOutlineMail } from "react-icons/md";
import { HiLockClosed } from "react-icons/hi";
import { TbEye, TbEyeClosed } from "react-icons/tb";
import { useState } from "react";
import { userApi } from "../../utils/axios";
import { AxiosError, AxiosResponse } from "axios";

const Signup = () => {
	const formik = useFormik({
		initialValues: {
			email: "",
			firstName: "",
			lastName: "",
			username: "",
			password: "",
			confirmPassword: "",
		},
		onSubmit: async (values) => {
			try {
				const res: AxiosResponse = await userApi.post("/signup", { data: values });
				console.log(res.data);
			} catch (err: unknown) {
				if (err instanceof AxiosError) {
					console.log(err.message);
				} else {
					console.log(err);
				}
			}
		},
	});
	return (
		<>
			<Center w="100%" h="100vh" minH="400px" bg="radial-gradient(circle, #319795, white)">
				<Flex
					minW="350px"
					minH="400px"
					p="8"
					color="black"
					flexDir="column"
					justifyContent="space-around"
					alignItems="center"
					borderRadius="20px"
					border="2px gray solid"
					bg="white"
				>
					<Text fontSize="24" fontWeight="medium" alignSelf="Text">
						Signup
					</Text>
					<form onSubmit={formik.handleSubmit}>
						<Flex gap="20px" paddingTop="20px">
							<div>
								<FormControl>
									<FormLabel>First Name</FormLabel>
									<InputGroup>
										<Input
											type="text"
											name="firstName"
											onChange={formik.handleChange}
											value={formik.values.firstName}
										/>
									</InputGroup>
								</FormControl>
								<FormControl>
									<FormLabel>Username</FormLabel>
									<InputGroup>
										<Input
											type="text"
											name="username"
											onChange={formik.handleChange}
											value={formik.values.username}
										/>
									</InputGroup>
								</FormControl>
								<FormControl>
									<FormLabel>Password</FormLabel>
									<InputGroup>
										<InputLeftElement pointerEvents="none">
											<HiLockClosed color="gray.300" />
										</InputLeftElement>
										<Input
											type="password"
											name="password"
											onChange={formik.handleChange}
											value={formik.values.password}
										/>
									</InputGroup>
								</FormControl>
							</div>
							<div>
								<FormControl>
									<FormLabel>Last Name</FormLabel>
									<InputGroup>
										<Input
											type="text"
											name="lastName"
											onChange={formik.handleChange}
											value={formik.values.lastName}
										/>
									</InputGroup>
								</FormControl>
								<FormControl>
									<FormLabel>Email address</FormLabel>
									<InputGroup>
										<InputLeftElement pointerEvents="none">
											<MdOutlineMail color="gray.300" />
										</InputLeftElement>
										<Input
											type="email"
											name="email"
											onChange={formik.handleChange}
											value={formik.values.email}
										/>
									</InputGroup>
								</FormControl>

								<FormControl>
									<FormLabel>Confirm Password</FormLabel>
									<InputGroup>
										<InputLeftElement pointerEvents="none">
											<HiLockClosed color="gray.300" />
										</InputLeftElement>
										<Input
											type="password"
											name="confirmPassword"
											onChange={formik.handleChange}
											value={formik.values.confirmPassword}
										/>
									</InputGroup>
								</FormControl>
							</div>
						</Flex>
						<Button mt={4} colorScheme="teal" w="100%" type="submit">
							Create account
						</Button>
					</form>
					<Spacer />
					<Link href="/login">Already have an account, Login here!</Link>
				</Flex>
			</Center>
		</>
	);
};

export default Signup;
