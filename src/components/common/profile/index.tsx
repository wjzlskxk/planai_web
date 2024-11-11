import React from 'react';
import * as S from './style';
import ProfileImg from 'src/assets/images/ProfileImg.png';
import Edit from 'src/assets/images/Edit.svg';
import Logout from 'src/assets/images/logout.svg';
import Quit from 'src/assets/images/Quit.svg';

const Profile = () => {
  return (
    <S.ProfileWrap>
      <S.ProfileImg src={ProfileImg} />
      <S.Title>안녕하세요 윤세욱님</S.Title>
      <S.OptionWrap>
        <S.EditOption>
          <img src={Edit} alt="" />
          <span>프로필 수정</span>
        </S.EditOption>
        <S.LogoutOption>
          <img src={Logout} alt="" />
          <span>로그아웃</span>
        </S.LogoutOption>
        <S.QuitOption>
          <img src={Quit} alt="" />
          <span>회원탈퇴</span>
        </S.QuitOption>
      </S.OptionWrap>
    </S.ProfileWrap>
  );
};

export default Profile;
