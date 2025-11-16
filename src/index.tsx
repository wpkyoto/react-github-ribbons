import * as React from 'react';

export type GitHubRibbonColor =
  | 'red'
  | 'green'
  | 'black'
  | 'orange'
  | 'grey'
  | 'white';
export type GitHubRibbonPosition = 'left' | 'right';
export type GitHubRibbonProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  href: string;
  color?: GitHubRibbonColor;
  position?: GitHubRibbonPosition;
};

export const getRibbonImageURL = (
  position: GitHubRibbonPosition,
  color: GitHubRibbonColor = 'black'
): string => {
  switch (color) {
    case 'green':
      return `https://github.blog/wp-content/uploads/2008/12/forkme_${position}_green_007200.png?resize=149%2C149`;
    case 'red':
      return `https://github.blog/wp-content/uploads/2008/12/forkme_${position}_red_aa0000.png?resize=149%2C149`;
    case 'orange':
      return `https://github.blog/wp-content/uploads/2008/12/forkme_${position}_orange_ff7600.png`;
    case 'grey':
      return `https://github.blog/wp-content/uploads/2008/12/forkme_${position}_gray_6d6d6d.png?resize=149%2C149`;
    case 'white':
      return `https://github.blog/wp-content/uploads/2008/12/forkme_${position}_white_ffffff.png?resize=149%2C149`;
    case 'black':
      return `https://github.blog/wp-content/uploads/2008/12/forkme_${position}_darkblue_121621.png?resize=149%2C149`;
    default: {
      const t: never = color;
      throw new Error(`unsuported type${t}`);
    }
  }
};
const styleBase: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  right: 0,
  border: 0,
};

export const GitHubRibbon = (props: GitHubRibbonProps) => {
  const { color, style } = props;
  const position = props.position || 'right';
  const src = React.useMemo(
    () => getRibbonImageURL(position, color),
    [position, color]
  );
  const ribbonStyle = React.useMemo(() => {
    return {
      ...styleBase,
      [position]: 0,
      ...style,
    };
  }, [position, style]);
  return (
    <a style={ribbonStyle} {...props}>
      <img
        width="149"
        height="149"
        src={src}
        className="attachment-full size-full"
        alt="Fork me on GitHub"
        data-recalc-dims="1"
      />
    </a>
  );
};

export default GitHubRibbon;
