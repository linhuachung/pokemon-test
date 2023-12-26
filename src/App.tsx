import { Loading } from '@/components';
import useLoadingCommon from '@/hooks/useLoadingCommon';
import RoutesConfig from '@/routes';
import { GlobalStyle } from '@/styles/global';
import i18n from '@/translate/i18n';
import React, { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const { isLoadingCommon } = useLoadingCommon();

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <GlobalStyle />
        {isLoadingCommon && <Loading />}
        <I18nextProvider i18n={i18n}>
          <RoutesConfig />
        </I18nextProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
