import Slides from '../components/slides';
import Title from '../components/title';

export default function Finish() {
  return (
    <>
      <Slides background="/images/finish.jpg">
        <Title text="We're alone here?" isSubtitle={true} />
      </Slides>
    </>
  );
}
