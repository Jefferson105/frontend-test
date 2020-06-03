import App from 'next/app';
import Head from 'next/head';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import GlobalStyle from '../styles/globalStyle';

const client = new ApolloClient({
    uri: process.env.URL_API
});

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head>
                    <title>Login</title>
                    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                </Head>
                <ApolloProvider client={client}>
                    <GlobalStyle />
                    <Component {...pageProps} />
                </ApolloProvider>
            </>
        );
    }
}

export default MyApp;
