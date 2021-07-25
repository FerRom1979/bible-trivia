import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  justify-items: center;
  background-color: #11b7f4;
`;
export const Title = styled.h1`
  font-size: 40px;
  color: #ffffff;
`;

export const ImgBible = styled.img`
  border-radius: 60px;
  width: 400px;
  margin-bottom: 50px;
`;
export const WrapperButton = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
`;

export const ButtonLogin = styled.button`
  padding: 10px;
  width: 100px;
  border: none;
  border-radius: 20px;
  background-color: yellow;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  color: brown;
  :hover {
    color: yellow;
    background-color: brown;
  }
`;
