import loginRepositoryImpl from "src/repository/auth/login/login.repositoryImpl";
import { Login } from "src/types/auth/auth.type";
import { useMutation } from "react-query";

export const usePostLoginMutation = () => {
  const mutation = useMutation((loginParams: Login) => loginRepositoryImpl.postLogin(loginParams));
  return mutation;
};
