import { useToast, UseToastOptions } from "@chakra-ui/react";

interface newRes {
	message: string;
	type: UseToastOptions["status"];
}

export const CustomToast = () => {
	const toast = useToast();

	const addToast = (newRes: newRes) => {
		toast({
			description: newRes.message,
			status: newRes.type,
			position: "top-right",
			isClosable: true,
			duration: 5000,
			variant: "left-accent",
		});
	};

	return { addToast };
};
