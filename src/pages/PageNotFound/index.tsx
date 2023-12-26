import { STORAGE } from '@/constant/keyStoage';
import { LocalStore } from '@/helpers/local';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

type PageNotFoundProps = { title?: string };

const PageNotFound: FC<PageNotFoundProps> = () => {
  const navigate = useNavigate();
  const isUser = LocalStore.get(STORAGE.ACCESS_TOKEN);
  return (
    <div>
      <div>PageNotFound</div>
      <button
        onClick={() => {
          navigate(isUser ? '/' : '/login');
        }}
      >
        click
      </button>
    </div>
  );
};

export default PageNotFound;
