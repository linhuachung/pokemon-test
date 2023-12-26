import React, { FC } from 'react';
import styled from 'styled-components';

const ImageStyled = styled.img``;
interface IImageProps {
  src: any;
  alt?: string;
  className?: any;
  onClick?: () => void;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
}
const Image: FC<IImageProps> = ({ src, alt, className, ...props }) => {
  return <ImageStyled src={src} alt={alt} className={className} {...props} />;
};

export default Image;
