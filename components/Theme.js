import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

// wrapper for all mui components - applied at /pages/_app.js
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#000000'
		}
	},
	typography: {
		color: '#FAE0C5',
		fontFamily: 'Libre Baskerville',
		button: {
			textTransform: 'none',
			border: '2px solid #FAE0C5'
		},
		body1: {
			flexGrow: 1
		},
		h6: {
			marginLeft: '2%'
		}
	}
});

const Theme = (props) => {
	return (
		<ThemeProvider theme={theme}>{props.children}</ThemeProvider>
	);
};

Theme.propTypes = {
	children: PropTypes.any
};

export default Theme;
