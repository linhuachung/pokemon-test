import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  /* height: calc(var(--vh, 1vh) * 100); */
  height: 100vh;
  overflow: hidden;
`;

interface ILayoutMobileProps {
  children: ReactNode;
}

const LayoutMobile: FC<ILayoutMobileProps> = ({ children }) => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  return <LayoutStyled>{children}</LayoutStyled>;
};

export default LayoutMobile;
