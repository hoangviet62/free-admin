import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import initializeStore from "../lib/initializeStore";
import { Default as DefaultLayout } from "./../components/Layout";

const initialState = {};
let store: any;

const isServer = typeof window === "undefined";
const nextReduxStore: any = "__NEXT_REDUX_STORE__";

if (isServer) {
  store = initializeStore(initialState);
} else {
  if (!window[nextReduxStore]) {
    window[nextReduxStore] = initializeStore(initialState);
  }
  store = window[nextReduxStore];
}

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Free Admin</title>
      </Head>
      <Provider store={store}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </Provider>
    </>
  );
};

export default MyApp;
