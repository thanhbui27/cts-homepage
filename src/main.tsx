import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './themes/index.tsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './services/i18n/index.tsx';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './assets/styles/GlobalStyles.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import ENV from './constants/env/env.ts';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: ENV.STALETIME,
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <I18nextProvider i18n={i18n}>
          <BrowserRouter>
            <GlobalStyles />
            <App />
          </BrowserRouter>
        </I18nextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
