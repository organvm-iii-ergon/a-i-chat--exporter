import { describe, it, expect, vi } from 'vitest';
import { memorize } from '../utils/memorize';

describe('memorize', () => {
  it('returns the same result for the same arguments', () => {
    const fn = memorize((a: number, b: number) => a + b);
    expect(fn(1, 2)).toBe(3);
    expect(fn(1, 2)).toBe(3);
  });

  it('calls the original function only once per unique args', () => {
    const spy = vi.fn((x: number) => x * 2);
    const fn = memorize(spy);
    fn(5);
    fn(5);
    fn(5);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls the function again for different arguments', () => {
    const spy = vi.fn((x: number) => x * 2);
    const fn = memorize(spy);
    fn(1);
    fn(2);
    fn(3);
    expect(spy).toHaveBeenCalledTimes(3);
  });

  it('handles string arguments', () => {
    const fn = memorize((s: string) => s.toUpperCase());
    expect(fn('hello')).toBe('HELLO');
    expect(fn('hello')).toBe('HELLO');
  });

  it('handles no arguments', () => {
    let calls = 0;
    const fn = memorize(() => ++calls);
    expect(fn()).toBe(1);
    expect(fn()).toBe(1);
    expect(calls).toBe(1);
  });

  it('handles object arguments via JSON serialization', () => {
    const spy = vi.fn((obj: { a: number }) => obj.a * 10);
    const fn = memorize(spy);
    fn({ a: 1 });
    fn({ a: 1 });
    expect(spy).toHaveBeenCalledTimes(1);
    fn({ a: 2 });
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('caches different results for different args', () => {
    const fn = memorize((x: number) => x * x);
    expect(fn(3)).toBe(9);
    expect(fn(4)).toBe(16);
    expect(fn(3)).toBe(9);
  });
});
