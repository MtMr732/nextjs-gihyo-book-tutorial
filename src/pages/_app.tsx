import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

const GlocalStyle = createGlobalStyle`
html,
body,
textarea{
  padding:0;
  margin:0;
  font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
}
a{
  cursor:pointer;
  text-decoration:none;
  transtion:.25s;
  color:#000;
}

ol,ul{
  list-style:none;
}
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta key="charset" name="charset" content="utf-8" />
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,maximumscale=5"
        />
        <meta property="og:locale" content="ja-JP" />
        <meta property="og:type" content="website" />
      </Head>
      <GlocalStyle />
      <Component {...pageProps} />;
    </>
  )
}

export default MyApp
