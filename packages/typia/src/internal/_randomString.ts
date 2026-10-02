import type { OpenApi } from "@typia/interface";

import { _randomInteger } from "./_randomInteger";

const DEFAULT_MIN_LENGTH = 5;
const DEFAULT_RANGE = 5;

/**
 * Generate a random lowercase string within the schema's length bounds.
 *
 * The default length is five to ten characters.
 *
 * The optional source supplies draws in [0, 1); it defaults to the platform
 * source resolved when this helper is called. Nested draws use the same
 * source.
 *
 * @evidence contracts/common.md#principled-implementation The length is drawn between the schema's bounds with default floor five and range five and every character is a random lowercase letter, so the result satisfies length bounds and, as a letters-only string, most formats the generator does not know.
 * @evidence contracts/performance.md#efficient-algorithms Source injection adds one callback invocation at each existing draw without adding sampling, retries or state. Existing output-size traversal and multiple search bounds are unchanged.
 * @evidence contracts/performance.md#reuse-equivalent-work Length and alphabet draws are effectful and cannot be cached across equal bounds. All characters reuse the immutable module alphabet and supplied source within this invocation; sampled outputs are not shared between requests.
 * @evidence contracts/performance.md#bound-retention-and-release-resources Arrays and string-construction scratch grow with the chosen length; the module alphabet and defaults are fixed constants. Return transfers the string to the caller. No history, source callback, handles or tasks are retained after return or throw. Large requested lengths require proportional temporary allocation, without an independent fixed byte cap.
 * @evidence contracts/common.md#clear-and-simple-design One function over the integer generator.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The alphabet and defaults are constants of the generator.
 * @evidence contracts/common.md#meaningful-documentation The doc states the alphabet and the default length.
 */
export const _randomString = (
  props: OpenApi.IJsonSchema.IString,
  source: () => number = Math.random,
) => {
  const minimum: number =
    props.minLength ??
    Math.min(props.maxLength ?? DEFAULT_MIN_LENGTH, DEFAULT_MIN_LENGTH);
  const length: number = _randomInteger(
    {
      type: "integer",
      minimum,
      maximum: props.maxLength ?? minimum + DEFAULT_RANGE,
    },
    source,
  );
  return new Array(length)
    .fill(0)
    .map(() => ALPHABETS[random(source)])
    .join("");
};

const ALPHABETS = "abcdefghijklmnopqrstuvwxyz";

const random = (source: () => number) =>
  _randomInteger(
    {
      type: "integer",
      minimum: 0,
      maximum: ALPHABETS.length - 1,
    },
    source,
  );
