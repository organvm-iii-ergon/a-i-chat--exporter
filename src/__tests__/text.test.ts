import { describe, it, expect } from 'vitest';
import { standardizeLineBreaks } from '../utils/text';

describe('standardizeLineBreaks', () => {
  it('replaces \\r\\n with \\n', () => {
    expect(standardizeLineBreaks('hello\r\nworld')).toBe('hello\nworld');
  });

  it('replaces standalone \\r with \\n', () => {
    expect(standardizeLineBreaks('hello\rworld')).toBe('hello\nworld');
  });

  it('leaves \\n unchanged', () => {
    expect(standardizeLineBreaks('hello\nworld')).toBe('hello\nworld');
  });

  it('handles mixed line breaks', () => {
    expect(standardizeLineBreaks('a\r\nb\rc\nd')).toBe('a\nb\nc\nd');
  });

  it('handles empty string', () => {
    expect(standardizeLineBreaks('')).toBe('');
  });

  it('handles string with no line breaks', () => {
    expect(standardizeLineBreaks('hello world')).toBe('hello world');
  });
});
