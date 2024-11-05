import React from "react";
import * as S from "./style";
import LoginIcon from "src/assets/images/LoginIcon.svg";

const Header = () => {
  return (
    <S.HeaderWrap>
      <S.ButtonWrap>
        <img src={LoginIcon} alt="로그인 아이콘" />
        <span>로그인</span>
      </S.ButtonWrap>
    </S.HeaderWrap>
  );
};

export default Header;
