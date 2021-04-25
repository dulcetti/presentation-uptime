import Slides from '../components/slides';
import { ILinks } from '../components/slides/interfaces';
import Title from '../components/title';

export default function GenesisRevisited() {
  const linkWhereAreTheHumans: ILinks = {
    label: 'Where are the Humans?',
    link: '/where-are-the-humans',
  };

  const linkArkOfNoah: ILinks = {
    label: `Noah's Ark`,
    link: '/noahs-ark',
  };

  return (
    <>
      <Slides
        firstLink={linkWhereAreTheHumans}
        secondLink={linkArkOfNoah}
        background="/images/genesis-revisited.jpg">
        <Title text="Genesis revisited" isSubtitle={true} />
      </Slides>
    </>
  );
}
