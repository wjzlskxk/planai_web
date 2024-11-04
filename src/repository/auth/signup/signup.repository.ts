import { Signup } from "@/types/auth/auth.type";

export interface SignupRepository {
  postSignup(signupData: Signup): Promise<void>;
}
