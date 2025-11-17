import { describe, expect, it } from 'vitest';
import { getRibbonImageURL } from '../src';

describe('getRibbonImageURL', () => {
  describe('position: right', () => {
    it('should return black ribbon URL when color is black', () => {
      // Arrange
      const position = 'right';
      const color = 'black';

      // Act
      const result = getRibbonImageURL(position, color);

      // Assert
      expect(result).toContain('forkme_right_darkblue_121621');
      expect(result).toContain('github.blog');
    });

    it('should return red ribbon URL when color is red', () => {
      // Arrange
      const position = 'right';
      const color = 'red';

      // Act
      const result = getRibbonImageURL(position, color);

      // Assert
      expect(result).toContain('forkme_right_red_aa0000');
    });

    it('should return green ribbon URL when color is green', () => {
      // Arrange
      const position = 'right';
      const color = 'green';

      // Act
      const result = getRibbonImageURL(position, color);

      // Assert
      expect(result).toContain('forkme_right_green_007200');
    });

    it('should return orange ribbon URL when color is orange', () => {
      // Arrange
      const position = 'right';
      const color = 'orange';

      // Act
      const result = getRibbonImageURL(position, color);

      // Assert
      expect(result).toContain('forkme_right_orange_ff7600');
    });

    it('should return grey ribbon URL when color is grey', () => {
      // Arrange
      const position = 'right';
      const color = 'grey';

      // Act
      const result = getRibbonImageURL(position, color);

      // Assert
      expect(result).toContain('forkme_right_gray_6d6d6d');
    });

    it('should return white ribbon URL when color is white', () => {
      // Arrange
      const position = 'right';
      const color = 'white';

      // Act
      const result = getRibbonImageURL(position, color);

      // Assert
      expect(result).toContain('forkme_right_white_ffffff');
    });
  });

  describe('position: left', () => {
    it('should return black ribbon URL with left position when color is black', () => {
      // Arrange
      const position = 'left';
      const color = 'black';

      // Act
      const result = getRibbonImageURL(position, color);

      // Assert
      expect(result).toContain('forkme_left_darkblue_121621');
    });

    it('should return red ribbon URL with left position when color is red', () => {
      // Arrange
      const position = 'left';
      const color = 'red';

      // Act
      const result = getRibbonImageURL(position, color);

      // Assert
      expect(result).toContain('forkme_left_red_aa0000');
    });
  });

  describe('default color', () => {
    it('should default to black when color is not provided', () => {
      // Arrange
      const position = 'right';

      // Act
      const result = getRibbonImageURL(position);

      // Assert
      expect(result).toContain('forkme_right_darkblue_121621');
    });
  });
});
