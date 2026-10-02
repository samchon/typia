import { _randomInteger } from "./_randomInteger";

/**
 * Select one element of an array using an integer draw.
 *
 * The optional source supplies draws in [0, 1); it defaults to the platform
 * source resolved when this helper is called. Nested draws use the same
 * source.
 *
 * @evidence contracts/common.md#principled-implementation The integer generator maps the supplied fraction to an index from zero through array.length minus one, and the element at that index is returned. Index probabilities are uniform only when the supplied source is uniform; a deterministic or biased source intentionally controls those choices. An empty array fails through the empty integer range.
 * @evidence contracts/common.md#clear-and-simple-design One expression with a private index helper.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Selection uses the actual integer generator with the supplied raw draw source; no candidate or desired result is special-cased.
 * @evidence contracts/common.md#meaningful-documentation The doc states candidate selection and the raw source contract; the acknowledgment distinguishes uniform and deliberately biased source probabilities and the empty-array failure.
 */
export const _randomPick = <T>(
  array: T[],
  source: () => number = Math.random,
): T => array[random(array, source)]!;
const random = <T>(array: T[], source: () => number) =>
  _randomInteger(
    {
      type: "integer",
      minimum: 0,
      maximum: array.length - 1,
    },
    source,
  );
