import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GitHubRibbon} from '../.';

const App = () => {
  return (
    <div>
      <GitHubRibbon href="example.com" position="left"/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
