import Slides from '../components/slides';
import { ILinks } from '../components/slides/interfaces';
import Title from '../components/title';
import List from '../components/list/index';

export default function NoahsArk() {
  const linkFinish: ILinks = {
    label: 'Finish',
    link: '/finish',
  };

  const items = ['Remember the technology?', 'Not an Ark, but Rockets'];

  return (
    <>
      <Slides firstLink={linkFinish} background="/images/covers/noahs-ark.jpg">
        <>
          <Title text="The Noah's Ark" isSubtitle={true} />
          <List image="giants-gods-earth.jpg" items={items} />
        </>
      </Slides>
    </>
  );
}
