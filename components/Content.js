import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContentWrapper = styled.div`
	color: #FAE0C5;
  font-size: ${props => props.fontSize || '18px'};
  margin-top: 100px;
  margin-bottom: 100px;
`;

// width should be 90% at smaller screens underneath below width
const ContentChild = styled.div`
  width: 800px;
	margin: 0 auto;
`;

const Content = props => {
	return (
		<ContentWrapper>
			<ContentChild >
				{props.children}
			</ContentChild>
		</ContentWrapper>
	);
};

Content.propTypes = {
	children: PropTypes.any
};

export { Content, ContentWrapper };
