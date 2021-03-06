import { useEffect, useState } from 'react';
import { ISlides } from './interfaces';

import * as S from './styles';

export default function Slides({ background, children, firstLink, secondLink }: ISlides) {
  const [talked, changeTalked] = useState<Boolean>(false);

  useEffect(() => {
    const toggleTalked = () => changeTalked(!talked);
    document.addEventListener('mousedown', toggleTalked, false);
  }, []);

  return (
    <S.SlidesWrapper bg={background}>
      <S.SlidesContent>
        {children}
        <S.SlidesFooter className={talked ? '-show' : ''}>
          {firstLink && <S.SlidesLink to={firstLink.link}>{firstLink.label}</S.SlidesLink>}
          {secondLink && <S.SlidesLink to={secondLink.link}>{secondLink.label}</S.SlidesLink>}
        </S.SlidesFooter>
      </S.SlidesContent>
    </S.SlidesWrapper>
  );
}
