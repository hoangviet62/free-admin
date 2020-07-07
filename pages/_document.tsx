import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />
        <style jsx global>{`
          /* Other global styles such as 'html, body' etc... */
          #__next {
            height: 100%;
          }
          .ant-layout.ant-layout-has-sider {
            height: 100%;
          }
        `}</style>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
