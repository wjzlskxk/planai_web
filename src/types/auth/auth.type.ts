export interface Login {
  email: string;
  password: string;
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
