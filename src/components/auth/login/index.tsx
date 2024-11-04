import React from "react";
import * as S from "./style";
import LoginBackground from "src/assets/images/LoginBackground.png";
import Human from "src/assets/images/Human.png";
import Lock from "src/assets/images/Lock.png";
import useLogin from "src/hooks/auth/login/useLogin";

const Login = () => {
  const { loginInfo, handleLoginInfo, onSubmit } = useLogin();
  return (
    <S.LoginWrap>
      <S.Main>
        <img src={LoginBackground} alt="" />
        <S.Login>
          <h1>LOGIN</h1>
          <S.InputWrap>
            <S.Input>
              <label>이메일</label>
              <div>
                <img src={Human} alt="" />
                <input type="email" name="email" value={loginInfo.email} onChange={handleLoginInfo} />
              </div>
            </S.Input>
            <S.Input>
              <label>비밀번호</label>
              <div>
                <img src={Lock} alt="" style={{ height: "30px" }} />
                <input type="password" name="password" value={loginInfo.password} onChange={handleLoginInfo} />
              </div>
            </S.Input>
          </S.InputWrap>
          <S.UtilWrap>
            <button onClick={onSubmit} disabled={!loginInfo.email || !loginInfo.password}>
              로그인
            </button>
            <div>
              <span style={{ color: "#c1c1c1" }}>가입된 계정이 없으신가요?</span>
              <span style={{ color: "#E75BA6", cursor: "pointer" }}>회원가입</span>
            </div>
          </S.UtilWrap>
        </S.Login>
      </S.Main>
    </S.LoginWrap>
  );
};

export default Login;
