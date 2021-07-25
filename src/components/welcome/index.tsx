import React from 'react';
import { Link } from 'react-router-dom';
import bible from '../../assets/img/bible.jpg';

import { Content, ImgBible, WrapperButton, ButtonLogin, Title } from './style';

const Welcome = () => {
  return (
    <Content>
      <Title>THE BIBLE TRIVIA</Title>
      <ImgBible src={bible} alt="bible" />
      <WrapperButton>
        <Link to="/Login">
          <ButtonLogin>LOGIN</ButtonLogin>
        </Link>

        <ButtonLogin>REGISTER</ButtonLogin>
      </WrapperButton>
    </Content>
  );
};

export default Welcome;
