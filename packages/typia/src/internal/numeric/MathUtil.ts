//================================================================
/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
export namespace MathUtil {
  export function factorial(k: number): number {
    if (FACTORIALS.length <= k)
      for (let i: number = FACTORIALS.length; i <= k; ++i)
        FACTORIALS.push(FACTORIALS[i - 1] * i);

    return FACTORIALS[k];
  }

  export function integral(
    formula: (x: number) => number,
    first: number,
    last: number,
    segment_count: number = 100 * 1000,
  ): number {
    if (first > last) [first, last] = [last, first];
    else if (first === last) return 0;

    const interval: number = (last - first) / segment_count;
    let ret: number = 0.0;

    for (; first < last; first += interval) ret += formula(first) * interval;

    return ret;
  }

  export function sigma(
    formula: (k: number) => number,
    first: number,
    last: number,
  ): number {
    let ret: number = 0.0;
    for (; first <= last; ++first) ret += formula(first);

    return ret;
  }

  const FACTORIALS: number[] = [1, 1];
}
