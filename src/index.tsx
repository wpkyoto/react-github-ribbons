import {
  type AnchorHTMLAttributes,
  type CSSProperties,
  forwardRef,
} from 'react';

export type GitHubRibbonColor =
  | 'red'
  | 'green'
  | 'black'
  | 'orange'
  | 'grey'
  | 'white';
export type GitHubRibbonPosition = 'left' | 'right';
export type GitHubRibbonProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'color'
> & {
  href: string;
  color?: GitHubRibbonColor;
  position?: GitHubRibbonPosition;
  /** Alternative text of the ribbon image. Defaults to "Fork me on GitHub". */
  alt?: string;
};

const IMAGE_BASE_URL = 'https://github.blog/wp-content/uploads/2008/12/forkme_';

// A Map (not an object literal) so inherited keys like "constructor" are not
// treated as supported colors.
const imageSuffixes = new Map<GitHubRibbonColor, string>([
  ['green', 'green_007200.png?resize=149%2C149'],
  ['red', 'red_aa0000.png?resize=149%2C149'],
  ['orange', 'orange_ff7600.png'],
  ['grey', 'gray_6d6d6d.png?resize=149%2C149'],
  ['white', 'white_ffffff.png?resize=149%2C149'],
  ['black', 'darkblue_121621.png?resize=149%2C149'],
]);

export const getRibbonImageURL = (
  position: GitHubRibbonPosition,
  color: GitHubRibbonColor = 'black'
): string => {
  const suffix = imageSuffixes.get(color);
  if (suffix === undefined) {
    throw new Error(`unsupported color: ${color}`);
  }
  return `${IMAGE_BASE_URL}${position}_${suffix}`;
};

export const GitHubRibbon = forwardRef<HTMLAnchorElement, GitHubRibbonProps>(
  function GitHubRibbon(
    {
      color = 'black',
      position = 'right',
      alt = 'Fork me on GitHub',
      style,
      ...anchorProps
    },
    ref
  ) {
    const ribbonStyle: CSSProperties = {
      position: 'absolute',
      top: 0,
      [position]: 0,
      border: 0,
      ...style,
    };
    return (
      <a {...anchorProps} ref={ref} style={ribbonStyle}>
        <img
          width={149}
          height={149}
          src={getRibbonImageURL(position, color)}
          alt={alt}
        />
      </a>
    );
  }
);

export default GitHubRibbon;
