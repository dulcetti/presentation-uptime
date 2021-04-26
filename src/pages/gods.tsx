import Slides from '../components/slides';
import { ILinks } from '../components/slides/interfaces';
import Title from '../components/title';
import List from '../components/list/index';

export default function Gods() {
  const linkWhereAreTheHumans: ILinks = {
    label: 'Where are the Humans?',
    link: '/where-are-the-humans',
  };

  const linkGenesisRevisited: ILinks = {
    label: 'Genesis Revisited',
    link: '/genesis-revisited',
  };

  const items = ['Planets or Gods?', 'Gods seeking the Earth nature'];

  return (
    <>
      <Slides
        firstLink={linkWhereAreTheHumans}
        secondLink={linkGenesisRevisited}
        background="/images/covers/gods.jpg">
        <>
          <Title text="Gods?" isSubtitle={true} />
          <List items={items} />
        </>
      </Slides>
    </>
  );
}
