export interface Login {
  email: string;
  password: string;
}

export interface Signup {
  email: string;
  verify: string;
  password: string;
  passwordCheck: string;
}

export interface TokenResponse {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface NewAccessTokenResponse {
  accessToken: string;
}
