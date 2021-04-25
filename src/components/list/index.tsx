import { IList } from './interfaces';

import * as S from './styles';

export default function List({ image, items }: IList) {
  return (
    <S.ListContent>
      <S.List>
        {items.map((item, index) => (
          <S.Items key={index}>{item}</S.Items>
        ))}
      </S.List>
      {image && <S.Image src={`/images/list-images/${image}`} alt="Cover image" />}
    </S.ListContent>
  );
}
