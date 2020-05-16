import Head from 'next/head';
import { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import Theme from '../components/Theme';

export default function MyApp({ Component, pageProps }) {
	useEffect(() => {
		// remove server side injected css
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);
	
	return (
		<Fragment>
			<Head>
				<title>j.d. shaeffer</title>
			</Head>
			<Theme>
				<Component {...pageProps} />
			</Theme>
		</Fragment>
	);
}

MyApp.propTypes = {
	Component: PropTypes.any,
	pageProps: PropTypes.any
};
