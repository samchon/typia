//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { InvalidArgument } from "../../exception/InvalidArgument";

/**
 * Laguerre polynomials.
 *
 * @reference https://en.wikipedia.org/wiki/Laguerre_polynomials
 */
export function laguerre(n: number, x: number): number {
  return assoc_laguerre(n, 0, x);
}

/**
 * Associated laguerre polynomials.
 *
 * @reference https://en.wikipedia.org/wiki/Laguerre_polynomials#Generalized_Laguerre_polynomials
 */
export function assoc_laguerre(n: number, m: number, x: number): number {
  // VALIDATE PARAMETERS
  if ((n = Math.floor(n)) < 0 || (m = Math.floor(m)) < 0)
    throw new InvalidArgument(
      `Error on std.assoc_laguerre(): both n and m must be unsigned integer -> (n = ${n}, m = ${m}).`,
    );

  // MEMORIZATION
  const solutions: number[] = [1, -x + m + 1];

  // COMPUTE RETURN VALUE
  return _Compute_assoc_laguerre(n, m, x, solutions);
}

function _Compute_assoc_laguerre(
  n: number,
  m: number,
  x: number,
  solutions: number[],
): number {
  if (solutions.length > n) return solutions[n];

  const ln_1: number = _Compute_assoc_laguerre(n - 1, m, x, solutions);
  const ln_2: number = _Compute_assoc_laguerre(n - 2, m, x, solutions);

  let ret: number = (2 * n - 1 + m - x) * ln_1 - (n + m - 1) * ln_2;
  ret = ret / n;

  solutions[n] = ret;
  return ret;
}
