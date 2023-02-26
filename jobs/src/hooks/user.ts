import { useMutation } from "@tanstack/react-query";
import { createUser, loginUser } from "../api/user";

const USERS = "USERS"

export const useCreateUser = () => {
    return useMutation(createUser);
};

export const useLoginUser = () =>{
    return useMutation(loginUser)
};

export const useUsers = () = {
    return useQuery (loginUser);
}