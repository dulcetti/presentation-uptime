import Slides from '../components/slides';
import { ILinks } from '../components/slides/interfaces';
import Title from '../components/title';

export default function Anunnaki() {
  const linkTiamat: ILinks = {
    label: 'Tiamat',
    link: '/tiamat',
  };

  const linkGenesisRevisited: ILinks = {
    label: 'Genesis revisited',
    link: '/genesis-revisited',
  };

  return (
    <>
      <Slides
        firstLink={linkTiamat}
        secondLink={linkGenesisRevisited}
        background="/images/anunnaki.jpg">
        <Title text="The Anunnakis" isSubtitle={true} />
      </Slides>
    </>
  );
}
