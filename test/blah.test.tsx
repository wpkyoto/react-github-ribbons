import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { GitHubRibbon } from '../src';

describe('GitHubRibbon', () => {
  it('renders without crashing', () => {
    render(<GitHubRibbon href="https://example.com" />);
    const img = screen.getByAltText('Fork me on GitHub');
    expect(img).toBeDefined();
  });

  it('renders with correct href', () => {
    const { container } = render(
      <GitHubRibbon href="https://github.com/test/repo" />
    );
    const link = container.querySelector('a');
    expect(link?.href).toBe('https://github.com/test/repo');
  });

  it('renders with custom color', () => {
    const { container } = render(
      <GitHubRibbon href="https://example.com" color="orange" />
    );
    const img = container.querySelector('img');
    expect(img?.src).toContain('orange');
  });

  it('renders with left position', () => {
    const { container } = render(
      <GitHubRibbon href="https://example.com" position="left" />
    );
    const img = container.querySelector('img');
    expect(img?.src).toContain('left');
  });

  it('renders with custom props', () => {
    const { container } = render(
      <GitHubRibbon
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
        className="custom-class"
      />
    );
    const link = container.querySelector('a');
    expect(link?.target).toBe('_blank');
    expect(link?.rel).toBe('noopener noreferrer');
    expect(link?.className).toContain('custom-class');
  });
});
