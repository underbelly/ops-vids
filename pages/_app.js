import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import withApollo from "@lib/apollo";
import * as theme from "@identity";
import Layout from "@components/Layout";

const App = ({ Component, pageProps, router }) => {
  return (
    <>
      <Head>
        <title>Marketing Monstro</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout
          //@ts-ignore
          themeColor={Component.themeColor}
          //@ts-ignore
          hideLayout={Component.hideLayout}
        >
          <Component {...pageProps} key={router?.route} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

//@ts-ignore
const AppWithApollo = withApollo(App);

export default AppWithApollo;
