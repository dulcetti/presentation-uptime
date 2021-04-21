import Slides from '../components/slides';
import { ILinks } from '../components/slides/interfaces';
import Title from '../components/title';

export default function Home() {
  const link: ILinks = {
    label: 'Start ➡',
    link: '/the-twelfth-planet',
  };

  return (
    <>
      <Slides firstLink={link} background="/images/The-Twelfth-Planet.jpg">
        <Title text="The history about the Twelfth Planet" />
      </Slides>
    </>
  );
}
