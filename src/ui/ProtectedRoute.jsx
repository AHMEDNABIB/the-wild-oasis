import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import useUser from "../features/authentication/useUser";
import Spinner from "./Spinner";

const Fullpage = styled.div`
	height: 100vh;
	background-color: var(--color-grey-50);
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ProtectedRoute = ({ children }) => {
	const navigate = useNavigate();
	// 1. load auth user
	const { user, isLoading, isAuthenticated } = useUser();

	// redirect to login if not authenticated

	useEffect(() => {
		if (!isAuthenticated && !isLoading) {
			return navigate("/login");
		}
	}, [isAuthenticated, isLoading, navigate]);

	// while loading show spinner

	if (isLoading)
		return (
			<Fullpage>
				<Spinner />
			</Fullpage>
		);

	
   if(isAuthenticated) return children;
};

export default ProtectedRoute;
