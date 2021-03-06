import Slides from '../components/slides';
import { ILinks } from '../components/slides/interfaces';
import Title from '../components/title';
import List from '../components/list/index';

export default function Tiamat() {
  const linkGenesisRevisited: ILinks = {
    label: 'Genesis Revisited',
    link: '/genesis-revisited',
  };

  const linkGods: ILinks = {
    label: 'Gods',
    link: '/gods',
  };

  const items = ['Colision with Nibiru/Asteroid Belt', 'The Earth is generated'];

  return (
    <>
      <Slides
        firstLink={linkGenesisRevisited}
        secondLink={linkGods}
        background="/images/covers/tiamat.jpg">
        <>
          <Title text="Tiamat" isSubtitle={true} />
          <List image="asteroids.jpg" items={items} />
        </>
      </Slides>
    </>
  );
}
