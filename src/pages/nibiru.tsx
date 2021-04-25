import Slides from '../components/slides';
import { ILinks } from '../components/slides/interfaces';
import Title from '../components/title';
import List from '../components/list/index';

export default function Nibiru() {
  const linkTiamat: ILinks = {
    label: 'Tiamat',
    link: '/tiamat',
  };

  const linkGods: ILinks = {
    label: 'Gods',
    link: '/gods',
  };

  const items = ['The orbit', 'A planet or a God?'];

  return (
    <>
      <Slides
        firstLink={linkTiamat}
        secondLink={linkGods}
        background="/images/planet-destroyed.jpg">
        <>
          <Title text="Nibiru/Marduk" isSubtitle={true} />
          <List items={items} />
        </>
      </Slides>
    </>
  );
}
