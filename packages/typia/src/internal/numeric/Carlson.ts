//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { MathUtil } from "./MathUtil";

export namespace Carlson {
  const INFINITY = 100 * 1000;
  const SECTION = INFINITY;

  export function rf(x: number, y: number, z: number): number {
    return (
      MathUtil.integral(
        function (t: number): number {
          let ret: number = t + x;
          ret *= t + y;
          ret *= t + z;

          return 1 / Math.sqrt(ret);
        },
        0,
        INFINITY,
        SECTION,
      ) / 2
    );
  }

  export function rj(x: number, y: number, z: number, p: number): number {
    return (
      MathUtil.integral(
        function (t: number): number {
          let ret: number = t + x;
          ret *= t + y;
          ret *= t + z;
          ret = (t + p) * Math.sqrt(ret);

          return 1 / ret;
        },
        0,
        INFINITY,
        SECTION,
      ) * 1.5
    );
  }

  export function rc(x: number, y: number) {
    return rf(x, y, y);
  }

  export function rd(x: number, y: number, z: number) {
    return rj(x, y, z, z);
  }
}
