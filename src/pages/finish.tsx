import Slides from '../components/slides';
import Title from '../components/title';
import List from '../components/list/index';

export default function Finish() {
  const items = ['What do you think about?', 'Cheers'];

  return (
    <>
      <Slides background="/images/covers/finish.jpg">
        <>
          <Title text="We're alone here?" isSubtitle={true} />
          <List items={items} image="dulcetti-meditando.png" />
        </>
      </Slides>
    </>
  );
}
