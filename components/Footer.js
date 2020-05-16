import { AppBar, Toolbar, Typography } from '@material-ui/core';
import styled from 'styled-components';

const BottomAppBar = styled(AppBar)`
  top: auto;
  bottom: 0;
`;

const Footer = () => {
	return (
		<BottomAppBar
			color='transparent'
			elevation={0}
			position='fixed'
		>
			<Toolbar>
				<Typography>
          j.d. shaeffer &copy; 2020
				</Typography>
			</Toolbar>
		</BottomAppBar>
	);
};

export default Footer;
