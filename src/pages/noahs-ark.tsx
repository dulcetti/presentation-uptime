import Slides from '../components/slides';
import { ILinks } from '../components/slides/interfaces';
import Title from '../components/title';

export default function NoahsArk() {
  const linkFinish: ILinks = {
    label: 'Finish',
    link: '/finish',
  };

  return (
    <>
      <Slides firstLink={linkFinish} background="/images/noahs-ark.jpg">
        <Title text="The Noah's Ark" isSubtitle={true} />
      </Slides>
    </>
  );
}
