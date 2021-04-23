import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

type PropsSlides = {
  bg: string;
};

export const SlidesWrapper = styled.main<PropsSlides>`
  ${({ bg }) => css`
    background: url(${bg}) no-repeat center bottom;
    background-size: cover;
    color: #fff;
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

export const SlidesContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: inherit;
  position: relative;
  z-index: 1;
`;

export const SlidesFooter = styled.footer`
  display: flex;
  justify-content: center;
  padding: 50px;
`;

export const SlidesLink = styled(Link)`
  background-color: rgba(255, 255, 255, 0.6);
  border: 5px solid transparent;
  color: #333;
  font: bold 28px 'noto-sans';
  margin: 0 20px;
  padding: 15px 40px;
  text-decoration: none;
  transition: background-color 0.25s, border 0.25s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.85);
    border: 5px solid #f60;
    transition: background-color 0.25s, border 0.25s;
  }
`;
