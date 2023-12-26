import Image from '@/components/Image';
import styled from 'styled-components';

const ModalWrapperStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.37);
  z-index: 999;
  transition: opacity 0.3s ease;
  &.open {
    display: flex;
  }
`;

const ModalOverPlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ModalContent = styled.div`
  position: relative;
`;

const ButtonCloseModal = styled(Image)`
  position: absolute;
  top: -10px;
  right: -10px;
  cursor: pointer;
  min-height: 45px;
  min-width: 45px;
  max-height: 45px;
  max-width: 45px;
`;

export { ButtonCloseModal, ModalContent, ModalOverPlay, ModalWrapperStyled };
