import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9999; /* Set a higher z-index value */
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid white;
  border-top-color: transparent;
  animation: ${rotateAnimation} 1s linear infinite;
  position: relative; /* Add a position value */
  z-index: 10000; /* Set a higher z-index value */
`;

const TextCustomStyled = styled.div`
  font-size: 900;
  font-size: 24px;
  color: white;
  margin-bottom: 10px;
`;

interface ILoadingProps {
  textCustom?: string;
}

const Loading: React.FC<ILoadingProps> = ({ textCustom }) => {
  return (
    <LoadingContainer>
      <TextCustomStyled>{textCustom}</TextCustomStyled>
      <LoadingSpinner />
    </LoadingContainer>
  );
};

export default Loading;
