import { _randomInteger } from "./_randomInteger";

/**
 * Select one element of an array using an integer draw.
 *
 * The optional source supplies draws in [0, 1); it defaults to the platform
 * source resolved when this helper is called. Nested draws use the same
 * source.
 *
 * @evidence contracts/common.md#principled-implementation The integer generator maps the supplied fraction to an index from zero through array.length minus one, and the element at that index is returned. Index probabilities are uniform only when the supplied source is uniform; a deterministic or biased source intentionally controls those choices. An empty array fails through the empty integer range.
 * @evidence contracts/performance.md#efficient-algorithms Source injection adds one callback invocation at each existing draw without adding sampling, retries or state. Existing output-size traversal and multiple search bounds are unchanged.
 * @evidence contracts/performance.md#reuse-equivalent-work Repeated selection calls the source again because its state or effects may change even for the same array. This selection reuses the caller's array by reference and caches neither its draw nor result.
 * @evidence contracts/performance.md#bound-retention-and-release-resources Selection has constant-sized index and schema scratch state and returns an existing candidate reference. No candidate array, source callback, history, handles or tasks are retained after return or throw; candidate lifetime remains with its owners.
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
