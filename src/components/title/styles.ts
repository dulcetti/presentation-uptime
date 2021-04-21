import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 72px;

  &:not(.-subtitle) {
    padding: 60px 0;
    text-align: center;
  }

  &.-subtitle {
    text-align: right;
  }
`;
