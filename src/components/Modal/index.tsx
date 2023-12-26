import {
  ButtonCloseModal,
  ModalContent,
  ModalOverPlay,
  ModalWrapperStyled,
} from './styled';
import { IMAGE } from '@/constant/image';
import React, { ReactNode, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  hiddenButtonClose?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  hiddenButtonClose = false,
}) => {
  const [ isTransitioning, setIsTransitioning ] = useState(false);

  const closeModal = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
      onClose();
    }, 300); // Transition duration in milliseconds
  };

  if (!isOpen && !isTransitioning) {
    return null;
  }

  return (
    <ModalWrapperStyled className={`modal ${isOpen ? 'open' : ''}`}>
      <ModalOverPlay />
      <ModalContent>
        {!hiddenButtonClose && (
          <ButtonCloseModal src={IMAGE.closeModalButton} onClick={closeModal} />
        )}
        {children}
      </ModalContent>
    </ModalWrapperStyled>
  );
};

export default Modal;
