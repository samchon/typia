//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { InvalidArgument } from "../../exception/InvalidArgument";
import { MathUtil } from "../../internal/numeric/MathUtil";
import { tgamma } from "./gamma";

const INFINITY = 100; // (1 / 30!) is nearby 0.

/*================================================================
    ORIGINAL FUNCTIONS
        - CYLINDRICAL
        - SPHERICAL
==================================================================
    FIRST KIND
--------------------------------------------------------------- */
/**
 * Bessel function of the 1st kind.
 *
 * @reference https://en.wikipedia.org/wiki/Bessel_function#Bessel_functions_of_the_first_kind:_J.CE.B1
 */
export function cyl_bessel_j(n: number, x: number): number {
  // VALIDATION
  if (x < 0 && Math.floor(n) !== n)
    throw new InvalidArgument(
      `Error on std.cyl_bessel_j(): n must be integer when x is negative -> (n = ${n}, x = ${x}).`,
    );
  else if (x === 0 && n !== 0)
    throw new InvalidArgument(
      `Error on std.cyl_bessel_j(): n must be zero when x is zero -> (n = ${n}, x = ${x}).`,
    );

  // COMPUTATION
  if (n === Math.floor(n)) return _J_int(n, x);
  else return _J_positive(n, x);
}

/**
 * Bessel function of the 2nd kind.
 *
 * @reference https://en.wikipedia.org/wiki/Bessel_function#Bessel_functions_of_the_second_kind:_Y.CE.B1
 */
export function cyl_neumann(v: number, x: number): number {
  if (x <= 0)
    throw new InvalidArgument(
      `Error on std.cyl_neumann(): x must be greater than zero -> (x = ${x}).`,
    );

  const numerator: number =
    cyl_bessel_j(v, x) * Math.cos(v * Math.PI) - cyl_bessel_j(-v, x);
  const denominator: number = Math.sin(v * Math.PI);

  return numerator / denominator;
}

function _J_int(n: number, x: number): number {
  if (n < 0) return Math.pow(-1, n) * _J_positive(-n, x);
  else return _J_positive(n, x);
}

function _J_positive(v: number, x: number): number {
  const sigma: number = MathUtil.sigma(
    function (k: number): number {
      let ret: number = Math.pow(-1, k) * Math.pow(x / 2, v + 2 * k);
      ret /= MathUtil.factorial(k) * tgamma(v + k + 1);

      return ret;
    },
    0,
    INFINITY,
  );

  return sigma;
}

/* ---------------------------------------------------------------
    SPHERICAL
--------------------------------------------------------------- */
/**
 * Spherical Bessel function of the 1st kind.
 *
 * @reference https://en.wikipedia.org/wiki/Bessel_function#Spherical_Bessel_functions:_jn.2C_yn
 */
export function sph_bessel(n: number, x: number): number {
  return Math.sqrt(Math.PI / (2 * x)) * cyl_bessel_j(n + 0.5, x);
}

/**
 * Spherical Bessel function of the 2nd kind.
 *
 * @reference https://en.wikipedia.org/wiki/Bessel_function#Spherical_Bessel_functions:_jn.2C_yn
 */
export function sph_neumann(n: number, x: number): number {
  let ret: number = Math.sqrt(Math.PI / (2 * x));
  ret *= cyl_neumann(n + 0.5, x);

  return ret;
}

/*================================================================
    REQGULAR MODIFIED
        - FIRST KIND
        - SECOND KIND
==================================================================
    FIRST KIND
--------------------------------------------------------------- */
/**
 * Modified cylindrical Bessel function of the 1st kind.
 *
 * @reference https://en.wikipedia.org/wiki/Bessel_function#Modified_Bessel_functions:_I.CE.B1_.2C_K.CE.B1
 */
export function cyl_bessel_i(n: number, x: number): number {
  // VALIDATION
  if (x < 0 && Math.floor(n) !== n)
    throw new InvalidArgument(
      `Error on std.cyl_bessel_i(): n must be integer when x is negative -> (n = ${n}, x = ${x}).`,
    );
  else if (x === 0 && n !== 0)
    throw new InvalidArgument(
      `Error on std.cyl_bessel_i(): n must be zero when x is zero -> (n = ${n}, x = ${x}).`,
    );

  // COMPUTATION
  if (n === 0.5) return Math.sqrt(2.0 / (Math.PI * x)) * Math.sinh(x);
  else return _Bessel_i(n, x);
}

function _Bessel_i(v: number, x: number): number {
  return MathUtil.sigma(
    function (k: number): number {
      const numerator: number = Math.pow(x / 2, v + 2 * k);
      const denominator: number = MathUtil.factorial(k) * tgamma(v + k + 1);

      return numerator / denominator;
    },
    0,
    INFINITY,
  );
}

/* ---------------------------------------------------------------
    SECOND KIND
--------------------------------------------------------------- */
/**
 * Modified cylindrical Bessel function of the 2nd kind.
 *
 * @reference https://en.wikipedia.org/wiki/Bessel_function#Modified_Bessel_functions:_I.CE.B1_.2C_K.CE.B1
 */
export function cyl_bessel_k(n: number, x: number): number {
  if (x <= 0)
    throw new InvalidArgument(
      `Error on std.cyl_bessel_k(): requires x > 0 -> (x = ${x}).`,
    );

  return _Bessel_k(n, x);
}

function _Bessel_k(v: number, z: number): number {
  let ret: number = Math.PI / 2;
  ret *= cyl_bessel_i(-v, z) - cyl_bessel_i(v, z);
  ret /= Math.sin(v * Math.PI);

  return ret;
}
