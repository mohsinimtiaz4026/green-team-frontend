import '@/styles/globals.css';
import createEmotionCache from '@/utils/emotionCache';
import { CacheProvider } from '@emotion/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { ReactNode } from 'react';
import { createCustomTheme } from '../utils/theme';
config.autoAddCss = false;

const clientSideEmotionCache = createEmotionCache();
const theme = createCustomTheme();

type Props = AppProps & {
  Component: any;
  emotionCache: any;
};

const App = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: Props) => {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return getLayout(
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>,
  );
};
export default App;
