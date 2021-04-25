import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  Anunnaki,
  ArkOfNoah,
  Finish,
  GenesisRevisited,
  Gods,
  Cover,
  HumansSlaves,
  Nibiru,
  TheTwelfthPlanet,
  Tiamat,
  WhereAreTheHumans,
} from '../../pages';

export default function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/anunnaki">
          <Anunnaki />
        </Route>
        <Route exact path="/noahs-ark">
          <ArkOfNoah />
        </Route>
        <Route exact path="/finish">
          <Finish />
        </Route>
        <Route exact path="/genesis-revisited">
          <GenesisRevisited />
        </Route>
        <Route exact path="/gods">
          <Gods />
        </Route>
        <Route exact path="/">
          <Cover />
        </Route>
        <Route exact path="/human-slaves">
          <HumansSlaves />
        </Route>
        <Route exact path="/nibiru">
          <Nibiru />
        </Route>
        <Route path="/the-twelfth-planet">
          <TheTwelfthPlanet />
        </Route>
        <Route exact path="/tiamat">
          <Tiamat />
        </Route>
        <Route exact path="/where-are-the-humans">
          <WhereAreTheHumans />
        </Route>
      </Switch>
    </Router>
  );
}
