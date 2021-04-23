import Slides from '../components/slides';
import { ILinks } from '../components/slides/interfaces';
import Title from '../components/title';

export default function Tiamat() {
  const linkGenesisRevisited: ILinks = {
    label: 'Genesis Revisited',
    link: '/genesis-revisited',
  };

  const linkGods: ILinks = {
    label: 'Gods',
    link: '/gods',
  };

  return (
    <>
      <Slides
        firstLink={linkGenesisRevisited}
        secondLink={linkGods}
        background="/images/tiamat.jpg">
        <Title text="Tiamat" isSubtitle={true} />
      </Slides>
    </>
  );
}
