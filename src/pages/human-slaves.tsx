import Slides from '../components/slides';
import { ILinks } from '../components/slides/interfaces';
import Title from '../components/title';
import List from '../components/list/index';

export default function HumansSlaves() {
  const linkFinish: ILinks = {
    label: 'Finish',
    link: '/finish',
  };

  const items = ['Gods visiting the Earth', 'How you doing?'];

  return (
    <>
      <Slides firstLink={linkFinish} background="/images/covers/human-slaves.jpg">
        <>
          <Title text={`Human "Slaves"`} isSubtitle={true} />
          <List items={items} />
        </>
      </Slides>
    </>
  );
}
