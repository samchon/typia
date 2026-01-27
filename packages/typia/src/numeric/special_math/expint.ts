//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { MathUtil } from "../../internal/numeric/MathUtil";

/**
 * Exponential integral.
 */
export function expint(x: number): number {
  if (x === 0) return -Infinity;
  else if (x < 0) return -_E1_G(-x);
  else return _EI_Factorial(x);
}

function _EI_Factorial(x: number): number {
  return (
    EULER +
    Math.log(Math.abs(x)) / Math.log(Math.E) +
    MathUtil.sigma(
      function (k: number): number {
        return Math.pow(x, k) / (k * MathUtil.factorial(k));
      },
      1,
      MAX_K,
    )
  );
}

/* ---------------------------------------------------------------
    SWAMEE AND OHIJA APPROXIMATION
--------------------------------------------------------------- */
// function _E1_AB(x: number): number
// {
//     const A: number = _Compute_A(x);
//     const B: number = _Compute_B(x);

//     const ret: number = Math.pow(A, -7.7) + B;
//     return Math.pow(ret, -0.13);
// }

// function _Compute_A(x: number): number
// {
//     const ret: number = 0.56146 / x + 0.65;
//     ret *= 1 + x;
//     ret = Math.log(ret) / Math.log(Math.E);

//     return ret;
// }

// function _Compute_B(x: number): number
// {
//     const ret: number = Math.pow(x, 4);
//     ret *= Math.pow(Math.E, 7.7*x);
//     ret *= Math.pow(2 + x, 3.7);

//     return ret;
// }

/* ---------------------------------------------------------------
    BARRY APPROXIMATION
--------------------------------------------------------------- */
function _E1_G(x: number): number {
  const h: number = _Compute_h(x);

  let ret: number = G + (1 - G) * Math.pow(Math.E, -x / (1 - G));
  ret = Math.pow(Math.E, -x) / ret;

  let ln: number = 1 + G / x - (1 - G) / Math.pow(h + B * x, 2);
  ln = Math.log(ln) / Math.log(Math.E);

  return ret * ln;
}

function _Compute_h(x: number): number {
  const q: number = _Compute_q(x);
  const left: number = 1 / (1 + Math.pow(x, 1.5));
  const right: number = (H_INF * q) / (1 + q);

  return left + right;
}

function _Compute_q(x: number): number {
  return (20 / 47) * Math.pow(x, Math.sqrt(31 / 26));
}

const EULER = 0.5772156649015328606;
const MAX_K = 150;
const G = Math.pow(Math.E, -EULER);
const B = Math.sqrt((2 * (1 - G)) / (G * (2 - G)));
const H_INF =
  ((1 - G) * (G * G - 6 * G + 12)) / (3 * G * Math.pow(2 - G, 2) * B);
