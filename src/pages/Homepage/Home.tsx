// @ts-nocheck

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CustomToast } from "../../components/toast";
import { userApi } from "../../utils/axios";
import Sidebar from "./Sidebar";
import { Box, Flex } from "@chakra-ui/react";
import { Navbar } from "../../components/navbar";
import Post from "./Post";
import Profile from "./Profile";

const Home = () => {
	const navigate = useNavigate();
	const [userDetails, setUserDetails] = useState({});
	const { addToast } = CustomToast();
	const { route } = useParams();

	useEffect(() => {
		const getDetails = async () => {
			try {
				const details = await userApi.get("/getDetails");
				setUserDetails(details.data);
			} catch (err) {
				if (err.response.status === 403) {
					navigate("/login");
				} else {
					addToast({ message: "Some error occurred", type: "error" });
					console.log(err);
				}
			}
		};
		getDetails();
	}, []);

	return (
		<>
			<Box height="100vh" width="100%">
				<Navbar />
				<Flex width="100%" height="90vh">
					{console.log(route)}
					<Sidebar userDetails={userDetails} />
					{route === "post" && <Post userDetails={userDetails} />}
					{route === "profile" && <Profile userDetails={userDetails} />}
				</Flex>
			</Box>
		</>
	);
};

export default Home;
