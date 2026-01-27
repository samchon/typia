//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { InvalidArgument } from "../../exception/InvalidArgument";

/**
 * Legendre polynomials.
 *
 * @reference http://en.cppreference.com/w/cpp/numeric/special_math/legendre
 */
export function legendre(n: number, x: number): number {
  return assoc_legendre(n, 0, x);
}

/**
 * Associated Legendre polynomials.
 *
 * @reference https://en.wikipedia.org/wiki/Associated_Legendre_polynomials
 */
export function assoc_legendre(n: number, m: number, x: number): number {
  // VALIDATE PARAMETERS
  if ((n = Math.floor(n)) < 0 || (m = Math.floor(m)) < 0)
    throw new InvalidArgument(
      `Error on std.assoc_legendre(): both n and m must be unsigned integer -> (n = ${n}, m = ${m}).`,
    );
  else if (Math.abs(x) > 1)
    throw new InvalidArgument(
      `Error on std.assoc_legendre(): must be |x| <= 1 -> (x = ${x}).`,
    );

  // MEMORIZATION
  const matrix: number[][] = [[1, x]];
  matrix.length = m + 1;

  for (let i: number = 1; i < matrix.length; ++i) matrix[i] = [];

  // COMPUTE RETURN VALUE
  return _Compute_assoc_legendre(n, m, x, matrix);
}

function _Compute_legendre(n: number, x: number, memory: number[]): number {
  if (memory.length > n) return memory[n];

  const pn_1: number = _Compute_legendre(n - 1, x, memory);
  const pn_2: number = _Compute_legendre(n - 2, x, memory);

  let ret: number = (2 * n - 1) * x * pn_1 - (n - 1) * pn_2;
  ret /= n;

  memory[n] = ret;
  return ret;
}

function _Compute_assoc_legendre(
  n: number,
  m: number,
  x: number,
  matrix: number[][],
): number {
  if (n < 0) n = -n - 1;

  if (m === 0) return _Compute_legendre(n, x, matrix[0]);
  else if (matrix[m].length > n && matrix[m][n] !== undefined)
    return matrix[m][n];

  const left: number =
    (n - m + 1) *
    (n - m + 2) *
    _Compute_assoc_legendre(n + 1, m - 1, x, matrix);
  const right: number =
    (n + m - 1) * (n + m) * _Compute_assoc_legendre(n - 1, m - 1, x, matrix);

  let ret: number = (left - right) / (2 * n + 1);
  ret /= Math.sqrt(1 - x * x);

  matrix[m][n] = ret;
  return ret;
}
