import { ITitle } from './interfaces';

import * as S from './styles';

export default function Title({ isSubtitle, text }: ITitle) {
  const titleClassName = isSubtitle ? '-subtitle' : '';

  return <S.Title className={titleClassName}>{text}</S.Title>;
}
