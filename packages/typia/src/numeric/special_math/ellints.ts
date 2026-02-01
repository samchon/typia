//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { InvalidArgument } from "../../exception/InvalidArgument";
import { MathUtil } from "../../internal/numeric/MathUtil";

/* ---------------------------------------------------------------
    FIRST
--------------------------------------------------------------- */
/**
 * Incomplete elliptic integral of the 1st kind.
 *
 * @reference https://en.wikipedia.org/wiki/Elliptic_integral#Complete_elliptic_integral_of_the_first_kind
 */
export function ellint_1(k: number, phi: number): number {
  // FORMULA OF INTEGRAL
  const formula = function (x: number): number {
    return 1.0 / _Common_formula(k, x);
  };
  return _Post_process("ellint_1", k, phi, formula);
}

/**
 * Complete elliptic integral of the 1st kind.
 *
 * @reference https://en.wikipedia.org/wiki/Elliptic_integral#Elliptic_integral_of_the_first_kind
 */
export function comp_ellint_1(k: number): number {
  return ellint_1(k, Math.PI / 2);
}

/* ---------------------------------------------------------------
    SECOND
--------------------------------------------------------------- */
/**
 * Incomplete elliptic integral of the 2nd kind.
 *
 * @reference https://en.wikipedia.org/wiki/Elliptic_integral#Incomplete_elliptic_integral_of_the_second_kind
 */
export function ellint_2(k: number, phi: number): number {
  const formula = function (x: number): number {
    return _Common_formula(k, x);
  };
  return _Post_process("ellint_2", k, phi, formula);
}

/**
 * Complete elliptic integral of the 2nd kind.
 *
 * @reference https://en.wikipedia.org/wiki/Elliptic_integral#Complete_elliptic_integral_of_the_second_kind
 */
export function comp_ellint_2(k: number): number {
  return ellint_2(k, Math.PI / 2);
}

/* ---------------------------------------------------------------
    THIRD
--------------------------------------------------------------- */
/**
 * Incomplete elliptic integral of the 3rd kind.
 *
 * @reference https://en.wikipedia.org/wiki/Elliptic_integral#Complete_elliptic_integral_of_the_third_kind
 */
export function ellint_3(k: number, v: number, phi: number): number {
  // SPECIAL VALIDATIONS ONLY FOR SERIES-3
  const predicator: number = 1 / Math.pow(Math.sin(phi), 2);
  if (v > predicator)
    throw new InvalidArgument(
      `Error on std.ellint_3(): must be v < (1 / sin^2(phi)) -> (v = ${v}, 1 / sin^2(phi) = ${predicator}).`,
    );

  return _Ellint_3(k, v, phi);
}

/**
 * Complete elliptic integral of the 3rd kind.
 *
 * @reference https://en.wikipedia.org/wiki/Elliptic_integral#Incomplete_elliptic_integral_of_the_third_kind
 */
export function comp_ellint_3(k: number, n: number): number {
  return ellint_3(k, n, Math.PI / 2);
}

function _Ellint_3(k: number, v: number, phi: number): number {
  const formula = function (x: number): number {
    let denominator: number = 1 - v * Math.pow(Math.sin(x), 2);
    denominator *= _Common_formula(k, x);

    return 1.0 / denominator;
  };
  return _Post_process("ellint_3", k, phi, formula);
}

/* ---------------------------------------------------------------
    BACKGROUNDS
--------------------------------------------------------------- */
function _Common_formula(k: number, x: number): number {
  return Math.sqrt(1 - Math.pow(k * Math.sin(x), 2));
}

function _Post_process(
  func: string,
  k: number,
  phi: number,
  formula: (x: number) => number,
): number {
  if (Math.abs(k) > 1)
    throw new InvalidArgument(
      `Error on std.${func}(): must be |k| <= 1 -> (k = ${k}).`,
    );

  const area: number = MathUtil.integral(formula, 0, phi);
  return phi < 0 ? -area : area;
}
