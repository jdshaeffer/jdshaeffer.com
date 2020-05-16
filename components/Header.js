import Link from 'next/link';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { LinkButton, LinkText } from './LinkComponents';
import UnderlinedText from '../components/UnderlinedText';

const Header = () => (
	<AppBar color='transparent' elevation={0}>
		<Toolbar>
			<Link href='/'>
				<a>
					<UnderlinedText fontSize='30px'>j.d. shaeffer</UnderlinedText>
				</a>
			</Link>
			<Typography />  {/* for flex grow changes */}
			<Typography variant='h6'>
				<LinkText href='/' name='About' />
			</Typography>
			<Typography variant='h6'>
				<LinkText href='/' name='Posts' />
			</Typography>
			<Typography variant='h6'>
				<LinkText href='/' name='Portfolio' />
			</Typography>
		</Toolbar>
	</AppBar>
);

export default Header;
