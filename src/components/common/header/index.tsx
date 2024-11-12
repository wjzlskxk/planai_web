import React from 'react';
import * as S from './style';
import LoginIcon from 'src/assets/images/LoginIcon.svg';
import { useGetProfile } from 'src/query/common/profile/profile.query';

const Header = () => {
  const { data: profile } = useGetProfile();
  return (
    <S.HeaderWrap>
      <S.ButtonWrap>
        <img src={LoginIcon} alt="로그인 아이콘" />
        <span>{profile?.data.name ? profile?.data.name : '로그인'}</span>
      </S.ButtonWrap>
    </S.HeaderWrap>
  );
};

export default Header;
