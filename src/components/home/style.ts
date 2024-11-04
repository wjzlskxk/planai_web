import styled from "styled-components";
import { PlanaiColorToken } from "@/style/token/colorToken";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const BackGroundWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
export const MainWrapper = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardList = styled.div`
  width: 1400px;
  height: 45%;
  display: flex;
  gap: 20px;
  margin-top: 35px;
`;
