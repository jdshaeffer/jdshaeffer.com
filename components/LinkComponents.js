import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const StyledLink = styled.a`
	text-decoration: none;
	color: #FAE0C5;
  margin-left: 1%;
  margin-right: 1%;
`;

const ContentLink = styled.a`
	color: #FAE0C5;
`;

const LinkButton = ({href, name}) => {
	return (
		<Link href={href} passHref>
			<StyledLink>
				<Button>{name}</Button>
			</StyledLink>
		</Link>
	);
};

const LinkText = ({href, name}) => {
	return (
		<Link href={href} passHref>
			<StyledLink>
				{name}
			</StyledLink>
		</Link>
	);
};

const ContentLinkText = ({href, name}) => {
	return (
		<Link href={href} passHref>
			<ContentLink>
				{name}
			</ContentLink>
		</Link>
	);
};

LinkButton.propTypes = {
	href: PropTypes.any,
	name: PropTypes.any
};

LinkText.propTypes = {
	href: PropTypes.any,
	name: PropTypes.any
};

ContentLinkText.propTypes = {
	href: PropTypes.any,
	name: PropTypes.any
};

export { LinkButton, LinkText, ContentLinkText };
