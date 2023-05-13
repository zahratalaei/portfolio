import '../styles/globals.css';
import { PageContextProvider } from '@/hooks/PageContext';
import 'tailwindcss/tailwind.css';

export default function App({ Component, pageProps }) {
  return (
  <PageContextProvider>

    <Component {...pageProps} />
  </PageContextProvider>
  )
}
