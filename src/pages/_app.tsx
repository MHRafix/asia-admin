import '@/styles/globals.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
	const client = new ApolloClient({
		uri: 'https://api.reservetable.io/',
		cache: new InMemoryCache(),
	});
	return (
		<>
			<Head>
				<title>Page title</title>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
			</Head>
			<ApolloProvider client={client}>
				<MantineProvider
					withGlobalStyles
					withNormalizeCSS
					theme={{
						/** Put your mantine theme override here */
						colorScheme: 'dark',
					}}
				>
					<Component {...pageProps} />
				</MantineProvider>
			</ApolloProvider>
		</>
	);
}
