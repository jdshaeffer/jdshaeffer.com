import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContentWrapper = styled.div`
  color: #FAE0C5;
  margin-top: 150px;
`;

const ContentChild = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const Content = props => {
	return (
		<ContentWrapper>
			<ContentChild>
				{props.children}
			</ContentChild>
		</ContentWrapper>
	);
};

Content.propTypes = {
	children: PropTypes.any
};

export default Content;
