import Slides from '../components/slides';
import { ILinks } from '../components/slides/interfaces';

export default function Home() {
  const link: ILinks = {
    label: 'Start',
    link: '/the-twelfth-planet',
  };

  return (
    <>
      <Slides firstLink={link} background="/images/The-Twelfth-Planet.jpg">
        <ul>
          <li>Olar</li>
        </ul>
      </Slides>
    </>
  );
}
