import Slides from '../components/slides';
import { ILinks } from '../components/slides/interfaces';
import Title from '../components/title';

export default function Gods() {
  const linkWhereAreTheHumans: ILinks = {
    label: 'Where are the Humans?',
    link: '/where-are-the-humans',
  };

  const linkGenesisRevisited: ILinks = {
    label: 'Genesis Revisited',
    link: '/genesis-revisited',
  };

  return (
    <>
      <Slides
        firstLink={linkWhereAreTheHumans}
        secondLink={linkGenesisRevisited}
        background="/images/gods.jpg">
        <Title text="Gods?" isSubtitle={true} />
      </Slides>
    </>
  );
}
