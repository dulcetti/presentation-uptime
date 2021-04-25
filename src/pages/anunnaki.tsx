import Slides from '../components/slides';
import { ILinks } from '../components/slides/interfaces';
import Title from '../components/title';
import List from '../components/list/index';

export default function Anunnaki() {
  const linkTiamat: ILinks = {
    label: 'Tiamat',
    link: '/tiamat',
  };

  const linkGenesisRevisited: ILinks = {
    label: 'Genesis revisited',
    link: '/genesis-revisited',
  };

  const items = ['The race of the Gods', 'Sumerian/Mesopotamia'];

  return (
    <>
      <Slides
        firstLink={linkTiamat}
        secondLink={linkGenesisRevisited}
        background="/images/anunnaki.jpg">
        <>
          <Title text="The Anunnakis" isSubtitle={true} />
          <List items={items} />
        </>
      </Slides>
    </>
  );
}
