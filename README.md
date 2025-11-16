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

## Development

This project uses modern tooling:

- **Vite** - Fast build tool and dev server
- **Vitest** - Lightning-fast unit testing
- **Biome** - Fast linter and formatter
- **TypeScript 5** - Type safety
- **React 18** - Latest React features

### Available Scripts

```bash
# Development mode (watch mode)
npm run dev

# Build the library
npm run build

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Lint code
npm run lint

# Lint and auto-fix
npm run lint:fix

# Format code
npm run format
```

### Development Workflow

1. Make changes in `/src`
2. Run `npm run dev` to build in watch mode
3. Run `npm test` to verify tests pass
4. Run `npm run lint` to check code quality

The library will be built to `/dist` with both ESM and CommonJS formats.