import Slides from '../components/slides';
import { ILinks } from '../components/slides/interfaces';
import Title from '../components/title';

export default function WhereAreTheHumans() {
  const linkHumanSlaves: ILinks = {
    label: 'Human "Slaves"',
    link: '/human-slaves',
  };

  const linkArkOfNoah: ILinks = {
    label: `The Noah's Ark`,
    link: '/ark-of-noah',
  };

  return (
    <>
      <Slides
        firstLink={linkHumanSlaves}
        secondLink={linkArkOfNoah}
        background="/images/where-are-the-humans.jpg">
        <Title text="Where are the Humans?" isSubtitle={true} />
      </Slides>
    </>
  );
}
