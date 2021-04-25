import { ILinks } from '../components/slides/interfaces';
import List from '../components/list';
import Slides from '../components/slides';
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

  const items = ['The Book', 'Zecharia Sitchin'];

  return (
    <>
      <Slides
        firstLink={linkNibiru}
        secondLink={linkAnunnaki}
        background="/images/planests-lighthing.jpg">
        <>
          <Title text="The Twelfth Planet" isSubtitle={true} />
          <List image="nibiru-planet.jpg" items={items} />
        </>
      </Slides>
    </>
  );
}
