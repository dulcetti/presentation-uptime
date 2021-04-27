import Slides from '../components/slides';
import { ILinks } from '../components/slides/interfaces';
import Title from '../components/title';
import List from '../components/list/index';

export default function GenesisRevisited() {
  const linkWhereAreTheHumans: ILinks = {
    label: 'Where are the Humans?',
    link: '/where-are-the-humans',
  };

  const linkNoahsArk: ILinks = {
    label: `Noah's Ark`,
    link: '/noahs-ark',
  };

  const items = ['The Book', 'Technology behind the scene'];

  return (
    <>
      <Slides
        firstLink={linkWhereAreTheHumans}
        secondLink={linkNoahsArk}
        background="/images/covers/genesis-revisited.jpg">
        <>
          <Title text="Genesis revisited" isSubtitle={true} />
          <List image="book-genesis.png" items={items} />
        </>
      </Slides>
    </>
  );
}
