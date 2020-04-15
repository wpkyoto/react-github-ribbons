import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import GitHubRibbon from '../.';

const App = () => {
  return (
    <div>
      <GitHubRibbon
        target="_blank"
        rel="noopener noreferrer"
        className="a-tag-link"
        href="example.com"
        color="orange"
        position="left"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
