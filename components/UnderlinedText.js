import styled from 'styled-components';

const UnderlinedText = styled.h3`
  color: black;
  text-decoration: underline;
  text-decoration-color: black; 
  text-decoration-thickness: ${props => props.lineSize || '4px'};
  font-size: ${props => props.fontSize || '12px'};
`; 

export default UnderlinedText;
