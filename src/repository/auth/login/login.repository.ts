import { Login, NewAccessTokenResponse, TokenResponse } from "@/types/auth/auth.type";

export interface LoginRepository {
  postLogin(loginParams: Login): Promise<TokenResponse>;
  refreshAccessToken(refreshToken: { refreshToken: string }): Promise<NewAccessTokenResponse>;
}
