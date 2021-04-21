import { Link } from 'react-router-dom';
import { ISlides } from './interfaces';

import * as S from './styles';

export default function Slides({ background, children, firstLink, secondLink }: ISlides) {
  return (
    <S.SlidesWrapper bg={background}>
      {children}
      <S.SlidesFooter>
        <Link to={firstLink.link}>{firstLink.label}</Link>
        {secondLink && <Link to={secondLink.link}>{secondLink.label}</Link>}
      </S.SlidesFooter>
    </S.SlidesWrapper>
  );
}
