import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { GitHubRibbon } from '../src';

describe('GitHubRibbon', () => {
  describe('基本的なレンダリング', () => {
    it('should render anchor element with correct href', () => {
      // Arrange
      const href = 'https://github.com/test/repo';

      // Act
      const { container } = render(<GitHubRibbon href={href} />);
      const link = container.querySelector('a');

      // Assert
      expect(link).toBeTruthy();
      expect(link?.getAttribute('href')).toBe(href);
    });

    it('should render image with correct alt text', () => {
      // Arrange
      const href = 'https://github.com/test/repo';

      // Act
      const { container } = render(<GitHubRibbon href={href} />);
      const img = container.querySelector('img');

      // Assert
      expect(img).toBeTruthy();
      expect(img?.getAttribute('alt')).toBe('Fork me on GitHub');
    });

    it('should render image with correct dimensions', () => {
      // Arrange
      const href = 'https://github.com/test/repo';

      // Act
      const { container } = render(<GitHubRibbon href={href} />);
      const img = container.querySelector('img');

      // Assert
      expect(img?.getAttribute('width')).toBe('149');
      expect(img?.getAttribute('height')).toBe('149');
    });
  });

  describe('colorプロパティ', () => {
    it('should use black color by default', () => {
      // Arrange
      const href = 'https://github.com/test/repo';

      // Act
      const { container } = render(<GitHubRibbon href={href} />);
      const img = container.querySelector('img');

      // Assert
      expect(img?.getAttribute('src')).toContain('darkblue_121621');
    });

    it('should apply red color when color prop is red', () => {
      // Arrange
      const href = 'https://github.com/test/repo';
      const color = 'red';

      // Act
      const { container } = render(<GitHubRibbon href={href} color={color} />);
      const img = container.querySelector('img');

      // Assert
      expect(img?.getAttribute('src')).toContain('red_aa0000');
    });

    it('should apply green color when color prop is green', () => {
      // Arrange
      const href = 'https://github.com/test/repo';
      const color = 'green';

      // Act
      const { container } = render(<GitHubRibbon href={href} color={color} />);
      const img = container.querySelector('img');

      // Assert
      expect(img?.getAttribute('src')).toContain('green_007200');
    });

    it('should apply orange color when color prop is orange', () => {
      // Arrange
      const href = 'https://github.com/test/repo';
      const color = 'orange';

      // Act
      const { container } = render(<GitHubRibbon href={href} color={color} />);
      const img = container.querySelector('img');

      // Assert
      expect(img?.getAttribute('src')).toContain('orange_ff7600');
    });

    it('should apply grey color when color prop is grey', () => {
      // Arrange
      const href = 'https://github.com/test/repo';
      const color = 'grey';

      // Act
      const { container } = render(<GitHubRibbon href={href} color={color} />);
      const img = container.querySelector('img');

      // Assert
      expect(img?.getAttribute('src')).toContain('gray_6d6d6d');
    });

    it('should apply white color when color prop is white', () => {
      // Arrange
      const href = 'https://github.com/test/repo';
      const color = 'white';

      // Act
      const { container } = render(<GitHubRibbon href={href} color={color} />);
      const img = container.querySelector('img');

      // Assert
      expect(img?.getAttribute('src')).toContain('white_ffffff');
    });
  });

  describe('positionプロパティ', () => {
    it('should use right position by default', () => {
      // Arrange
      const href = 'https://github.com/test/repo';

      // Act
      const { container } = render(<GitHubRibbon href={href} />);
      const link = container.querySelector('a');
      const img = container.querySelector('img');

      // Assert
      expect(link?.style.right).toBe('0px');
      expect(img?.getAttribute('src')).toContain('right');
    });

    it('should apply left position when position prop is left', () => {
      // Arrange
      const href = 'https://github.com/test/repo';
      const position = 'left';

      // Act
      const { container } = render(
        <GitHubRibbon href={href} position={position} />
      );
      const link = container.querySelector('a');
      const img = container.querySelector('img');

      // Assert
      expect(link?.style.left).toBe('0px');
      expect(img?.getAttribute('src')).toContain('left');
    });

    it('should apply right position when position prop is right', () => {
      // Arrange
      const href = 'https://github.com/test/repo';
      const position = 'right';

      // Act
      const { container } = render(
        <GitHubRibbon href={href} position={position} />
      );
      const link = container.querySelector('a');
      const img = container.querySelector('img');

      // Assert
      expect(link?.style.right).toBe('0px');
      expect(img?.getAttribute('src')).toContain('right');
    });
  });

  describe('スタイリング', () => {
    it('should apply absolute positioning', () => {
      // Arrange
      const href = 'https://github.com/test/repo';

      // Act
      const { container } = render(<GitHubRibbon href={href} />);
      const link = container.querySelector('a');

      // Assert
      expect(link?.style.position).toBe('absolute');
    });

    it('should apply top: 0 styling', () => {
      // Arrange
      const href = 'https://github.com/test/repo';

      // Act
      const { container } = render(<GitHubRibbon href={href} />);
      const link = container.querySelector('a');

      // Assert
      expect(link?.style.top).toBe('0px');
    });

    it('should apply border: 0 styling', () => {
      // Arrange
      const href = 'https://github.com/test/repo';

      // Act
      const { container } = render(<GitHubRibbon href={href} />);
      const link = container.querySelector('a');

      // Assert
      expect(link?.style.border).toBe('0px');
    });

    it('should merge custom style with base style', () => {
      // Arrange
      const href = 'https://github.com/test/repo';
      const customStyle = { zIndex: 999 };

      // Act
      const { container } = render(
        <GitHubRibbon href={href} style={customStyle} />
      );
      const link = container.querySelector('a');

      // Assert
      expect(link?.style.position).toBe('absolute');
      expect(link?.style.top).toBe('0px');
      expect(link?.style.zIndex).toBe('999');
    });
  });

  describe('anchor要素のプロパティ', () => {
    it('should pass through target attribute', () => {
      // Arrange
      const href = 'https://github.com/test/repo';
      const target = '_blank';

      // Act
      const { container } = render(
        <GitHubRibbon href={href} target={target} />
      );
      const link = container.querySelector('a');

      // Assert
      expect(link?.getAttribute('target')).toBe(target);
    });

    it('should pass through rel attribute', () => {
      // Arrange
      const href = 'https://github.com/test/repo';
      const rel = 'noopener noreferrer';

      // Act
      const { container } = render(<GitHubRibbon href={href} rel={rel} />);
      const link = container.querySelector('a');

      // Assert
      expect(link?.getAttribute('rel')).toBe(rel);
    });

    it('should pass through className attribute', () => {
      // Arrange
      const href = 'https://github.com/test/repo';
      const className = 'custom-ribbon-class';

      // Act
      const { container } = render(
        <GitHubRibbon href={href} className={className} />
      );
      const link = container.querySelector('a');

      // Assert
      expect(link?.className).toContain(className);
    });

    it('should pass through multiple anchor attributes', () => {
      // Arrange
      const href = 'https://github.com/test/repo';
      const target = '_blank';
      const rel = 'noopener noreferrer';
      const className = 'custom-class';

      // Act
      const { container } = render(
        <GitHubRibbon
          href={href}
          target={target}
          rel={rel}
          className={className}
        />
      );
      const link = container.querySelector('a');

      // Assert
      expect(link?.getAttribute('href')).toBe(href);
      expect(link?.getAttribute('target')).toBe(target);
      expect(link?.getAttribute('rel')).toBe(rel);
      expect(link?.className).toContain(className);
    });
  });

  describe('colorとpositionの組み合わせ', () => {
    it('should correctly combine left position with orange color', () => {
      // Arrange
      const href = 'https://github.com/test/repo';
      const position = 'left';
      const color = 'orange';

      // Act
      const { container } = render(
        <GitHubRibbon href={href} position={position} color={color} />
      );
      const link = container.querySelector('a');
      const img = container.querySelector('img');

      // Assert
      expect(link?.style.left).toBe('0px');
      expect(img?.getAttribute('src')).toContain('left');
      expect(img?.getAttribute('src')).toContain('orange');
    });

    it('should correctly combine right position with white color', () => {
      // Arrange
      const href = 'https://github.com/test/repo';
      const position = 'right';
      const color = 'white';

      // Act
      const { container } = render(
        <GitHubRibbon href={href} position={position} color={color} />
      );
      const link = container.querySelector('a');
      const img = container.querySelector('img');

      // Assert
      expect(link?.style.right).toBe('0px');
      expect(img?.getAttribute('src')).toContain('right');
      expect(img?.getAttribute('src')).toContain('white');
    });
  });
});
