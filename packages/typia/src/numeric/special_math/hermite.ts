//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { InvalidArgument } from "../../exception/InvalidArgument";

/**
 * Hermite polynomial
 *
 * @reference https://en.wikipedia.org/wiki/Hermite_polynomials
 */
export function hermite(n: number, x: number): number {
  // VALIDATE PARAMETER
  if ((n = Math.floor(n)) < 0)
    throw new InvalidArgument(
      `Error on std.hermite(): n must be unsigned integer -> (n = ${n}).`,
    );

  // MEMORIZATION
  const solutions: number[] = [1, 2 * x];

  // COMPUTE RETURN VALUE
  return _Hermite(n, x, solutions);
}

function _Hermite(n: number, x: number, solutions: number[]): number {
  if (solutions.length > n) return solutions[n];

  const hn_1: number = _Hermite(n - 1, x, solutions);
  const hn_2: number = _Hermite(n - 2, x, solutions);

  let ret: number = x * hn_1 - (n - 1) * hn_2;
  ret *= 2;

  solutions[n] = ret;
  return ret;
}
