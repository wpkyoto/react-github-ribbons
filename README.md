# React GitHub Ribbons

Simple React Component to add GitHub Ribbon for your React Application.

Ref: https://github.blog/2008-12-19-github-ribbons/

## Install

```bash
$ yarn add react-github-ribbons
```

## Usage

```tsx
import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import GitHubRibbon from 'react-github-ribbons';

const App = () => {
  return (
    <div>
      <GitHubRibbon href="https://example.com" />
    </div>
  );
};
```

### Ribbon color & position
We can change the color and position

```tsx
// Default
<GitHubRibbon href="example.com" color="black" position="right"/>

// Orange and left
<GitHubRibbon href="example.com" color="orange" position="left" />

// White and right
<GitHubRibbon href="example.com" color="white" position="right" />
```

### Link parameters

The component will proxy `a` tag properties.

```tsx
<GitHubRibbon
  target="_blank"
  rel="noopener noreferrer"
  className="a-tag-link"
  href="example.com"
  color="orange"
  position="left"
/>
```

And you can import the property types.

```tsx
import GitHubRibbon, { GitHubRibbonProps } from 'react-github-ribbons';

const App = () => {
  const props: GitHubRibbonProps = {
    target: "_blank",
    rel: "noopener noreferrer",
    className: "a-tag-link",
    href: "example.com",
    color: "orange",
    position: "left",
  }
  return (
    <div>
      <GitHubRibbon {...props} />
    </div>
  );
};
```

## Commands

TSDX scaffolds your new library inside `/src`, and also sets up a [Parcel-based](https://parceljs.org) playground for it inside `/example`.

The recommended workflow is to run TSDX in one terminal:

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run the example inside another:

```bash
cd example
npm i # or yarn to install dependencies
npm start # or yarn start
```

The default example imports and live reloads whatever is in `/dist`, so if you are seeing an out of date component, make sure TSDX is running in watch mode like we recommend above. **No symlinking required**, [we use Parcel's aliasing](https://github.com/palmerhq/tsdx/pull/88/files).

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.

## Using the Playground

```bash
cd example
npm i # or yarn to install dependencies
npm start # or yarn start
```

The default example imports and live reloads whatever is in `/dist`, so if you are seeing an out of date component, make sure TSDX is running in watch mode like we recommend above. **No symlinking required**!