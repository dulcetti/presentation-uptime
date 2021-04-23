import Slides from '../components/slides';
import { ILinks } from '../components/slides/interfaces';
import Title from '../components/title';

export default function TheTwelfthPlanet() {
  const linkNibiru: ILinks = {
    label: 'Nibiru/Marduk',
    link: '/nibiru',
  };

  const linkAnunnaki: ILinks = {
    label: 'Anunnaki',
    link: '/anunnaki',
  };

  return (
    <>
      <Slides
        firstLink={linkNibiru}
        secondLink={linkAnunnaki}
        background="/images/planests-lighthing.jpg">
        <Title text="The Twelfth Planet" isSubtitle={true} />
      </Slides>
    </>
  );
}
