import Link from 'next/link';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { LinkText } from './LinkComponents';
import UnderlinedText from '../components/UnderlinedText';

const Header = () => (
	<AppBar color='primary' elevation={0}>
		<Toolbar>
			<Link href='/'>
				<a>
					<UnderlinedText fontSize='30px'>j.d. shaeffer</UnderlinedText>
				</a>
			</Link>
			<Typography />  {/* for flex grow changes */}
			<Typography variant='h6'>
				<LinkText href='/about' name='about' />
			</Typography>
			<Typography variant='h6'>
				<LinkText href='/blog' name='blog' />
			</Typography>
			<Typography variant='h6'>
				<LinkText href='/portfolio' name='portfolio' />
			</Typography>
			<Typography variant='h6'>
				<LinkText href='/resume.pdf' name='resume' />
			</Typography>
		</Toolbar>
	</AppBar>
);

export default Header;
