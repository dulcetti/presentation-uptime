import styled from 'styled-components';

export const Title = styled.h1`
  font-family: 'zen-dots';

  &:not(.-subtitle) {
    font-size: 4.5rem;
    line-height: 1;
    margin: 0 auto;
    padding: 60px 0;
    text-align: center;
    width: 60%;
  }

  &.-subtitle {
    font-size: 3rem;
    padding: 40px;
    text-align: right;
  }
`;
