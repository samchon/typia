import { _randomInteger } from "./_randomInteger";
import { _randomString } from "./_randomString";
import { _stringLength } from "./_stringLength";

export const _RANDOM_LENGTH_ERROR =
  "unable to generate a random string satisfying both the format and the length constraints.";

/**
 * Length bounds forwarded to a string format or pattern generator.
 *
 * `typia.random<T>()` passes this object to the `_randomFormat*` and
 * `_randomPattern` helpers whenever the string leaf also carries a `MinLength`
 * or `MaxLength` tag, so a constrained format or pattern is generated at a
 * length its own validator accepts (issue #2189).
 *
 * @evidence contracts/common.md#principled-implementation Two optional numbers carry the minimum and maximum length of a string leaf to a format or pattern generator.
 * @evidence contracts/common.md#clear-and-simple-design Two fields.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
 * @evidence contracts/common.md#meaningful-documentation The comment says when the generated code passes it.
 */
export interface _ILengthProps {
  /** Inclusive minimum string length in code points, when constrained. */
  minLength?: number;

  /** Inclusive maximum string length in code points, when constrained. */
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
 *
 * @evidence contracts/common.md#principled-implementation A variable segment is drawn so that a fixed overhead plus the segment fits the requested window, with a floor for the shortest valid segment, and a window the shape cannot meet throws.
 * @evidence contracts/common.md#clear-and-simple-design One function over the string generator.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Failure is explicit.
 * @evidence contracts/common.md#meaningful-documentation The doc defines fixed, fallback and minimum.
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
 *
 * @evidence contracts/common.md#principled-implementation The requested bounds are intersected with the lengths the grammar admits, with a spread for an open side, and an empty intersection throws, which is the one case where no length can satisfy both.
 * @evidence contracts/common.md#clear-and-simple-design One function that returns a window and leaves the step to the caller.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The window is arithmetic and is not a retry.
 * @evidence contracts/common.md#meaningful-documentation The doc explains the window, the spread and the issue.
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

/**
 * Draws a length inside a window produced by {@link _randomLengthWindow}.
 *
 * @evidence contracts/common.md#principled-implementation A length is drawn uniformly inside the window through the integer generator.
 * @evidence contracts/common.md#clear-and-simple-design One function.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It uses the shared generator.
 * @evidence contracts/common.md#meaningful-documentation The one-line doc states the use.
 */
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
 *
 * @evidence contracts/common.md#principled-implementation A fixed-length format is generated and accepted only when its length in characters fits the window, up to 256 draws, and otherwise throws, which is correct for a grammar with exactly one length and wrong for formats with several, as the doc says.
 * @evidence contracts/common.md#clear-and-simple-design One function.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Characters, not code units, are counted to stay consistent with the length tags.
 * @evidence contracts/common.md#meaningful-documentation The doc states when to use it and when not to.
 */
export const _randomFormatLength = (
  props: _ILengthProps | undefined,
  generate: () => string,
): string => {
  if (props?.minLength === undefined && props?.maxLength === undefined)
    return generate();
  for (let i: number = 0; i < 256; ++i) {
    const value: string = generate();
    // Characters, not UTF-16 code units: `minLength` and `maxLength` are the
    // bounds the generated validator compares in characters. `uuid` and `date`,
    // the only two shapes routed through here, are ASCII, so the two counts
    // agree for them today -- this keeps one measure so a later non-ASCII
    // format cannot reintroduce the divergence unnoticed.
    const length: number = _stringLength(value);
    if (
      (props.minLength === undefined || length >= props.minLength) &&
      (props.maxLength === undefined || length <= props.maxLength)
    )
      return value;
  }
  throw new Error(_RANDOM_LENGTH_ERROR);
};
