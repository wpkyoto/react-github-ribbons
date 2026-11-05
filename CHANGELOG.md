# Changelog

## 0.4.0 (unreleased)

### Fixed

- Passing `style` no longer drops the default positioning
  (`position: absolute; top: 0; ...`). Custom styles are now merged on top.
- `position="left"` no longer sets `right: 0` as well, which stretched the
  link across the full width of the container.
- `color` and `position` are no longer rendered as attributes on the `<a>`
  element.

### Added

- `alt` prop to change the image's alternative text.
- `ref` is forwarded to the `<a>` element.
- `package.json` now declares `"type": "module"` and `"sideEffects": false`.
  Previously `dist/index.js` was ESM in a package without a `type` field, so
  Node had to guess its format (arethetypeswrong: "Unexpected module syntax").
  CommonJS users get their own declaration file (`dist/index.d.cts`).

### Changed

- Removed the WordPress leftovers `class="attachment-full size-full"` and
  `data-recalc-dims` from the `<img>` element.
- `GitHubRibbonProps` is now based on `AnchorHTMLAttributes<HTMLAnchorElement>`
  (with `color` replaced by the ribbon color).
- React 18 and 19 are both tested in CI.
- Removed the `engines` field.

### Internal

- Removed an unnecessary `useMemo`; the component is now a plain function of
  its props.
- Updated the toolchain (Vite 8, Vitest 5, Biome 2, TypeScript 6) and removed
  the outdated `example/` directory.
- Releases are published from GitHub Actions with npm trusted publishing
  instead of `np`.
- Renovate batches non-major devDependency updates and merges them once CI
  passes.
