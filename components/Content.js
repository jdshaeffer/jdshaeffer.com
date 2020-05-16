import styled from 'styled-components';

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
}

export default Content;
