import React from 'react';
import { Card as CCard } from 'antd';
import { apiPokemon } from '@/api/pokemon';
import styled from 'styled-components';

const { Meta } = CCard;
interface CardProps {
  title: string;
  description?: string;
  onClick?: () => void;
  isHover?: boolean;
  url: string;
}

const MetaStyled = styled(Meta)`
  .ant-card-meta-title {
    text-align: center;
  }
`;

const Card = ({
  title,
  description,
  onClick,
  isHover = true,
  url,
}: CardProps) => {
  const urlParts = url.split('/');
  const numberInString = urlParts[urlParts.length - 2];

  return (
    <CCard
      hoverable={isHover}
      onClick={onClick}
      style={{ width: 240 }}
      cover={<img alt='Pokemon' src={apiPokemon.image(numberInString)} />}
    >
      <MetaStyled title={title} description={description} />
    </CCard>
  );
};

export default Card;
