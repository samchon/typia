import { _randomInteger } from "./_randomInteger";
import { _randomString } from "./_randomString";

export const _RANDOM_LENGTH_ERROR =
  "unable to generate a random string satisfying both the format and the length constraints.";

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
  if (high < low || high < minimum) throw new Error(_RANDOM_LENGTH_ERROR);
  return _randomString({ type: "string", minLength: low, maxLength: high });
};

/**
 * Intersects the requested length window with the lengths a format's grammar
 * can express, and draws one of them.
 *
 * `minimum` and `maximum` are the shortest and longest values the format admits
 * — omit `maximum` when the grammar is open above — and `spread` is how far
 * past the floor an unbounded request may reach, so an open side still varies
 * the way `_randomString` does. The caller draws from the returned window and
 * applies whatever step its grammar has (base64 lengths are multiples of four,
 * a fractional second needs at least one digit).
 *
 * Throws only when the window and the grammar do not overlap at all. That is
 * the distinction the retry driver below cannot make: it redraws one shape, so
 * it gives up on every length that shape never emits even when the format
 * itself accepts one (issue #2284).
 */
export const _randomLengthWindow = (
  props: _ILengthProps | undefined,
  format: { minimum: number; maximum?: number; spread?: number },
): { low: number; high: number } => {
  const ceiling: number = format.maximum ?? Number.MAX_SAFE_INTEGER;
  const low: number = Math.max(
    props?.minLength ?? format.minimum,
    format.minimum,
  );
  const high: number = Math.min(
    props?.maxLength ?? low + (format.spread ?? 0),
    ceiling,
  );
  if (low > high) throw new Error(_RANDOM_LENGTH_ERROR);
  return { low, high };
};

/** Draws a length inside a window produced by {@link _randomLengthWindow}. */
export const _randomLengthPick = (window: {
  low: number;
  high: number;
}): number =>
  _randomInteger({
    type: "integer",
    minimum: window.low,
    maximum: window.high,
  });

/**
 * Wraps a fixed-length format generator (uuid, date) with the requested length
 * window.
 *
 * Use it only where the grammar admits exactly one length, so a window that
 * excludes it is genuinely unsatisfiable. A format that can express more than
 * one length must build its value at a length drawn from
 * {@link _randomLengthWindow} instead; redrawing one shape cannot reach a length
 * that shape never emits.
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
  throw new Error(_RANDOM_LENGTH_ERROR);
};
