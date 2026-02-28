import { describe, it, expect, vi } from 'vitest';
import { Effect } from '../utils/effect';

describe('Effect', () => {
  it('runs added side effects', () => {
    const effect = new Effect();
    const fn = vi.fn();
    effect.add(fn);
    effect.run();
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('runs multiple side effects in order', () => {
    const effect = new Effect();
    const order: number[] = [];
    effect.add(() => { order.push(1); });
    effect.add(() => { order.push(2); });
    effect.add(() => { order.push(3); });
    effect.run();
    expect(order).toEqual([1, 2, 3]);
  });

  it('clears side effects after run', () => {
    const effect = new Effect();
    const fn = vi.fn();
    effect.add(fn);
    effect.run();
    effect.run(); // second run should not call fn again
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('collects and runs cleanup functions on dispose', () => {
    const effect = new Effect();
    const cleanup = vi.fn();
    effect.add(() => cleanup);
    effect.run();
    expect(cleanup).not.toHaveBeenCalled();
    effect.dispose();
    expect(cleanup).toHaveBeenCalledTimes(1);
  });

  it('ignores side effects without cleanup', () => {
    const effect = new Effect();
    effect.add(() => {});
    effect.run();
    // should not throw on dispose
    effect.dispose();
  });

  it('ignores add after dispose', () => {
    const effect = new Effect();
    effect.dispose();
    const fn = vi.fn();
    effect.add(fn);
    effect.run();
    expect(fn).not.toHaveBeenCalled();
  });

  it('ignores run after dispose', () => {
    const effect = new Effect();
    const fn = vi.fn();
    effect.add(fn);
    effect.dispose();
    effect.run();
    expect(fn).not.toHaveBeenCalled();
  });

  it('ignores multiple dispose calls', () => {
    const effect = new Effect();
    const cleanup = vi.fn();
    effect.add(() => cleanup);
    effect.run();
    effect.dispose();
    effect.dispose();
    expect(cleanup).toHaveBeenCalledTimes(1);
  });

  it('runs multiple cleanup functions', () => {
    const effect = new Effect();
    const cleanup1 = vi.fn();
    const cleanup2 = vi.fn();
    effect.add(() => cleanup1);
    effect.add(() => cleanup2);
    effect.run();
    effect.dispose();
    expect(cleanup1).toHaveBeenCalledTimes(1);
    expect(cleanup2).toHaveBeenCalledTimes(1);
  });
});
