import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

const useCreateCabin = () => {
	const queryClient = useQueryClient();

	const { mutate: createCabin, isLoading: isCreating } = useMutation({
		mutationFn: createEditCabin,
		onSuccess: () => {
			toast.success("New Cabin  created");

			queryClient.invalidateQueries({
				queryKey: ["cabins"],
			});
			
		},

		onError: (err) => toast.error(err.message),
	});
	return {isCreating,createCabin};
};

export default useCreateCabin;
