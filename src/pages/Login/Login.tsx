import {
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
	Text,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { MdOutlineMail } from "react-icons/md";
import { HiLockClosed } from "react-icons/hi";
import { TbEye, TbEyeClosed } from "react-icons/tb";
import { useState } from "react";
import { userApi } from "../../utils/axios";
import { AxiosError } from "axios";
import { isElementAccessExpression } from "typescript";

const Login = () => {
	const [showPass, setShowPass] = useState(false);
	const handleClick = () => setShowPass(!showPass);
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			rememberMe: false,
		},
		onSubmit: async (values) => {
			try {
				const res = await userApi.post("/login", { data: values });
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
					<Text fontSize="24" fontWeight="medium">
						Login
					</Text>
					<form onSubmit={formik.handleSubmit}>
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
							<FormLabel>Password</FormLabel>
							<InputGroup>
								<InputLeftElement pointerEvents="none">
									<HiLockClosed color="gray.300" />
								</InputLeftElement>
								<InputRightElement width="4.5rem">
									<Button h="1.75rem" size="sm" onClick={handleClick}>
										{showPass ? <TbEye /> : <TbEyeClosed />}
									</Button>
								</InputRightElement>
								<Input
									type={showPass ? "text" : "password"}
									name="password"
									onChange={formik.handleChange}
									value={formik.values.password}
								/>
							</InputGroup>
						</FormControl>
						<FormControl>
							<Checkbox
								marginTop="4"
								name="rememberMe"
								onChange={formik.handleChange}
								isChecked={formik.values.rememberMe}
							>
								Remember Me
							</Checkbox>
						</FormControl>
						<Button mt={4} colorScheme="teal" w="100%" type="submit">
							Submit
						</Button>
					</form>
					<Spacer />
					<Link href="/signup">Don&apos;t have an account, Signup here!</Link>
				</Flex>
			</Center>
		</>
	);
};

export default Login;
