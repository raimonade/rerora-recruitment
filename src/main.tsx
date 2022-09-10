import '@/styles/index.css';

import { Router, Route } from 'preact-router';
import { render } from 'preact';

import Home from '@/pages/Home';

const Main = () => (
  <Router>
    <Route path="/" component={Home} />
  </Router>
);

render(<Main />, document.getElementById('app')!);
