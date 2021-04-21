import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import * as S from './styles';

export default function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <S.Main>Olar</S.Main>;
        </Route>
      </Switch>
    </Router>
  );
}
