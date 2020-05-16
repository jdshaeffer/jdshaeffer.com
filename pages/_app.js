import { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';

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
			<Theme>
				<Component {...pageProps} />
				<Footer />
			</Theme>
		</Fragment>
	);
}

MyApp.propTypes = {
	Component: PropTypes.any,
	pageProps: PropTypes.any
};
