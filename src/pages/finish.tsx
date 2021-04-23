import Slides from '../components/slides';
import Title from '../components/title';

export default function Finish() {
  return (
    <>
      <Slides background="/images/The-Twelfth-Planet.jpg">
        <Title text="We're alone here?" isSubtitle={true} />
      </Slides>
    </>
  );
}