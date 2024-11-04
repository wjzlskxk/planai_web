import { Signup } from "@/types/auth/auth.type";
import { SignupRepository } from "./signup.repository";
import axios from "axios";
import CONFIG from "src/config/config.json";

const axiosInstance = axios.create({
  baseURL: CONFIG.serverUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

class SignupRepositoryImpl implements SignupRepository {
  public async postSignup(signupData: Signup): Promise<void> {
    axiosInstance.post("/signup", signupData);
  }
}

const signupRepositoryImpl = new SignupRepositoryImpl();
export default signupRepositoryImpl;
