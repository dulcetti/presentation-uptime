import Slides from '../components/slides';
import { ILinks } from '../components/slides/interfaces';
import Title from '../components/title';

export default function HumansSlaves() {
  const linkFinish: ILinks = {
    label: 'Finish',
    link: '/finish',
  };

  return (
    <>
      <Slides firstLink={linkFinish} background="/images/human-slaves.jpg">
        <Title text={`Human "Slaves"`} isSubtitle={true} />
      </Slides>
    </>
  );
}
