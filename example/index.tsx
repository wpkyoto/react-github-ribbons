import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import GitHubRibbon, { type GitHubRibbonProps } from '../.';

const App = () => {
  const props: GitHubRibbonProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
    className: 'a-tag-link',
    href: 'example.com',
    color: 'orange',
    position: 'left',
  };
  return (
    <div>
      <GitHubRibbon {...props} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
