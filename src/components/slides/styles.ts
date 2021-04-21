import styled, { css } from 'styled-components';

type PropsSlides = {
  bg: string;
};

export const SlidesWrapper = styled.main<PropsSlides>`
  ${({ bg }) => css`
    background: url(${bg}) no-repeat center bottom;
    background-size: cover;
    min-height: 100vh;

    &:after {
      background-color: rgba(0, 0, 0, 0.75);
      content: '';
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 0;
    }
  `}
`;

export const SlidesFooter = styled.footer`
  position: relative;
  z-index: 1;
`;
