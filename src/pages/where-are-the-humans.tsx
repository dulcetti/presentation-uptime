import Slides from '../components/slides';
import { ILinks } from '../components/slides/interfaces';
import Title from '../components/title';
import List from '../components/list/index';

export default function WhereAreTheHumans() {
  const linkHumanSlaves: ILinks = {
    label: 'Human "Slaves"',
    link: '/human-slaves',
  };

  const linkNoahsArk: ILinks = {
    label: `The Noah's Ark`,
    link: '/noahs-ark',
  };

  const items = ['Builded by Gods', 'Created from clay'];

  return (
    <>
      <Slides
        firstLink={linkHumanSlaves}
        secondLink={linkNoahsArk}
        background="/images/where-are-the-humans.jpg">
        <>
          <Title text="Where are the Humans?" isSubtitle={true} />
          <List items={items} />
        </>
      </Slides>
    </>
  );
}
