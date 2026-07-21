import { _randomString } from "./_randomString";

/**
 * Length bounds forwarded to a string format or pattern generator.
 *
 * `typia.random<T>()` passes this object to the `_randomFormat*` and
 * `_randomPattern` helpers whenever the string leaf also carries a `MinLength`
 * or `MaxLength` tag, so a constrained format or pattern is generated at a
 * length its own validator accepts (issue #2189).
 */
export interface _ILengthProps {
  minLength?: number;
  maxLength?: number;
}

/**
 * Builds the variable segment of a fixed-shape format string so that the total
 * length `fixed + segment.length` lands inside the requested window.
 *
 * `fixed` is the number of characters the format always contributes around the
 * segment, `fallback` is the segment length used when the leaf is unconstrained
 * on that side, and `minimum` is the smallest segment the format still
 * validates with. Throws when the window cannot be satisfied by this format's
 * shape (e.g. `Format<"email"> & MaxLength<3>`).
 */
export const _randomSegmentLength = (
  props: _ILengthProps | undefined,
  fixed: number,
  fallback: number,
  minimum: number,
): string => {
  let low: number =
    props?.minLength === undefined ? minimum : props.minLength - fixed;
  if (low < minimum) low = minimum;
  // With only a lower bound, spread the segment across `fallback` extra
  // characters so the generated length varies, mirroring `_randomString`.
  const high: number =
    props?.maxLength === undefined ? low + fallback : props.maxLength - fixed;
  if (high < low || high < minimum)
    throw new Error(
      "unable to generate a random string satisfying both the format and the length constraints.",
    );
  return _randomString({ type: "string", minLength: low, maxLength: high });
};

/**
 * Wraps a fixed- or narrow-length format generator (uuid, ipv4, date, ...) with
 * the requested length window.
 *
 * These formats cannot grow an arbitrary segment, so the generator is retried a
 * bounded number of times and the first draw inside the window is returned. A
 * window that excludes every length the format can produce is unsatisfiable and
 * throws instead of silently yielding an out-of-range value.
 */
export const _randomFormatLength = (
  props: _ILengthProps | undefined,
  generate: () => string,
): string => {
  if (props?.minLength === undefined && props?.maxLength === undefined)
    return generate();
  for (let i: number = 0; i < 256; ++i) {
    const value: string = generate();
    if (
      (props.minLength === undefined || value.length >= props.minLength) &&
      (props.maxLength === undefined || value.length <= props.maxLength)
    )
      return value;
  }
  throw new Error(
    "unable to generate a random string satisfying both the format and the length constraints.",
  );
};
